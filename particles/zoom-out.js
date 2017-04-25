import React from 'react'

const ZoomOutIcon = (props) => {
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
<title>zoom-out</title>
<path d="M24.892 11.121h-6.225c-0.497 0-0.9-0.403-0.9-0.9s0.403-0.9 0.9-0.9h6.225c0.497 0 0.9 0.403 0.9 0.9s-0.403 0.9-0.9 0.9z"/>
<path d="M21.854 1.773c-4.661-0.040-8.522 3.786-8.522 8.447 0 1.876 0.612 3.61 1.647 5.012 0.125 0.17 0.11 0.405-0.039 0.554l-0.007 0.007c-0.145 0.145-0.37 0.161-0.541 0.049-0.29-0.19-0.629-0.293-0.985-0.293-0.481 0-0.933 0.187-1.273 0.527l-9.666 9.666c-1.097 1.098-1.042 2.918 0.167 3.942 0.455 0.386 1.033 0.608 1.63 0.629 0.752 0.026 1.463-0.254 1.992-0.783l9.666-9.666c0.613-0.613 0.69-1.562 0.233-2.26-0.112-0.17-0.093-0.394 0.050-0.538l0.007-0.007c0.149-0.149 0.384-0.164 0.554-0.039 1.402 1.035 3.135 1.647 5.012 1.647 4.661 0 8.487-3.861 8.447-8.522-0.040-4.607-3.767-8.334-8.373-8.373zM5.004 28.238c-0.159 0.159-0.368 0.263-0.591 0.275-0.259 0.014-0.505-0.084-0.684-0.271-0.332-0.348-0.308-0.904 0.032-1.245 1.382-1.382 7.118-7.118 9.027-9.027 0.343-0.343 0.899-0.343 1.242 0v0c0.343 0.343 0.343 0.899 0 1.242l-9.025 9.025zM21.78 16.867c-3.665 0-6.647-2.982-6.647-6.647s2.982-6.647 6.647-6.647c3.665 0 6.647 2.982 6.647 6.647s-2.982 6.647-6.647 6.647z"/>
</g>
    </svg>
  )
}

export default ZoomOutIcon

