import React from 'react';

const StarBorder = ({
  as: Component = 'div',
  children,
  className = '',
  innerClassName = '',
  gradient = 'conic-gradient(from 90deg, transparent 0deg, transparent 115deg, rgba(59, 130, 246, 0.95) 160deg, rgba(34, 211, 238, 0.9) 185deg, transparent 235deg, transparent 360deg)',
  ...props
}) => {
  return (
    <Component
      className={`group/star relative inline-flex w-fit max-w-full overflow-hidden bg-blue-400/25 p-[1px] sm:bg-transparent ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-[-160%] hidden animate-spin opacity-70 transition-opacity duration-300 group-hover/star:opacity-100 motion-reduce:hidden sm:block"
        style={{
          animationDuration: '8s',
          background: gradient,
        }}
      />

      <span
        className={`relative z-10 inline-flex h-full w-full min-w-0 items-center justify-center rounded-[inherit] ${innerClassName}`}
      >
        {children}
      </span>
    </Component>
  );
};

export default StarBorder;