import React from 'react';

const ParticlesAdd2 = (props) => {
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
<path d="M16 3.551c-6.875 0-12.449 5.574-12.449 12.449s5.574 12.449 12.449 12.449 12.449-5.574 12.449-12.449c0-6.875-5.574-12.449-12.449-12.449zM23.529 23.529c-2.011 2.011-4.685 3.119-7.529 3.119s-5.518-1.108-7.529-3.119c-2.011-2.011-3.119-4.685-3.119-7.529s1.108-5.518 3.119-7.529c2.011-2.011 4.685-3.119 7.529-3.119s5.518 1.108 7.529 3.119c2.011 2.011 3.119 4.685 3.119 7.529s-1.108 5.518-3.119 7.529z"/>
<path d="M23.088 15.1h-5.634c-0.306 0-0.554-0.248-0.554-0.554v-5.634c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v5.659c0 0.306-0.248 0.554-0.554 0.554h-5.634c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h5.659c0.306 0 0.554 0.248 0.554 0.554v5.634c0 0.485 0.373 0.902 0.857 0.925 0.517 0.024 0.944-0.388 0.944-0.899v-5.659c0-0.306 0.248-0.554 0.554-0.554h5.659c0.512 0 0.924-0.427 0.899-0.944-0.023-0.484-0.44-0.857-0.925-0.857z"/>
</g>
    </svg>
  );
}

export default ParticlesAdd2;

