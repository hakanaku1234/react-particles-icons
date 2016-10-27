import React from 'react';

const ParticlesQuestion = (props) => {
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
<path d="M16 5.352c2.844 0 5.518 1.108 7.529 3.119s3.119 4.685 3.119 7.529-1.108 5.518-3.119 7.529c-2.011 2.011-4.685 3.119-7.529 3.119s-5.518-1.108-7.529-3.119c-2.011-2.011-3.119-4.685-3.119-7.529s1.108-5.518 3.119-7.529c2.011-2.011 4.685-3.119 7.529-3.119zM16 3.551c-6.875 0-12.449 5.574-12.449 12.449s5.574 12.449 12.449 12.449 12.449-5.574 12.449-12.449c0-6.875-5.574-12.449-12.449-12.449v0z"/>
<path d="M16.9 22.213c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9z"/>
<path d="M16 20.457c-0.497 0-0.9-0.403-0.9-0.9v-0.079c0-1.566 0.859-3.042 2.241-3.851 0.812-0.476 1.316-1.355 1.316-2.294 0-1.465-1.192-2.656-2.656-2.656s-2.656 1.192-2.656 2.656c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9c0-2.458 1.999-4.457 4.457-4.457s4.457 1.999 4.457 4.457c0 1.576-0.846 3.051-2.207 3.848-0.833 0.488-1.35 1.368-1.35 2.298v0.079c0 0.497-0.403 0.9-0.9 0.9z"/>
</g>
    </svg>
  );
}

export default ParticlesQuestion;

