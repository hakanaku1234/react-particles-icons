import React from 'react';

const ParticlesWatch = (props) => {
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
<path d="M10.676 5.329h11.537c0.497 0 0.9-0.403 0.9-0.9v-0.856c0-0.995-0.806-1.801-1.801-1.801h-9.737c-0.995 0-1.801 0.806-1.801 1.801v0.856c0 0.497 0.403 0.901 0.9 0.901z"/>
<path d="M22.213 26.671h-11.537c-0.497 0-0.9 0.403-0.9 0.9v0.856c0 0.995 0.806 1.801 1.801 1.801h9.737c0.995 0 1.801-0.806 1.801-1.801v-0.856c0-0.497-0.403-0.9-0.9-0.9z"/>
<path d="M25.504 14.283c-0.363-0.131-0.612-0.467-0.612-0.853v-2.909c0-0.478-0.19-0.936-0.527-1.273l-1.613-1.613c-0.338-0.338-0.796-0.527-1.273-0.527h-10.957c-0.478 0-0.936 0.19-1.273 0.527l-1.613 1.613c-0.338 0.338-0.527 0.796-0.527 1.273v10.957c0 0.478 0.19 0.936 0.527 1.273l1.613 1.613c0.338 0.338 0.796 0.527 1.273 0.527h10.957c0.478 0 0.936-0.19 1.273-0.527l1.613-1.613c0.338-0.338 0.527-0.796 0.527-1.273v-2.954c0-0.386 0.249-0.722 0.612-0.853 0.693-0.25 1.189-0.915 1.189-1.694s-0.496-1.444-1.189-1.694zM23.091 20.733c0 0.478-0.19 0.936-0.527 1.273l-0.558 0.558c-0.338 0.338-0.796 0.527-1.273 0.527h-9.465c-0.478 0-0.936-0.19-1.273-0.527l-0.558-0.558c-0.338-0.338-0.527-0.796-0.527-1.273v-9.465c0-0.478 0.19-0.936 0.527-1.273l0.558-0.558c0.338-0.338 0.796-0.527 1.273-0.527h9.465c0.478 0 0.936 0.19 1.273 0.527l0.558 0.558c0.338 0.338 0.527 0.796 0.527 1.273v9.465z"/>
<path d="M18.888 11.816l-2.103 2.103c-0.184 0.184-0.439 0.277-0.699 0.261-0.036-0.002-0.072-0.003-0.109-0.003-0.541 0-1.025 0.238-1.355 0.615-0.167 0.19-0.402 0.307-0.655 0.307h-2.388c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h2.431c0.251 0 0.492 0.104 0.661 0.289 0.367 0.403 0.915 0.639 1.516 0.58 0.858-0.085 1.544-0.788 1.611-1.648 0.006-0.080 0.007-0.159 0.003-0.236-0.013-0.251 0.085-0.495 0.263-0.673l2.144-2.144c0.356-0.356 0.352-0.935-0.012-1.285-0.357-0.344-0.932-0.318-1.283 0.033z"/>
</g>
    </svg>
  );
}

export default ParticlesWatch;

