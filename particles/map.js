import React from 'react'

const MapIcon = (props) => {
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
<title>map</title>
<path d="M29.883 6.726l-6.229-4.885c-0.16-0.12-0.35-0.18-0.54-0.18s-0.38 0.060-0.54 0.18l-6.018 4.719c-0.163 0.128-0.359 0.192-0.556 0.192s-0.393-0.064-0.556-0.192l-6.018-4.719c-0.16-0.12-0.35-0.18-0.54-0.18s-0.38 0.060-0.54 0.18l-6.229 4.885c-0.218 0.171-0.345 0.432-0.345 0.708v21.779c0 0.538 0.441 0.902 0.906 0.902 0.203 0 0.411-0.070 0.588-0.225l5.046-4.588c0.171-0.156 0.388-0.234 0.606-0.234 0.202 0 0.404 0.068 0.57 0.204l5.92 4.843c0.17 0.148 0.381 0.223 0.593 0.223s0.423-0.074 0.593-0.223l5.92-4.843c0.166-0.136 0.368-0.204 0.57-0.204 0.218 0 0.435 0.078 0.606 0.234l5.046 4.588c0.177 0.155 0.385 0.225 0.588 0.225 0.465 0 0.906-0.364 0.906-0.902v-21.779c0-0.277-0.127-0.538-0.345-0.709zM3.573 25.38v-17.069c0-0.277 0.127-0.538 0.345-0.708l3.512-2.754c0.591-0.463 1.456-0.042 1.456 0.708v15.924c0 0.476-0.189 0.933-0.525 1.271l-3.25 3.263c-0.567 0.569-1.538 0.168-1.538-0.635zM16.9 25.598v-16.719c0-0.29 0.139-0.562 0.375-0.731 0.856-0.614 2.956-2.221 4.389-3.324 0.592-0.455 1.449-0.033 1.449 0.714v15.856c0 0.526-0.229 1.025-0.628 1.367-0.953 0.817-2.791 2.396-4.097 3.52-0.584 0.502-1.487 0.087-1.487-0.683z"/>
</g>
    </svg>
  )
}

export default MapIcon

