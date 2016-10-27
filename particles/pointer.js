import React from 'react';

const ParticlesPointer = (props) => {
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
<path d="M27.115 11.543h-7.536c-0.497 0-0.9-0.403-0.9-0.9v-3.935c0-1.747-1.402-3.167-3.125-3.167-0.020 0-0.039 0-0.059 0.001-1.689 0.032-3.063 1.433-3.063 3.123 0 2.428-1.026 3.841-2.799 5.461-0.178 0.163-0.35 0.324-0.518 0.485-0.086 0.083-0.229 0.021-0.229-0.098 0-0.528-0.403-0.957-0.9-0.957h-5.313c-0.497 0-0.9 0.428-0.9 0.957v13.203c0 0.528 0.403 0.957 0.9 0.957h5.313c0.497 0 0.9-0.428 0.9-0.957v-0.152c0-0.098 0.099-0.165 0.19-0.128l2.752 1.113c0.017 0.007 0.035 0.014 0.053 0.019 0.276 0.092 0.563 0.139 0.854 0.139h7.711c1.492 0 2.701-1.209 2.701-2.701v-5.382c0-0.459 0.372-0.831 0.831-0.831h3.093c0.848 0 1.677-0.349 2.274-0.957 0.592-0.603 0.909-1.394 0.893-2.227-0.032-1.689-1.433-3.063-3.123-3.063zM7.085 24.039c0 0.459-0.372 0.831-0.831 0.831h-1.85c-0.459 0-0.831-0.372-0.831-0.831v-9.853c0-0.459 0.372-0.831 0.831-0.831h1.85c0.459 0 0.831 0.372 0.831 0.831v9.853zM28.060 15.571c-0.26 0.265-0.62 0.417-0.988 0.417h-3.924c-0.995 0-1.801 0.806-1.801 1.801v6.213c0 0.497-0.403 0.9-0.9 0.9h-7.711c-0.089 0-0.177-0.013-0.262-0.039l-3.056-1.236c-0.314-0.127-0.52-0.432-0.52-0.771v-7.102c0-0.205 0.076-0.402 0.213-0.556 0.512-0.574 1.085-1.149 1.738-1.746 2.032-1.857 3.385-3.722 3.385-6.79 0-0.715 0.582-1.309 1.296-1.322l0.025-0c0.718 0 1.324 0.626 1.324 1.367v3.935c0 1.492 1.209 2.701 2.701 2.701h7.496c0.607 0 1.158 0.394 1.317 0.98 0.123 0.454-0.006 0.915-0.333 1.247z"/>
<path d="M6.219 22.225c0 0.491-0.398 0.889-0.889 0.889s-0.889-0.398-0.889-0.889c0-0.491 0.398-0.889 0.889-0.889s0.889 0.398 0.889 0.889z"/>
</g>
    </svg>
  );
}

export default ParticlesPointer;

