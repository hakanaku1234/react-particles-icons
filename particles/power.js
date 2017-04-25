import React from 'react'

const PowerIcon = (props) => {
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
<title>power</title>
<path d="M22.446 7.631c-0.417-0.277-0.98-0.164-1.258 0.253s-0.164 0.98 0.253 1.258c2.755 1.832 4.4 4.898 4.4 8.202 0 5.427-4.415 9.842-9.842 9.842s-9.842-4.415-9.842-9.842c0-3.304 1.645-6.37 4.4-8.202 0.417-0.277 0.53-0.84 0.253-1.258-0.277-0.417-0.84-0.531-1.258-0.253-3.262 2.169-5.21 5.8-5.21 9.713 0.002 6.427 5.231 11.656 11.658 11.656s11.656-5.229 11.656-11.656c0-3.913-1.947-7.544-5.21-9.713z"/>
<path d="M16.907 11.269v-7.362c0-0.501-0.406-0.907-0.907-0.907s-0.907 0.406-0.907 0.907v13.437c0 0.501 0.406 0.907 0.907 0.907s0.907-0.406 0.907-0.907v-6.075z"/>
</g>
    </svg>
  )
}

export default PowerIcon

