import React from 'react'

const GithubIcon = (props) => {
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
<path d="M27.168 1.813v0c1.68 0 3.043 1.362 3.043 3.043v22.313c0 1.68-1.362 3.043-3.043 3.043h-22.313c-1.68 0-3.043-1.362-3.043-3.043v-22.313c0-1.68 1.362-3.043 3.043-3.043h22.313zM19.903 28.182h7.265c0.56 0 1.014-0.454 1.014-1.014h0v-22.313c0-0.56-0.454-1.014-1.014-1.014h-22.313c-0.56 0-1.014 0.454-1.014 1.014v22.313c0 0.56 0.454 1.014 1.014 1.014h7.16v-3.448c-0.701 0.11-1.172 0.164-1.413 0.164-1.49 0-2.542-0.685-3.155-2.054-0.164-0.471-0.405-0.904-0.723-1.298-0.033-0.055-0.181-0.186-0.444-0.394-0.022-0.022-0.208-0.186-0.559-0.493-0.186-0.153-0.279-0.263-0.279-0.329 0-0.164 0.192-0.247 0.575-0.247 0.712 0 1.326 0.34 1.84 1.019 0.011 0.011 0.068 0.088 0.173 0.23s0.17 0.23 0.197 0.263c0.027 0.033 0.085 0.11 0.173 0.23s0.159 0.205 0.214 0.255c0.055 0.049 0.126 0.118 0.214 0.205s0.173 0.162 0.255 0.222c0.082 0.060 0.173 0.118 0.271 0.173 0.318 0.197 0.696 0.296 1.134 0.296 0.581 0 1.139-0.093 1.676-0.279 0.241-0.8 0.674-1.408 1.298-1.824-2.344-0.219-4.048-0.805-5.111-1.758s-1.594-2.476-1.594-4.568c0-1.643 0.498-3.002 1.495-4.075-0.186-0.581-0.279-1.156-0.279-1.725 0-0.8 0.181-1.545 0.542-2.235 0.756 0 1.432 0.123 2.029 0.37s1.306 0.671 2.128 1.274c1.074-0.252 2.229-0.378 3.467-0.378 1.085 0 2.136 0.115 3.155 0.345 0.844-0.592 1.556-1.008 2.136-1.249s1.238-0.362 1.972-0.362c0.372 0.679 0.559 1.424 0.559 2.235 0 0.548-0.099 1.117-0.296 1.709 0.997 1.107 1.495 2.47 1.495 4.092 0 2.092-0.534 3.621-1.602 4.585s-2.758 1.55-5.070 1.758c0.942 0.646 1.413 1.545 1.413 2.695v4.599z"/>
</g>
    </svg>
  )
}

export default GithubIcon
