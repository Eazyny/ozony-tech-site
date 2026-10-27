
import React, {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';

import {
  animate,
  useMotionValue,
} from 'framer-motion';

import * as THREE from 'three';

import { GLTFLoader } from
  'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_URL = '/models/laptop.glb';

const SCOUT_URL =
  'https://scout.ozony.tech/login';

const ANIMATION_NAME = 'Laptop_LidAction';

// Preserve your approved angle.
const LAPTOP_ROTATION = -2.5;

// Virtual resolution for the live Scout website.
const SCREEN_WIDTH = 1152;
const SCREEN_HEIGHT = 632;

// Leave a little clearance around the display bezel.
const HORIZONTAL_INSET = 0.012;
const VERTICAL_INSET = 0.02;

// Convert four screen-space corners into
// an exact CSS perspective transform.
function getPerspectiveTransform(corners) {
  const [tl, tr, br, bl] = corners;

  const x0 = tl.x;
  const y0 = tl.y;

  const x1 = tr.x;
  const y1 = tr.y;

  const x2 = br.x;
  const y2 = br.y;

  const x3 = bl.x;
  const y3 = bl.y;

  const dx1 = x1 - x2;
  const dy1 = y1 - y2;

  const dx2 = x3 - x2;
  const dy2 = y3 - y2;

  const dx3 = x0 - x1 + x2 - x3;
  const dy3 = y0 - y1 + y2 - y3;

  const denominator =
    dx1 * dy2 - dx2 * dy1;

  // Hide the overlay if the display becomes
  // too edge-on to calculate a stable projection.
  if (Math.abs(denominator) < 0.0001) {
    return null;
  }

  const g =
    (dx3 * dy2 - dx2 * dy3) /
    denominator;

  const h =
    (dx1 * dy3 - dx3 * dy1) /
    denominator;

  const a = x1 - x0 + g * x1;
  const b = x3 - x0 + h * x3;
  const c = x0;

  const d = y1 - y0 + g * y1;
  const e = y3 - y0 + h * y3;
  const f = y0;

  const matrix = [
    a / SCREEN_WIDTH,
    d / SCREEN_WIDTH,
    0,
    g / SCREEN_WIDTH,

    b / SCREEN_HEIGHT,
    e / SCREEN_HEIGHT,
    0,
    h / SCREEN_HEIGHT,

    0,
    0,
    1,
    0,

    c,
    f,
    0,
    1,
  ];

  if (!matrix.every(Number.isFinite)) {
    return null;
  }

  return `matrix3d(${matrix.join(',')})`;
}

// Find the four actual corners of the screen mesh
// using the UV coordinates exported from Blender.
function getScreenCorners(screen) {
  const geometry = screen.geometry;

  const positions =
    geometry?.getAttribute('position');

  const uv =
    geometry?.getAttribute('uv');

  if (!positions || !uv) {
    throw new Error(
      'laptop_screen requires position and UV attributes.'
    );
  }

  function findCorner(targetU, targetV) {
    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < uv.count; i++) {
      const u = uv.getX(i);
      const v = uv.getY(i);

      const distance =
        (u - targetU) ** 2 +
        (v - targetV) ** 2;

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }

    return new THREE.Vector3()
      .fromBufferAttribute(
        positions,
        closestIndex
      );
  }

  const topLeft = findCorner(0, 0);
  const topRight = findCorner(1, 0);
  const bottomRight = findCorner(1, 1);
  const bottomLeft = findCorner(0, 1);

  function pointAt(u, v) {
    const top = new THREE.Vector3()
      .lerpVectors(topLeft, topRight, u);

    const bottom = new THREE.Vector3()
      .lerpVectors(bottomLeft, bottomRight, u);

    return top.lerp(bottom, v);
  }

  const left = HORIZONTAL_INSET;
  const right = 1 - HORIZONTAL_INSET;

  const top = VERTICAL_INSET;
  const bottom = 1 - VERTICAL_INSET;

  return [
    pointAt(left, top),
    pointAt(right, top),
    pointAt(right, bottom),
    pointAt(left, bottom),
  ];
}

