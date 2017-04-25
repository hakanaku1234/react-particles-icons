import React from 'react'

const MusicIcon = (props) => {
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
<title>music</title>
<path d="M28.44 6.946c-0.003-0.030-0.007-0.060-0.011-0.090-0.009-0.060-0.021-0.118-0.036-0.176-0.044-0.173-0.114-0.335-0.204-0.484-0.030-0.050-0.062-0.097-0.097-0.144-0.069-0.092-0.147-0.178-0.232-0.255-0.043-0.039-0.087-0.075-0.133-0.11-0.081-0.060-0.167-0.114-0.257-0.16-0.021-0.011-0.043-0.021-0.065-0.032-0.037-0.017-0.075-0.033-0.114-0.048-0.017-0.006-0.034-0.013-0.051-0.019-0.185-0.064-0.384-0.1-0.591-0.1h-4.424v-2.657c0-0.497-0.403-0.9-0.9-0.9h-2.645c-0.497 0-0.9 0.403-0.9 0.9v2.656h-3.557v-2.656c0-0.497-0.403-0.9-0.9-0.9h-2.645c-0.497 0-0.9 0.403-0.9 0.9v2.656h-4.424c-0.051 0-0.101 0.002-0.15 0.006-0.099 0.008-0.196 0.024-0.289 0.048-0.234 0.059-0.45 0.163-0.638 0.304-0.046 0.035-0.091 0.071-0.133 0.11-0.085 0.077-0.163 0.163-0.232 0.255-0.035 0.046-0.067 0.094-0.097 0.144-0.090 0.149-0.16 0.311-0.204 0.484-0.015 0.058-0.027 0.116-0.036 0.176-0.005 0.030-0.008 0.060-0.011 0.090-0.006 0.061-0.009 0.122-0.009 0.184v21.297c0 0.093 0.007 0.185 0.021 0.274 0.009 0.060 0.021 0.118 0.036 0.176 0.044 0.173 0.114 0.335 0.204 0.484 0.030 0.050 0.062 0.097 0.097 0.144 0.069 0.092 0.147 0.178 0.232 0.256 0.043 0.039 0.087 0.076 0.133 0.11s0.094 0.067 0.144 0.097c0.074 0.045 0.152 0.085 0.233 0.119s0.165 0.063 0.251 0.085c0.058 0.015 0.116 0.027 0.176 0.036 0.089 0.014 0.181 0.021 0.274 0.021h21.296c0.155 0 0.306-0.020 0.45-0.057 0.086-0.022 0.17-0.051 0.251-0.085s0.159-0.074 0.233-0.119c0.050-0.030 0.097-0.062 0.144-0.097s0.091-0.071 0.133-0.11c0.362-0.329 0.59-0.805 0.59-1.333v-21.296c-0-0.062-0.003-0.124-0.009-0.184zM5.352 27.526v-19.496c0-0.497 0.403-0.9 0.9-0.9h2.623c0.497 0 0.9 0.403 0.9 0.9v10.626c0 0.497 0.403 0.9 0.9 0.9h0.296c0.151 0 0.274 0.123 0.274 0.274v7.695c0 0.497-0.403 0.9-0.9 0.9h-4.094c-0.497 0-0.9-0.403-0.9-0.9zM13.047 27.526v-7.695c0-0.151 0.123-0.274 0.274-0.274v0c0.497 0 0.9-0.403 0.9-0.9v-10.626c0-0.497 0.403-0.9 0.9-0.9h1.756c0.497 0 0.9 0.403 0.9 0.9v10.626c0 0.497 0.403 0.9 0.9 0.9v0c0.151 0 0.274 0.123 0.274 0.274v7.695c0 0.497-0.403 0.9-0.9 0.9h-4.105c-0.497 0-0.9-0.403-0.9-0.9zM25.748 28.427h-4.094c-0.497 0-0.9-0.403-0.9-0.9v-7.695c0-0.151 0.123-0.274 0.274-0.274h0.296c0.497 0 0.9-0.403 0.9-0.9v-10.626c0-0.497 0.403-0.9 0.9-0.9h2.623c0.497 0 0.9 0.403 0.9 0.9v19.496c0 0.497-0.403 0.9-0.9 0.9z"/>
</g>
    </svg>
  )
}

export default MusicIcon

