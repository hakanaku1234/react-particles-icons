import React from 'react'

const ForwardIcon = (props) => {
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
<title>forward</title>
<path d="M19.579 21.224c-0 0-0 0 0 0-1.489-0-2.701-1.213-2.701-2.703v-5.042c0-1.491 1.212-2.703 2.701-2.703 0.391 0 0.772 0.084 1.132 0.251l5.462 2.521c0.968 0.447 1.569 1.387 1.569 2.453s-0.601 2.006-1.569 2.453l-5.462 2.521c-0.36 0.166-0.741 0.251-1.132 0.251zM19.579 12.577c-0.433 0-0.9 0.345-0.9 0.902v5.042c0 0.557 0.467 0.902 0.9 0.902 0.128 0 0.255-0.029 0.378-0.085l5.462-2.521c0.485-0.224 0.523-0.682 0.523-0.818s-0.038-0.593-0.523-0.818l-5.462-2.521c-0.122-0.056-0.249-0.085-0.378-0.085z"/>
<path d="M6.959 21.224c0 0 0 0-0 0-1.489-0-2.701-1.213-2.701-2.703v-5.042c0-1.491 1.212-2.703 2.701-2.703 0.391 0 0.772 0.084 1.132 0.251l5.462 2.521c0.968 0.447 1.569 1.387 1.569 2.453s-0.601 2.006-1.569 2.453l-5.462 2.521c-0.361 0.166-0.742 0.251-1.132 0.251zM6.959 12.577c-0.433 0-0.9 0.345-0.9 0.902v5.042c0 0.557 0.467 0.902 0.9 0.902 0.128 0 0.255-0.029 0.378-0.085l5.462-2.521c0.485-0.224 0.523-0.682 0.523-0.818s-0.038-0.593-0.523-0.818l-5.462-2.521c-0.122-0.056-0.249-0.085-0.378-0.085z"/>
</g>
    </svg>
  )
}

export default ForwardIcon

