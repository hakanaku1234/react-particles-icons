import React from 'react';

const ParticlesKey = (props) => {
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
<path d="M24.775 5.957l-12.767 12.767c-0.268 0.268-0.676 0.341-1.018 0.178-1.69-0.801-3.781-0.477-5.146 0.974-1.581 1.68-1.603 4.332-0.049 6.036 1.721 1.887 4.647 1.937 6.433 0.152 1.366-1.366 1.657-3.401 0.873-5.052-0.163-0.343-0.083-0.753 0.185-1.021l8.381-8.381c0.347-0.347 0.91-0.347 1.258 0l1.242 1.242c0.352 0.352 0.922 0.352 1.273 0l1.87-1.87c0.352-0.352 0.352-0.922 0-1.273l-1.242-1.242c-0.347-0.347-0.347-0.91 0-1.258v0c0.356-0.356 0.352-0.935-0.012-1.285-0.35-0.338-0.938-0.311-1.282 0.033zM10.956 24.791c-1.031 1.031-2.71 1.031-3.741 0s-1.031-2.71 0-3.741 2.71-1.031 3.741 0 1.031 2.71 0 3.741z"/>
</g>
    </svg>
  );
}

export default ParticlesKey;

