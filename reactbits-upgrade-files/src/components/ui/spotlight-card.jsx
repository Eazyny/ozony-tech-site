import React, { useRef, useState } from 'react';

const SpotlightCard = ({
  as: Component = 'div',
  children,
  className = '',
  spotlightColor = 'rgba(59, 130, 246, 0.22)',
  spotlightSize = 420,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const updateSpotlightPosition = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleMouseEnter = (event) => {
    setIsActive(true);
    updateSpotlightPosition(event);
    onMouseEnter?.(event);
  };

  const handleMouseMove = (event) => {
    updateSpotlightPosition(event);
    onMouseMove?.(event);
  };

  const handleMouseLeave = (event) => {
    setIsActive(false);
    onMouseLeave?.(event);
  };

  return (
    <Component
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(${spotlightSize}px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${spotlightColor}, transparent 68%)`,
          mixBlendMode: 'screen',
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
};

export default SpotlightCard;
