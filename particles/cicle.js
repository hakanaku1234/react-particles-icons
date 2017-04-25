import React from 'react'

const CicleIcon = (props) => {
  const computedSize = props.size || '1em'
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ computedSize }
      width={ computedSize }
      viewBox="0 0 32 32"
      style={ { verticalAlign: 'middle' } }
      { ...props }
    >
      <g>
<title>cicle</title>
<path d="M19.307 4.723l-4.211-2.807c-0.426-0.284-1.005-0.157-1.272 0.286-0.25 0.416-0.109 0.957 0.294 1.226l1.36 0.907c0.111 0.074 0.063 0.247-0.071 0.253-6.027 0.31-10.836 5.31-10.836 11.412 0 3.935 1.986 7.545 5.313 9.656 0.15 0.095 0.317 0.14 0.482 0.14 0.298 0 0.59-0.148 0.761-0.418 0.266-0.42 0.142-0.976-0.278-1.243-2.803-1.779-4.477-4.82-4.477-8.135 0-5.084 3.96-9.259 8.958-9.604 0.142-0.010 0.206 0.175 0.087 0.254l-1.299 0.866c-0.41 0.273-0.546 0.827-0.283 1.244 0.172 0.272 0.464 0.42 0.762 0.42 0.172 0 0.345-0.049 0.499-0.151l4.211-2.807c0.251-0.167 0.401-0.448 0.401-0.749s-0.15-0.582-0.401-0.749z"/>
<path d="M12.693 27.277l4.211 2.807c0.426 0.284 1.005 0.157 1.272-0.286 0.25-0.416 0.109-0.957-0.294-1.226l-1.36-0.907c-0.111-0.074-0.063-0.247 0.071-0.253 6.027-0.31 10.836-5.31 10.836-11.412 0-3.935-1.986-7.545-5.313-9.656-0.15-0.095-0.317-0.14-0.482-0.14-0.298 0-0.59 0.148-0.761 0.418-0.266 0.42-0.142 0.976 0.278 1.243 2.803 1.779 4.477 4.82 4.477 8.135 0 5.084-3.96 9.259-8.958 9.604-0.142 0.010-0.206-0.175-0.087-0.254l1.299-0.866c0.41-0.273 0.546-0.827 0.283-1.244-0.172-0.272-0.464-0.42-0.762-0.42-0.172 0-0.345 0.049-0.499 0.151l-4.211 2.807c-0.251 0.167-0.401 0.448-0.401 0.749s0.15 0.582 0.401 0.749z"/>
</g>
    </svg>
  )
}

export default CicleIcon

