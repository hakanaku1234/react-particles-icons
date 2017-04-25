import React from 'react'

const PlaceIcon = (props) => {
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
<title>place</title>
<path d="M16 1.772c-0.022 0-0.042 0-0.064 0-5.266 0.034-9.594 4.287-9.715 9.552-0.002 0.076-0.003 0.151-0.003 0.226-0 1.557 0.412 3.087 1.151 4.457l7.045 13.274c0.34 0.631 0.963 0.946 1.585 0.946s1.245-0.315 1.585-0.946l7.057-13.295c0.702-1.301 1.107-2.747 1.138-4.224 0.001-0.069 0.002-0.139 0.002-0.209-0-5.402-4.38-9.781-9.782-9.781zM23.979 11.725c-0.024 1.156-0.343 2.334-0.922 3.407l-0.003 0.005-0.003 0.005-6.256 11.785c-0.338 0.638-1.252 0.638-1.591 0l-6.25-11.775c-0.612-1.135-0.936-2.38-0.935-3.602 0-0.061 0.001-0.124 0.002-0.185 0.047-2.075 0.896-4.026 2.39-5.495s3.46-2.284 5.536-2.298l0.052-0c2.132 0 4.136 0.83 5.643 2.338s2.338 3.511 2.338 5.643c-0 0.057-0.001 0.114-0.002 0.171z"/>
<path d="M16 5.307c-2.464 0-4.468 2.005-4.468 4.468s2.005 4.468 4.468 4.468 4.468-2.005 4.468-4.468c0-2.464-2.005-4.468-4.468-4.468zM16 12.443c-1.473 0-2.668-1.194-2.668-2.668s1.194-2.668 2.668-2.668c1.473 0 2.668 1.194 2.668 2.668s-1.194 2.668-2.668 2.668z"/>
</g>
    </svg>
  )
}

export default PlaceIcon

