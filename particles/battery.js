import React from 'react'

const BatteryIcon = (props) => {
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
<title>battery</title>
<path d="M29.673 13.332h-0.67c-0.306 0-0.554-0.248-0.554-0.554v-0.313c0-0.995-0.806-1.801-1.801-1.801h-23.075c-0.995 0-1.801 0.806-1.801 1.801v7.069c0 0.995 0.806 1.801 1.801 1.801h23.075c0.995 0 1.801-0.806 1.801-1.801v-0.313c0-0.306 0.248-0.554 0.554-0.554h0.67c0.306 0 0.554-0.248 0.554-0.554v-4.227c0-0.306-0.248-0.554-0.554-0.554zM26.648 18.98c0 0.306-0.248 0.554-0.554 0.554h-21.967c-0.306 0-0.554-0.248-0.554-0.554v-5.961c0-0.306 0.248-0.554 0.554-0.554h21.967c0.306 0 0.554 0.248 0.554 0.554v5.961z"/>
<path d="M18.521 13.332h-12.999c-0.598 0-1.083 0.485-1.083 1.083v3.17c0 0.598 0.485 1.083 1.083 1.083h10.158c0.2 0 0.386-0.1 0.497-0.266l2.805-4.208c0.245-0.368-0.019-0.861-0.461-0.861z"/>
</g>
    </svg>
  )
}

export default BatteryIcon

