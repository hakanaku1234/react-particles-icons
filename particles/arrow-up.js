import React from 'react'

const ArrowUpIcon = (props) => {
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
<title>arrow-up</title>
<path d="M21.907 9.586c-0.377 0.323-0.944 0.279-1.267-0.097l-3.256-3.799c-0.167-0.195-0.486-0.077-0.486 0.18v23.411c0 0.484-0.372 0.9-0.855 0.923-0.516 0.024-0.942-0.387-0.942-0.897v-23.436c0-0.257-0.319-0.375-0.486-0.18l-3.256 3.799c-0.323 0.377-0.89 0.42-1.267 0.097s-0.42-0.89-0.097-1.267l5.309-6.194c0.115-0.134 0.262-0.238 0.43-0.29 0.352-0.107 0.719 0.008 0.947 0.274l5.322 6.209c0.323 0.377 0.279 0.944-0.097 1.267z"/>
</g>
    </svg>
  )
}

export default ArrowUpIcon

