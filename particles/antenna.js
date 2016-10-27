import React from 'react';

const ParticlesAntenna = (props) => {
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
<path d="M23.552 10.995c-0.352-0.352-0.352-0.922 0-1.273l1.878-1.878c0.014-0.014 0.027-0.028 0.040-0.042 0.085-0.096 0.22-0.133 0.336-0.079 0.405 0.188 0.849 0.287 1.309 0.287 0.834 0 1.619-0.325 2.209-0.915 1.218-1.218 1.218-3.199 0-4.417-0.647-0.647-1.528-0.975-2.452-0.906-0.644 0.049-1.261 0.3-1.757 0.715-1.123 0.941-1.402 2.467-0.839 3.699 0.055 0.12 0.023 0.258-0.077 0.345-0.014 0.013-0.029 0.026-0.043 0.040l-1.878 1.878c-0.352 0.352-0.922 0.352-1.273 0l-6.149-6.149c-0.355-0.355-0.814-0.527-1.271-0.527-0.561 0-1.119 0.26-1.476 0.763-3.443 4.86-2.988 11.635 1.365 15.989 0.007 0.007 0.013 0.013 0.020 0.020 0.172 0.171 0.27 0.401 0.27 0.643v4.794c0 0.497-0.403 0.9-0.9 0.9h-2.201c-1.935 0-3.586 1.24-4.201 2.967-0.125 0.352-0.455 0.59-0.829 0.59h-1.169c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h23.094c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-1.195c-0.374 0-0.704-0.238-0.829-0.59-0.615-1.727-2.266-2.967-4.201-2.967h-2.201c-0.497 0-0.9-0.403-0.9-0.9v-1.285c0-0.583 0.545-1.012 1.111-0.875 0.963 0.233 1.948 0.349 2.933 0.349 2.52 0 5.040-0.76 7.186-2.281 0.912-0.646 1.026-1.956 0.236-2.746l-6.149-6.149zM26.18 3.95c0.25-0.25 0.582-0.387 0.935-0.387s0.685 0.138 0.935 0.387c0.516 0.516 0.516 1.355 0 1.87-0.25 0.25-0.582 0.387-0.935 0.387s-0.685-0.138-0.935-0.387c-0.516-0.516-0.516-1.355 0-1.87zM21.335 26.682c0.036 0 0.072 0.001 0.108 0.002 1.135 0.046 1.083 1.754-0.052 1.754l-10.781-0c-1.136 0-1.187-1.709-0.052-1.754 0.036-0.001 0.071-0.002 0.107-0.002h10.671zM15.567 24.448v-3.483c0-0.335 0.364-0.543 0.653-0.374v0c0.133 0.078 0.214 0.22 0.214 0.374v3.483c0 0.239-0.194 0.433-0.433 0.433v0c-0.239 0-0.433-0.194-0.433-0.433zM27.626 17.623c0.42 0.42 0.328 1.131-0.192 1.419-1.569 0.871-3.33 1.327-5.156 1.327-1.41 0-2.778-0.273-4.044-0.792-1.060-0.435-2.049-1.043-2.931-1.81-0.19-0.165-0.375-0.337-0.554-0.516-1.788-1.788-2.883-4.158-3.085-6.675-0.167-2.090 0.286-4.178 1.284-5.992 0.291-0.528 1.003-0.635 1.429-0.209l13.248 13.248z"/>
</g>
    </svg>
  );
}

export default ParticlesAntenna;

