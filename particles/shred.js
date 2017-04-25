import React from 'react'

const ShredIcon = (props) => {
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
<title>shred</title>
<path d="M26.671 10.892c0-0.206-0.071-0.406-0.2-0.566l-6.643-8.215c-0.171-0.214-0.43-0.338-0.703-0.338h-12.894c-0.497 0-0.9 0.403-0.9 0.9v26.148c0 0.221 0.247 0.353 0.431 0.23l2.048-1.365c0.11-0.073 0.256-0.059 0.35 0.035l2.311 2.311c0.108 0.108 0.284 0.108 0.392 0l2.276-2.276c0.108-0.108 0.284-0.108 0.392 0l2.276 2.276c0.108 0.108 0.284 0.108 0.392 0l2.276-2.276c0.108-0.108 0.284-0.108 0.392 0l2.276 2.276c0.108 0.108 0.284 0.108 0.392 0l2.311-2.311c0.093-0.093 0.24-0.108 0.35-0.035l2.048 1.365c0.184 0.123 0.431-0.009 0.431-0.23v-17.929zM24.439 25.686l-0.477-0.318c-0.11-0.073-0.256-0.059-0.35 0.035l-2.082 2.082c-0.108 0.108-0.284 0.108-0.392 0l-2.276-2.276c-0.108-0.108-0.284-0.108-0.392 0l-2.276 2.276c-0.108 0.108-0.284 0.108-0.392 0l-2.276-2.276c-0.108-0.108-0.284-0.108-0.392 0l-2.276 2.276c-0.108 0.108-0.284 0.108-0.392 0l-2.082-2.082c-0.093-0.093-0.24-0.108-0.35-0.035l-0.477 0.318c-0.184 0.123-0.431-0.009-0.431-0.23v-20.982c0-0.497 0.403-0.9 0.9-0.9h9.737c0.497 0 0.9 0.403 0.9 0.9v6.18c0 0.497 0.403 0.9 0.9 0.9h4.401c0.497 0 0.9 0.403 0.9 0.9v13.001c-0 0.221-0.247 0.353-0.431 0.23z"/>
</g>
    </svg>
  )
}

export default ShredIcon

