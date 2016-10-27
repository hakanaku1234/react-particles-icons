import React from 'react';

const ParticlesRuler = (props) => {
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
<path d="M22.594 3.747l-18.847 18.847c-0.352 0.352-0.352 0.922 0 1.273l4.386 4.386c0.352 0.352 0.922 0.352 1.273 0l18.847-18.847c0.352-0.352 0.352-0.922 0-1.273l-4.386-4.386c-0.352-0.352-0.922-0.352-1.273-0zM25.706 9.406l-16.301 16.301c-0.352 0.352-0.922 0.352-1.273 0l-1.839-1.839c-0.352-0.352-0.352-0.922 0-1.273l0.499-0.499c0.054-0.054 0.142-0.054 0.196 0l0.497 0.497c0.343 0.343 0.901 0.374 1.26 0.048 0.383-0.348 0.393-0.942 0.031-1.303l-0.515-0.515c-0.054-0.054-0.054-0.142 0-0.196l0.836-0.836c0.054-0.054 0.142-0.054 0.196 0l0.497 0.497c0.343 0.343 0.901 0.374 1.26 0.048 0.383-0.348 0.393-0.942 0.031-1.303l-0.515-0.515c-0.054-0.054-0.054-0.142 0-0.196l0.836-0.836c0.054-0.054 0.142-0.054 0.196 0l0.497 0.497c0.343 0.343 0.901 0.374 1.26 0.048 0.383-0.348 0.393-0.942 0.031-1.303l-0.515-0.515c-0.054-0.054-0.054-0.142 0-0.196l0.836-0.836c0.054-0.054 0.142-0.054 0.196 0l0.497 0.497c0.343 0.343 0.901 0.374 1.26 0.048 0.383-0.348 0.393-0.942 0.031-1.303l-0.515-0.515c-0.054-0.054-0.054-0.142 0-0.196l0.836-0.836c0.054-0.054 0.142-0.054 0.196 0l0.497 0.497c0.343 0.343 0.901 0.374 1.26 0.048 0.383-0.348 0.393-0.942 0.032-1.303l-0.515-0.515c-0.054-0.054-0.054-0.142 0-0.196l0.836-0.836c0.054-0.054 0.142-0.054 0.196 0l0.497 0.497c0.343 0.343 0.901 0.374 1.26 0.048 0.383-0.348 0.393-0.942 0.032-1.303l-0.515-0.515c-0.054-0.054-0.054-0.142 0-0.196l0.836-0.836c0.054-0.054 0.142-0.054 0.196 0l0.497 0.497c0.343 0.343 0.901 0.374 1.26 0.048 0.383-0.348 0.393-0.942 0.032-1.303l-0.515-0.515c-0.054-0.054-0.054-0.142 0-0.196l0.499-0.499c0.352-0.352 0.922-0.352 1.273 0l1.839 1.839c0.352 0.352 0.352 0.922 0 1.273z"/>
</g>
    </svg>
  );
}

export default ParticlesRuler;

