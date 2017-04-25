import React from 'react'

const ArrowSeIcon = (props) => {
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
<title>arrow-se</title>
<path d="M24.713 16.359c-0.495 0.038-0.865 0.47-0.827 0.964l0.384 4.988c0.020 0.256-0.29 0.398-0.471 0.217l-16.554-16.554c-0.342-0.342-0.899-0.373-1.257-0.048-0.382 0.348-0.392 0.939-0.031 1.3l16.572 16.572c0.181 0.181 0.039 0.491-0.217 0.471l-4.988-0.384c-0.495-0.038-0.926 0.332-0.965 0.827s0.332 0.926 0.827 0.964l8.134 0.626c0.175 0.014 0.354-0.016 0.509-0.099 0.324-0.173 0.503-0.515 0.476-0.864l-0.627-8.154c-0.038-0.495-0.47-0.865-0.964-0.827z"/>
</g>
    </svg>
  )
}

export default ArrowSeIcon

