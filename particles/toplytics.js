import React from 'react'

const ToplyticsIcon = (props) => {
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
<title>toplytics</title>
<path d="M9.913 14.476c-0.846 0-1.532 0.686-1.532 1.532v6.078c0 0.846 0.686 1.532 1.532 1.532h1.515c0.846 0 1.532-0.686 1.532-1.532v-6.078c0-0.846-0.686-1.532-1.532-1.532h-1.515zM11.437 16v6.095h-1.532v-6.095h1.532zM15.238 11.42c-0.846 0-1.532 0.686-1.532 1.532v9.134c0 0.846 0.686 1.532 1.532 1.532h1.515c0.846 0 1.532-0.686 1.532-1.532v-9.134c0-0.846-0.686-1.532-1.532-1.532h-1.515zM16.762 12.944v9.151h-1.532v-9.151h1.532zM20.571 16.753c-0.846 0-1.532 0.686-1.532 1.532v3.801c0 0.846 0.686 1.532 1.532 1.532h1.515c0.846 0 1.532-0.686 1.532-1.532v-3.801c0-0.846-0.686-1.532-1.532-1.532h-1.515zM22.095 18.277v3.818h-1.532v-3.818h1.532z"/>
<path d="M24.381 5.333l-18.286 0.001c-0.42 0-0.761 0.341-0.761 0.761s0.341 0.761 0.761 0.761h18.286c0.421 0 0.762 0.341 0.762 0.762v16.762c0 0.421-0.341 0.762-0.762 0.762h-16.762c-0.421 0-0.762-0.341-0.762-0.762v-13.714c0-0.421 0.341-0.762 0.762-0.762h6.857c0.421 0 0.762-0.341 0.762-0.762s-0.341-0.762-0.762-0.762c-0.001 0-0.001 0-0.002 0l-6.855-0c-1.262 0-2.286 1.023-2.286 2.286v13.714c0 1.262 1.023 2.286 2.286 2.286h16.762c1.262 0 2.286-1.023 2.286-2.286v-16.762c0-1.262-1.023-2.286-2.286-2.286z"/>
</g>
    </svg>
  )
}

export default ToplyticsIcon

