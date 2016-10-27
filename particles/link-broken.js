import React from 'react';

const ParticlesLinkBroken = (props) => {
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
<path d="M26.406 5.57c-0.357-0.344-0.932-0.318-1.282 0.033l-2.426 2.426c-0.288 0.288-0.735 0.349-1.087 0.143-2.389-1.403-5.52-1.082-7.568 0.967l-1.097 1.097c-0.351 0.351-0.377 0.926-0.033 1.283 0.351 0.364 0.93 0.368 1.285 0.012l1.118-1.118c1.147-1.147 2.77-1.533 4.238-1.159 0.674 0.172 0.902 1.017 0.41 1.509l-1.088 1.088c-0.35 0.35-0.369 0.942-0.019 1.292 0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264l1.107-1.107c0.492-0.492 1.337-0.265 1.509 0.41 0.374 1.468-0.012 3.092-1.159 4.238l-1.099 1.099c-0.35 0.35-0.369 0.942-0.019 1.292 0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264l1.118-1.118c2.048-2.048 2.37-5.179 0.967-7.568-0.206-0.351-0.145-0.799 0.143-1.087l2.447-2.447c0.356-0.356 0.352-0.934-0.012-1.285z"/>
<path d="M17.781 20.491l-1.097 1.097c-1.147 1.147-2.77 1.533-4.238 1.159-0.675-0.172-0.902-1.017-0.41-1.509l1.107-1.107c0.352-0.352 0.352-0.922 0-1.273s-0.922-0.352-1.273 0l-1.105 1.106c-0.496 0.496-1.342 0.259-1.512-0.422-0.088-0.351-0.133-0.716-0.133-1.089 0-1.189 0.459-2.302 1.293-3.136l1.097-1.097c0.351-0.351 0.377-0.926 0.033-1.283-0.351-0.364-0.93-0.368-1.285-0.012l-1.118 1.118c-1.174 1.174-1.82 2.74-1.82 4.409 0 1.132 0.297 2.215 0.854 3.162 0.206 0.35 0.143 0.797-0.144 1.085l-2.447 2.447c-0.352 0.352-0.352 0.922 0 1.273 0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264l2.443-2.443c0.289-0.289 0.738-0.354 1.091-0.147 0.971 0.571 2.065 0.857 3.159 0.857 1.597 0 3.194-0.608 4.409-1.823l1.118-1.118c0.356-0.356 0.352-0.935-0.012-1.285-0.357-0.344-0.932-0.318-1.283 0.033z"/>
</g>
    </svg>
  );
}

export default ParticlesLinkBroken;

