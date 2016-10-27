import React from 'react';

const ParticlesBatteryFull = (props) => {
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
<path d="M29.673 13.332h-0.67c-0.306 0-0.554-0.248-0.554-0.554v-0.313c0-0.995-0.806-1.801-1.801-1.801h-23.075c-0.995 0-1.801 0.806-1.801 1.801v7.069c0 0.995 0.806 1.801 1.801 1.801h23.075c0.995 0 1.801-0.806 1.801-1.801v-0.313c0-0.306 0.248-0.554 0.554-0.554h0.67c0.306 0 0.554-0.248 0.554-0.554v-4.227c0-0.306-0.248-0.554-0.554-0.554zM26.094 19.534h-21.967c-0.306 0-0.554-0.248-0.554-0.554v-5.961c0-0.306 0.248-0.554 0.554-0.554h21.967c0.306 0 0.554 0.248 0.554 0.554v5.961c0 0.306-0.248 0.554-0.554 0.554z"/>
<path d="M24.797 18.668h-19.594c-0.421 0-0.762-0.341-0.762-0.762v-3.812c0-0.421 0.341-0.762 0.762-0.762h19.594c0.421 0 0.762 0.341 0.762 0.762v3.812c0 0.421-0.341 0.762-0.762 0.762z"/>
</g>
    </svg>
  );
}

export default ParticlesBatteryFull;

