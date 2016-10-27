import React from 'react';

const ParticlesBill = (props) => {
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
<path d="M30.228 14.206v0-5.309c0-0.168-0.047-0.324-0.126-0.458-0.020-0.034-0.042-0.066-0.066-0.097-0.006-0.008-0.012-0.016-0.018-0.023-0.035-0.042-0.074-0.081-0.117-0.116-0.044-0.037-0.093-0.069-0.144-0.097-0.128-0.069-0.274-0.109-0.429-0.109v0h-26.654c-0.031 0-0.062 0.002-0.092 0.005-0.091 0.009-0.178 0.032-0.258 0.066-0.135 0.057-0.253 0.146-0.344 0.257-0.037 0.044-0.069 0.093-0.097 0.144-0.069 0.128-0.109 0.274-0.109 0.429v14.205c0 0.497 0.403 0.9 0.9 0.9h26.654c0.497 0 0.9-0.403 0.9-0.9v-0.015c0 0 0-0 0-0v-8.881zM23.787 9.798c0.352 0 0.672 0.206 0.819 0.526 0.457 0.998 1.153 1.864 2.015 2.525 0.078 0.060 0.157 0.118 0.238 0.174 0.404 0.282 0.84 0.52 1.303 0.708 0.161 0.065 0.266 0.22 0.266 0.394v3.734c0 0.174-0.106 0.329-0.267 0.394-0.278 0.113-0.546 0.244-0.803 0.392s-0.503 0.311-0.736 0.491c-0.701 0.537-1.293 1.211-1.735 1.981-0.104 0.182-0.2 0.369-0.288 0.561-0.145 0.32-0.466 0.524-0.818 0.524l-15.57-0.004c-0.359-0-0.683-0.214-0.826-0.543-0.051-0.116-0.098-0.221-0.127-0.278-0.045-0.088-0.093-0.175-0.142-0.26-0.737-1.284-1.89-2.3-3.275-2.863-0.161-0.065-0.267-0.22-0.267-0.394v-3.731c0-0.174 0.105-0.331 0.267-0.396l0.003-0.001c0.185-0.075 0.365-0.158 0.541-0.249 0.088-0.045 0.175-0.093 0.26-0.142 0.428-0.246 0.826-0.537 1.187-0.868 0.651-0.596 1.183-1.319 1.556-2.13 0.002-0.003 0.003-0.007 0.005-0.010 0.148-0.323 0.467-0.533 0.822-0.533h15.573z"/>
<path d="M8.909 16c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M26.693 16c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M19.557 16c0 2.947-1.592 5.335-3.557 5.335s-3.557-2.389-3.557-5.335c0-2.947 1.592-5.335 3.557-5.335s3.557 2.389 3.557 5.335z"/>
</g>
    </svg>
  );
}

export default ParticlesBill;

