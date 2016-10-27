import React from 'react';

const ParticlesBulb = (props) => {
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
<path d="M17.778 28.438h-3.557c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h3.557c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M18.668 25.77h-5.335c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h5.335c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M16.12 1.773c-0.039-0-0.079-0.001-0.119-0.001-5.295 0-9.671 4.266-9.781 9.573-0.077 3.706 1.908 6.955 4.885 8.679 0.277 0.161 0.448 0.457 0.448 0.778v2.289c0 0.995 0.806 1.801 1.801 1.801h5.29c0.995 0 1.801-0.806 1.801-1.801v-2.289c0-0.32 0.169-0.617 0.446-0.777 2.923-1.691 4.889-4.852 4.889-8.472-0-5.362-4.315-9.716-9.662-9.781zM22.881 15.599c-0.699 1.187-1.699 2.179-2.891 2.868-0.83 0.48-1.345 1.375-1.345 2.335v1.388c0 0.497-0.403 0.9-0.9 0.9l-3.49-0c-0.497 0-0.9-0.403-0.9-0.9v-1.388c0-0.96-0.516-1.855-1.346-2.336-1.216-0.704-2.229-1.719-2.93-2.937-0.722-1.253-1.088-2.687-1.057-4.146 0.043-2.090 0.897-4.053 2.405-5.527 1.506-1.472 3.486-2.283 5.576-2.283 0.032 0 0.064 0 0.097 0.001 2.111 0.025 4.091 0.867 5.577 2.369 1.487 1.504 2.305 3.496 2.305 5.611 0 1.426-0.38 2.825-1.099 4.045z"/>
<path d="M16 5.318c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9c2.445 0 4.435 1.989 4.435 4.435 0 0.497 0.403 0.9 0.9 0.9s0.9-0.403 0.9-0.9c0-3.438-2.797-6.236-6.236-6.236z"/>
</g>
    </svg>
  );
}

export default ParticlesBulb;

