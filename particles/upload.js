import React from 'react'

const UploadIcon = (props) => {
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
<path d="M11.963 12.274c0.148 0.098 0.314 0.146 0.479 0.146 0.28 0 0.554-0.135 0.721-0.386l1.717-2.575c0.076-0.114 0.254-0.060 0.254 0.077v9.103c0 0.477 0.373 0.886 0.85 0.894 0.486 0.009 0.882-0.382 0.882-0.866v-9.132c0-0.137 0.178-0.191 0.254-0.077l1.717 2.575c0.265 0.398 0.803 0.505 1.201 0.24s0.505-0.803 0.24-1.201l-3.557-5.335c-0-0-0-0-0.001-0.001-0.018-0.027-0.038-0.053-0.060-0.078-0.006-0.007-0.012-0.014-0.019-0.021-0.016-0.017-0.032-0.034-0.049-0.050-0.008-0.007-0.016-0.015-0.024-0.022-0.018-0.016-0.037-0.031-0.056-0.045-0.007-0.005-0.013-0.010-0.020-0.015-0.027-0.019-0.055-0.036-0.084-0.052-0.001-0-0.002-0.001-0.003-0.001-0.028-0.015-0.056-0.028-0.086-0.039-0.007-0.003-0.015-0.005-0.023-0.008-0.023-0.009-0.047-0.016-0.071-0.023-0.009-0.003-0.018-0.005-0.027-0.007-0.024-0.006-0.048-0.010-0.073-0.014-0.009-0.001-0.018-0.003-0.027-0.004-0.033-0.004-0.066-0.006-0.1-0.006s-0.067 0.002-0.1 0.006c-0.009 0.001-0.018 0.003-0.027 0.004-0.025 0.004-0.049 0.008-0.073 0.014-0.009 0.002-0.018 0.005-0.027 0.007-0.024 0.007-0.048 0.014-0.071 0.023-0.008 0.003-0.015 0.005-0.023 0.008-0.029 0.012-0.058 0.025-0.086 0.039-0.001 0-0.002 0.001-0.003 0.001-0.029 0.016-0.057 0.033-0.084 0.052-0.007 0.005-0.013 0.010-0.020 0.015-0.019 0.014-0.038 0.029-0.056 0.045-0.008 0.007-0.016 0.014-0.024 0.022-0.017 0.016-0.033 0.032-0.049 0.050-0.006 0.007-0.013 0.014-0.019 0.021-0.021 0.025-0.041 0.051-0.059 0.078-0 0-0.001 0.001-0.001 0.001l-3.557 5.335c-0.265 0.398-0.158 0.935 0.24 1.201z"/>
<path d="M25.781 16.913c-0.478 0-0.866 0.388-0.866 0.866v2.623c0 1.509-1.227 2.736-2.736 2.736h-12.359c-1.509 0-2.736-1.227-2.736-2.736v-2.623c0-0.478-0.388-0.866-0.866-0.866s-0.866 0.388-0.866 0.866v2.623c0 2.463 2.004 4.468 4.468 4.468h12.359c2.463 0 4.468-2.004 4.468-4.468v-2.623c0-0.478-0.388-0.866-0.866-0.866z"/>
</g>
    </svg>
  )
}

export default UploadIcon
