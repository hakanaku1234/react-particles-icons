import React from 'react'

const GithubHairIcon = (props) => {
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
<title>github-hair</title>
<path d="M27.168 1.813v0c1.68 0 3.043 1.362 3.043 3.043v22.313c0 1.68-1.362 3.043-3.043 3.043h-22.313c-1.68 0-3.043-1.362-3.043-3.043v-22.313c0-1.68 1.362-3.043 3.043-3.043h22.313zM20.448 29.819h6.72c1.462 0 2.651-1.189 2.651-2.651v-22.313c0-1.462-1.189-2.651-2.651-2.651h-22.313c-1.462 0-2.651 1.189-2.651 2.651v22.313c0 1.462 1.189 2.651 2.651 2.651h6.717v-3.543c-0.789 0.123-1.319 0.185-1.59 0.185-1.677 0-2.86-0.77-3.55-2.311-0.185-0.53-0.456-1.017-0.814-1.461-0.037-0.062-0.203-0.21-0.499-0.444-0.025-0.025-0.234-0.21-0.629-0.555-0.21-0.173-0.314-0.296-0.314-0.37 0-0.185 0.216-0.277 0.647-0.277 0.801 0 1.492 0.382 2.071 1.146 0.012 0.012 0.077 0.099 0.194 0.259s0.191 0.259 0.222 0.296c0.031 0.037 0.096 0.123 0.194 0.259s0.179 0.231 0.24 0.287c0.062 0.055 0.142 0.133 0.24 0.231s0.194 0.182 0.287 0.25c0.092 0.068 0.194 0.133 0.305 0.194 0.357 0.222 0.783 0.333 1.276 0.333 0.653 0 1.282-0.105 1.886-0.314 0.271-0.9 0.758-1.584 1.461-2.052-2.638-0.247-4.555-0.906-5.751-1.979s-1.794-2.786-1.794-5.14c0-1.849 0.561-3.378 1.683-4.586-0.21-0.653-0.314-1.301-0.314-1.942 0-0.9 0.203-1.738 0.61-2.515 0.851 0 1.612 0.139 2.284 0.416s1.47 0.755 2.395 1.433c1.208-0.284 2.509-0.425 3.902-0.425 1.22 0 2.404 0.129 3.55 0.388 0.949-0.666 1.75-1.134 2.404-1.405s1.393-0.407 2.219-0.407c0.419 0.764 0.629 1.603 0.629 2.515 0 0.616-0.111 1.257-0.333 1.923 1.122 1.245 1.683 2.78 1.683 4.604 0 2.354-0.601 4.074-1.803 5.159s-3.103 1.744-5.704 1.979c1.060 0.727 1.59 1.738 1.59 3.032v4.837z"/>
</g>
    </svg>
  )
}

export default GithubHairIcon

