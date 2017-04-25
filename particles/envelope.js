import React from 'react'

const EnvelopeIcon = (props) => {
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
<title>envelope</title>
<path d="M30.227 6.219c-0.006-0.492-0.406-0.889-0.9-0.889h-26.654c-0.497 0-0.9 0.403-0.9 0.9v0.446h-0.011v0.865l0.011 0.009v16.442c0 0.497 0.403 0.9 0.9 0.9h26.654c0.497 0 0.9-0.403 0.9-0.9v-16.442l0.011-0.009v-1.322h-0.012zM25.302 7.13c0.851 0 1.227 1.072 0.563 1.604l-9.302 7.441c-0.331 0.265-0.794 0.265-1.125 0l-9.302-7.441c-0.665-0.532-0.289-1.604 0.563-1.604h18.604zM9.723 15.154l-4.593 4.899c-0.558 0.596-1.557 0.2-1.557-0.616v-8.573c0-0.755 0.873-1.175 1.463-0.703l4.593 3.674c0.41 0.328 0.454 0.936 0.094 1.319zM6.172 21.575l5.628-6.003 2.512 2.010c0.497 0.397 1.092 0.596 1.688 0.596s1.191-0.199 1.687-0.596l2.512-2.010 5.628 6.003c0.539 0.575 0.131 1.516-0.657 1.516h-18.342c-0.788 0-1.196-0.941-0.657-1.516zM26.869 20.053l-4.593-4.899c-0.359-0.383-0.316-0.991 0.094-1.319l4.593-3.674c0.59-0.472 1.463-0.052 1.463 0.703v8.573c0 0.816-0.999 1.211-1.557 0.616z"/>
</g>
    </svg>
  )
}

export default EnvelopeIcon

