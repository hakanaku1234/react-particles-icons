import React from 'react'

const PayIcon = (props) => {
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
<title>pay</title>
<path d="M27.395 24.838h-0.54c-0.14 0-0.254-0.114-0.254-0.254v-0.747c0-0.796-0.666-1.444-1.485-1.444-0.085 0-0.155-0.069-0.155-0.155v-4.816c0 0 0 0 0 0v-5.101c0-0.28 0.227-0.508 0.508-0.508h2.5c0.964 0 1.306-1.276 0.472-1.758l-11.969-6.928c-0.146-0.085-0.309-0.127-0.472-0.127s-0.326 0.042-0.472 0.127l-11.969 6.929c-0.834 0.483-0.492 1.758 0.472 1.758h2.5c0.28 0 0.508 0.227 0.508 0.508v4.052c0 0.14-0.114 0.254-0.254 0.254h-3.024c-0.439 0-0.795 0.356-0.795 0.795v8.695c-0.007 0.054-0.010 0.108-0.010 0.163v1.207c0 0.055 0.004 0.11 0.010 0.163v0.553c0 0.44 0.356 0.796 0.795 0.796h23.633c0.925 0 1.65-0.634 1.65-1.444v-1.275c0-0.809-0.724-1.443-1.649-1.443zM7.073 9.928c0 0 0 0 0 0l8.672-5.021c0 0 0 0 0 0 0.157-0.091 0.351-0.091 0.509 0 0 0 0 0 0 0l8.672 5.021c0 0 0 0 0 0 0.112 0.065 0.066 0.237-0.064 0.237h-17.725c-0.13 0-0.176-0.172-0.064-0.237zM22.803 16.628h-0.573c-0.28 0-0.508-0.227-0.508-0.508v-2.963c0-0.28 0.227-0.508 0.508-0.508h0.573c0.28 0 0.508 0.227 0.508 0.508v2.963c0 0.281-0.227 0.508-0.508 0.508zM19.566 16.628h-7.131c-0.28 0-0.508-0.227-0.508-0.508v-3.798c0-0.28 0.227-0.508 0.508-0.508h7.131c0.28 0 0.508 0.227 0.508 0.508v3.798c-0.001 0.281-0.228 0.508-0.508 0.508zM8.689 13.157c0-0.28 0.227-0.508 0.508-0.508h0.573c0.28 0 0.508 0.227 0.508 0.508v2.963c0 0.28-0.227 0.508-0.508 0.508h-0.573c-0.28 0-0.508-0.227-0.508-0.508v-2.963zM22.862 27.409h-17.798c-0.28 0-0.508-0.227-0.508-0.508v-8.175c0-0.28 0.227-0.508 0.508-0.508h17.798c0.28 0 0.508 0.227 0.508 0.508v8.175c0 0.281-0.227 0.508-0.508 0.508z"/>
<path d="M8.482 22.814c0 0.769-0.623 1.392-1.392 1.392s-1.392-0.623-1.392-1.392c0-0.769 0.623-1.392 1.392-1.392s1.392 0.623 1.392 1.392z"/>
<path d="M22.229 22.814c0 0.769-0.623 1.392-1.392 1.392s-1.392-0.623-1.392-1.392c0-0.769 0.623-1.392 1.392-1.392s1.392 0.623 1.392 1.392z"/>
<path d="M16.712 22.814c0 2.278-1.231 4.124-2.749 4.124s-2.749-1.846-2.749-4.124c0-2.278 1.231-4.124 2.749-4.124s2.749 1.846 2.749 4.124z"/>
</g>
    </svg>
  )
}

export default PayIcon

