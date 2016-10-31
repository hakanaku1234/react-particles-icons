import React from 'react'

const MappingIcon = (props) => {
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
<path d="M26.667 7.619v16.762c0 1.262-1.023 2.286-2.286 2.286h-16.762c-1.262 0-2.286-1.023-2.286-2.286v-13.714c0-1.262 1.023-2.286 2.286-2.286l6.855 0c0.001 0 0.001-0 0.002-0 0.421 0 0.762 0.341 0.762 0.762s-0.341 0.762-0.762 0.762h-6.857c-0.421 0-0.762 0.341-0.762 0.762v13.714c0 0.421 0.341 0.762 0.762 0.762h16.762c0.421 0 0.762-0.341 0.762-0.762v-16.762c0-0.421-0.341-0.762-0.762-0.762h-18.286c-0.42 0-0.761-0.341-0.761-0.761s0.341-0.761 0.761-0.761l18.286-0.001c1.262 0 2.286 1.023 2.286 2.286zM22.095 19.048v0c0-0.421-0.341-0.762-0.762-0.762h-7.619c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h7.619c0.421 0 0.762-0.341 0.762-0.762zM20.571 16v0c0-0.421-0.341-0.762-0.762-0.762h-6.095c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h6.095c0.421 0 0.762-0.341 0.762-0.762zM22.095 12.952v0c0-0.421-0.341-0.762-0.762-0.762h-7.619c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h7.619c0.421 0 0.762-0.341 0.762-0.762zM19.048 22.095v0c0-0.421-0.341-0.762-0.762-0.762h-4.571c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h4.571c0.421 0 0.762-0.341 0.762-0.762zM11.429 13.714h-0.762c-0.421 0-0.762-0.341-0.762-0.762v0c0-0.421 0.341-0.762 0.762-0.762h0.762c0.421 0 0.762 0.341 0.762 0.762v0c0 0.421-0.341 0.762-0.762 0.762zM12.19 16v0c0-0.421-0.341-0.762-0.762-0.762h-0.762c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h0.762c0.421 0 0.762-0.341 0.762-0.762zM12.19 19.048v0c0-0.421-0.341-0.762-0.762-0.762h-0.762c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h0.762c0.421 0 0.762-0.341 0.762-0.762zM12.19 22.095v0c0-0.421-0.341-0.762-0.762-0.762h-0.762c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h0.762c0.421 0 0.762-0.341 0.762-0.762z"/>
</g>
    </svg>
  )
}

export default MappingIcon
