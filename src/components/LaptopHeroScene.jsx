import React, { useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Vite serves public/models/laptop.glb at this URL. Case matters on Hostinger.
const LAPTOP_URL = '/models/laptop.glb';
const LID_CLIP_NAME = 'Laptop_LidAction';

function LaptopModel({ closeProgress, reducedMotion, onReady }) {
  const { scene, animations } = useLoader(GLTFLoader, LAPTOP_URL);
  const model = useMemo(() => scene.clone(true), [scene]);
  const clip = useMemo(
    () => animations.find((item) => item.name === LID_CLIP_NAME),
    [animations]
  );
  const mixer = useMemo(() => new THREE.AnimationMixer(model), [model]);
  const introProgress = useMotionValue(reducedMotion ? 1 : 0);
  const invalidate = useThree((state) => state.invalidate);

  // Use the model's original animation: 0 = closed, 2.5s = open.
  // No Blender re-rigging or custom lid rotations required.
  useEffect(() => {
    if (!clip) {
      console.error(`The model is missing ${LID_CLIP_NAME}.`);
      return undefined;
    }

    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.play();
    mixer.setTime(0);
    invalidate();
    onReady();

    return () => {
      action.stop();
      mixer.uncacheRoot(model);
    };
  }, [clip, invalidate, mixer, model, onReady]);

  useEffect(() => {
    if (reducedMotion) {
      introProgress.set(1);
      invalidate();
      return undefined;
    }

    introProgress.set(0);
    const controls = animate(introProgress, 1, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [introProgress, invalidate, reducedMotion]);

  // Render only while an animation value is changing. An idle 3D hero
  // should not keep a 60-fps WebGL render loop running in the background.
  useEffect(() => {
    const stopIntro = introProgress.on('change', () => invalidate());
    const stopScroll = closeProgress.on('change', () => invalidate());
    invalidate();
    return () => {
      stopIntro();
      stopScroll();
    };
  }, [introProgress, closeProgress, invalidate]);

  useFrame(() => {
    if (!clip) return;
    const open = reducedMotion
      ? 1
      : THREE.MathUtils.clamp(
          introProgress.get() * (1 - closeProgress.get()),
          0,
          1
        );
    // Staying just below clip.duration avoids the LoopRepeat boundary
    // snapping from fully open back to the closed first keyframe.
    mixer.setTime(Math.min(open * clip.duration, clip.duration - 0.00001));
  });

  return (
    <group position={[0, -0.14, 0]} rotation={[0, -1.5, 0]}>
      <primitive object={model} />
    </group>
  );
}

function CameraTarget() {
  const camera = useThree((state) => state.camera);
  useEffect(() => {
    camera.lookAt(0, 0.8, 0);
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
}

function VideoFallback({ onReady }) {
  useEffect(() => onReady(), [onReady]);
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
      <source src="/videos/it_services.webm" type="video/webm" />
      <source src="/videos/it_services.mp4" type="video/mp4" />
    </video>
  );
}

// A WebGL failure should never leave the homepage hero blank.
class LaptopErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error('Ozony laptop renderer failed:', error);
  }

  render() {
    return this.state.failed
      ? <VideoFallback onReady={this.props.onReady} />
      : this.props.children;
  }
}

export default function LaptopHeroScene(props) {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setSupported(Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl')));
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) return <VideoFallback onReady={props.onReady} />;

  return (
    <LaptopErrorBoundary onReady={props.onReady}>
      <Canvas
        className="pointer-events-none"
        dpr={[1, 1.5]}
        frameloop="demand"
        camera={{
          position: [5.0, 3.35, 5.8],
          fov: 35,
          near: 0.1,
          far: 100,
        }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <CameraTarget />
        <ambientLight intensity={1.45} />
        <hemisphereLight args={['#b8d7ff', '#101b35', 1.1]} />
        <directionalLight position={[3, 8, 5]} intensity={2.6} />
        <directionalLight position={[-4, 4, -5]} intensity={1.8} color="#60a5fa" />
        <React.Suspense fallback={null}>
          <LaptopModel {...props} />
        </React.Suspense>
      </Canvas>
    </LaptopErrorBoundary>
  );
}
