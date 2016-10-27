import React from 'react';

const ParticlesArrow = (props) => {
  const computedSize = props.size || '1em';
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={computedSize}
      width={computedSize}
      viewBox="0 0 32 32"
      style={{ verticalAlign: 'middle' }}
      {...props}
    >
      <g>
<path d="M30.044 27.108l-12.116-24.354c-0.267-0.533-0.769-0.89-1.346-0.974v-0.019h-1.164v0.019c-0.577 0.084-1.079 0.441-1.348 0.977l-12.114 24.348c-0.283 0.563-0.256 1.216 0.071 1.746 0.33 0.535 0.918 0.867 1.535 0.867 0 0 0 0 0 0 0.301 0 0.604-0.080 0.876-0.23l11.124-6.168c0.272-0.151 0.602-0.151 0.873 0l11.124 6.168c0.272 0.151 0.575 0.23 0.876 0.23 0.617 0 1.206-0.332 1.535-0.867 0.327-0.531 0.354-1.183 0.073-1.744zM14.781 21.164c0 0.327-0.177 0.629-0.464 0.787-1.374 0.762-5.495 3.047-8.218 4.556-0.773 0.429-1.636-0.397-1.242-1.189l9.661-19.418c0.065-0.131 0.263-0.085 0.263 0.062v15.202z"/>
</g>
    </svg>
  );
}

export default ParticlesArrow;