function LaptopModel({
  closeProgress,
  reducedMotion,
  onReady,
  screenOverlayRef,
}) {
  const { scene, animations } = useLoader(
    GLTFLoader,
    MODEL_URL
  );

  const model = useMemo(
    () => scene.clone(true),
    [scene]
  );

  const screen = useMemo(
    () => model.getObjectByName('laptop_screen'),
    [model]
  );

  const clip = useMemo(
    () => animations.find(
      (item) => item.name === ANIMATION_NAME
    ),
    [animations]
  );

  const mixer = useMemo(
    () => new THREE.AnimationMixer(model),
    [model]
  );

  const screenCorners = useMemo(() => {
    if (!screen?.isMesh) return null;

    return getScreenCorners(screen);
  }, [screen]);

  const introProgress = useMotionValue(
    reducedMotion ? 1 : 0
  );

  const invalidate = useThree(
    (state) => state.invalidate
  );

  if (!screen || !screenCorners || !clip) {
    throw new Error(
      'Laptop GLB is missing its screen mesh or lid animation.'
    );
  }

  useEffect(() => {
    const action = mixer.clipAction(clip);

    action.setLoop(
      THREE.LoopRepeat,
      Infinity
    );

    action.play();

    mixer.setTime(0);
    invalidate();

    onReady?.();

    return () => {
      action.stop();
      mixer.uncacheRoot(model);
    };
  }, [
    clip,
    mixer,
    model,
    invalidate,
    onReady,
  ]);

  useEffect(() => {
    if (reducedMotion) {
      introProgress.set(1);
      invalidate();
      return undefined;
    }

    introProgress.set(0);

    const controls = animate(
      introProgress,
      1,
      {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      }
    );

    return () => controls.stop();
  }, [
    reducedMotion,
    introProgress,
    invalidate,
  ]);

  useEffect(() => {
    const unsubscribeIntro = introProgress.on(
      'change',
      invalidate
    );

    const unsubscribeScroll = closeProgress.on(
      'change',
      invalidate
    );

    invalidate();

    return () => {
      unsubscribeIntro();
      unsubscribeScroll();
    };
  }, [
    introProgress,
    closeProgress,
    invalidate,
  ]);

  useFrame(({ camera, size }) => {
    const openness = reducedMotion
      ? 1
      : THREE.MathUtils.clamp(
          introProgress.get() *
            (1 - closeProgress.get()),
          0,
          1
        );

    // Preserve the Blender lid animation.
    mixer.setTime(
      Math.min(
        openness * clip.duration,
        clip.duration - 0.00001
      )
    );

    // Update the physical screen's world matrix
    // after advancing the lid animation.
    screen.updateWorldMatrix(true, false);

    const overlay = screenOverlayRef.current;

    if (!overlay) return;

    // Project each physical screen corner
    // onto the actual canvas coordinates.
    const projectedCorners = screenCorners.map(
      (corner) => {
        const point = corner
          .clone()
          .applyMatrix4(screen.matrixWorld)
          .project(camera);

        return {
          x: (point.x * 0.5 + 0.5) * size.width,
          y: (0.5 - point.y * 0.5) * size.height,
          z: point.z,
        };
      }
    );

    // Don't display a projected page behind
    // the camera or at an invalid angle.
    if (
      projectedCorners.some(
        (point) =>
          !Number.isFinite(point.x) ||
          !Number.isFinite(point.y) ||
          point.z < -1 ||
          point.z > 1
      )
    ) {
      overlay.style.opacity = '0';
      return;
    }

    const transform = getPerspectiveTransform(
      projectedCorners
    );

    if (!transform) {
      overlay.style.opacity = '0';
      return;
    }

    // Fit the entire iframe to the actual
    // four corners of laptop_screen.
    overlay.style.transform = transform;

    const visibility =
      THREE.MathUtils.smoothstep(
        openness,
        0.48,
        0.8
      );

    overlay.style.opacity = String(visibility);
  });

  return (
    <group
      position={[0, -0.14, 0]}
      rotation={[0, LAPTOP_ROTATION, 0]}
    >
      <primitive object={model} />
    </group>
  );
}

function CameraTarget() {
  const camera = useThree(
    (state) => state.camera
  );

  const invalidate = useThree(
    (state) => state.invalidate
  );

  useEffect(() => {
    camera.lookAt(0, 0.8, 0);
    camera.updateProjectionMatrix();
    invalidate();
  }, [camera, invalidate]);

  return null;
}

function VideoFallback({ onReady }) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source
        src="/videos/it_services.webm"
        type="video/webm"
      />

      <source
        src="/videos/it_services.mp4"
        type="video/mp4"
      />
    </video>
  );
}

class LaptopErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      failed: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      failed: true,
    };
  }

  componentDidCatch(error) {
    console.error(
      'Ozony laptop scene failed:',
      error
    );
  }

  render() {
    if (this.state.failed) {
      return (
        <VideoFallback
          onReady={this.props.onReady}
        />
      );
    }

    return this.props.children;
  }
}

export default function LaptopHeroScene(props) {
  const overlayRef = useRef(null);

  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');

      setSupported(
        Boolean(
          canvas.getContext('webgl2') ||
          canvas.getContext('webgl')
        )
      );
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) {
    return (
      <VideoFallback onReady={props.onReady} />
    );
  }

  return (
    <LaptopErrorBoundary onReady={props.onReady}>
      <div
        className="relative h-full w-full"
        style={{
          isolation: 'isolate',
        }}
      >
        <Canvas
          className="pointer-events-none"
          dpr={[1, 1.5]}
          frameloop="demand"
          camera={{
            position: [-5.0, 3.35, 5.8],
            fov: 35,
            near: 0.1,
            far: 100,
          }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
          }}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        >
          <CameraTarget />

          <ambientLight intensity={1.45} />

          <hemisphereLight
            args={['#b8d7ff', '#101b35', 1.1]}
          />

          <directionalLight
            position={[3, 8, 5]}
            intensity={2.6}
          />

          <directionalLight
            position={[-4, 4, -5]}
            intensity={1.8}
            color="#60a5fa"
          />

          <Suspense fallback={null}>
            <LaptopModel
              {...props}
              screenOverlayRef={overlayRef}
            />
          </Suspense>
        </Canvas>

        {/*
          The live Scout website is now a CSS layer
          projected onto the four actual corners
          of the laptop_screen mesh.

          No manually positioned HTML plane.
        */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 2,
            overflow: 'visible',
          }}
        >
          <div
            ref={overlayRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              transformOrigin: '0 0',
              opacity: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
              background: '#041224',
              willChange: 'transform, opacity',
            }}
          >
            <iframe
              title="Scout by Ozony Tech live preview"
              src={SCOUT_URL}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
              loading="eager"
              tabIndex={-1}
              aria-hidden="true"
              sandbox="allow-scripts allow-same-origin"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                display: 'block',
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
                border: 0,
                background: '#041224',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </LaptopErrorBoundary>
  );
}
