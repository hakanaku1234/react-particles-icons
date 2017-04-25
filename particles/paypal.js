import React from 'react'

const PaypalIcon = (props) => {
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
<title>paypal</title>
<path d="M25.486 9.847c-0.355-0.403-0.8-0.747-1.322-1.024l-0.321-0.17c0.061-1.366-0.288-2.391-1.117-3.336-1.117-1.273-3.133-1.817-5.713-1.817h-7.49c-0.527 0-0.977 0.383-1.058 0.905l-3.12 19.774c-0.061 0.391 0.24 0.744 0.635 0.744h3.709l-0.297 1.883c-0.066 0.424 0.056 0.855 0.335 1.181s0.685 0.513 1.114 0.513h3.897c0.905 0 1.666-0.645 1.816-1.535l0.036-0.186 0.737-4.676 0.045-0.244 0.004-0.024c0.003-0.017 0.016-0.028 0.033-0.028h0.583c2.203 0 4.025-0.501 5.414-1.488 1.582-1.125 2.615-2.879 3.070-5.213 0.437-2.243 0.105-4.012-0.99-5.259zM24.701 14.761c-0.368 1.889-1.134 3.225-2.342 4.084-1.077 0.766-2.546 1.154-4.366 1.154h-0.583c-0.908 0-1.67 0.648-1.817 1.542l-0.045 0.246-0.735 4.664-0.035 0.182-0.005 0.030c-0.003 0.017-0.017 0.029-0.033 0.029h-3.497l1.381-8.762c0.013-0.083 0.079-0.141 0.161-0.141h2.197c2.491 0 4.548-0.564 6.113-1.677 1.539-1.094 2.616-2.719 3.212-4.842 0.565 0.807 0.693 1.953 0.394 3.491z"/>
</g>
    </svg>
  )
}

export default PaypalIcon

