import React from 'react';

const ParticlesMerge = (props) => {
  const computedSize = props.size || '1em';
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={computedSize}
      width={computedSize}
      viewBox="0 0 32 32"
      style={{ verticalAlign: 'middle' }}
      {...props}
    >
      <g>
<path d="M26.939 12.406c-1.571-0.105-2.948 0.804-3.54 2.137-0.144 0.325-0.466 0.534-0.822 0.534h-1.211c-2.448 0-4.469-1.97-4.467-4.418 0.003-3.435-2.79-6.23-6.224-6.23h-1.243c-0.357 0-0.681-0.211-0.824-0.539-0.592-1.354-1.994-2.276-3.59-2.151-1.755 0.137-3.167 1.551-3.302 3.306-0.163 2.114 1.511 3.886 3.591 3.886 1.476 0 2.748-0.893 3.304-2.167 0.142-0.326 0.466-0.534 0.822-0.534h1.243c2.443 0 4.417 1.999 4.424 4.441 0.005 1.849 0.821 3.512 2.111 4.65 0.4 0.353 0.4 0.983 0 1.336-1.289 1.138-2.105 2.8-2.111 4.649-0.007 2.443-1.981 4.441-4.424 4.441h-1.243c-0.357 0-0.681-0.211-0.824-0.539-0.592-1.354-1.994-2.276-3.59-2.151-1.755 0.137-3.167 1.551-3.302 3.306-0.163 2.114 1.511 3.886 3.591 3.886 1.476 0 2.748-0.893 3.304-2.167 0.142-0.326 0.466-0.534 0.822-0.534h1.314c3.431 0 6.145-2.805 6.154-6.236 0.006-2.434 1.988-4.413 4.424-4.413h1.243c0.355 0 0.68 0.208 0.822 0.534 0.555 1.274 1.827 2.167 3.304 2.167 2.078 0 3.75-1.768 3.591-3.879-0.133-1.772-1.572-3.198-3.345-3.317zM6.697 6.475c-0.11 0.133-0.239 0.251-0.383 0.348-0.192 0.129-0.409 0.223-0.644 0.271-0.117 0.024-0.239 0.037-0.363 0.037-0.070 0-0.139-0.004-0.207-0.012-0.102-0.012-0.201-0.032-0.297-0.060-0.16-0.046-0.311-0.114-0.449-0.201-0.166-0.103-0.314-0.233-0.437-0.383-0.073-0.089-0.138-0.185-0.194-0.287-0.014-0.026-0.027-0.051-0.040-0.078-0.025-0.053-0.048-0.106-0.068-0.162-0.010-0.028-0.020-0.055-0.028-0.084-0.039-0.127-0.065-0.26-0.076-0.397-0.003-0.046-0.005-0.092-0.005-0.139 0-0.062 0.003-0.124 0.009-0.184 0.003-0.030 0.007-0.060 0.011-0.090 0.009-0.060 0.021-0.118 0.036-0.176 0.044-0.173 0.114-0.335 0.204-0.484 0.030-0.050 0.062-0.097 0.097-0.144 0.069-0.092 0.147-0.178 0.232-0.256 0.043-0.039 0.087-0.075 0.133-0.11 0.081-0.060 0.167-0.114 0.257-0.16 0.021-0.011 0.043-0.021 0.065-0.032 0.037-0.017 0.075-0.033 0.114-0.048 0.017-0.006 0.034-0.013 0.051-0.019 0.185-0.064 0.384-0.1 0.591-0.1 0.218 0 0.426 0.039 0.619 0.109 0.055 0.020 0.109 0.043 0.162 0.068 0.105 0.051 0.204 0.111 0.297 0.18 0.046 0.035 0.091 0.071 0.133 0.11 0.085 0.078 0.163 0.163 0.232 0.256 0.035 0.046 0.067 0.094 0.097 0.144 0.007 0.011 0.013 0.022 0.019 0.033 0.081 0.139 0.144 0.29 0.185 0.45 0.015 0.058 0.027 0.116 0.036 0.176 0.005 0.030 0.008 0.060 0.011 0.090 0.006 0.061 0.009 0.122 0.009 0.184 0 0.124-0.013 0.246-0.037 0.363-0.012 0.059-0.027 0.116-0.044 0.173-0.009 0.028-0.018 0.056-0.028 0.084-0.020 0.055-0.043 0.109-0.068 0.162-0.013 0.026-0.026 0.052-0.040 0.078-0.008 0.014-0.016 0.028-0.024 0.042-0.021 0.036-0.043 0.072-0.066 0.106-0.032 0.048-0.067 0.094-0.104 0.139zM6.518 27.981c-0.043 0.039-0.087 0.076-0.133 0.11-0.023 0.017-0.047 0.034-0.071 0.050-0.072 0.049-0.147 0.092-0.226 0.13-0.053 0.025-0.106 0.048-0.162 0.068-0.083 0.030-0.168 0.055-0.256 0.073-0.117 0.024-0.239 0.037-0.363 0.037-0.12 0-0.236-0.012-0.349-0.034-0.010-0.002-0.020-0.004-0.030-0.006-0.072-0.015-0.143-0.035-0.212-0.059-0.017-0.006-0.034-0.012-0.051-0.019-0.038-0.015-0.076-0.031-0.114-0.048-0.022-0.010-0.043-0.021-0.065-0.032-0.054-0.028-0.107-0.058-0.158-0.091-0.034-0.022-0.067-0.044-0.099-0.069-0.046-0.035-0.091-0.071-0.133-0.11-0.085-0.078-0.163-0.163-0.232-0.256-0.035-0.046-0.067-0.094-0.097-0.144-0.090-0.148-0.16-0.311-0.204-0.484-0.015-0.058-0.027-0.116-0.036-0.176-0.005-0.030-0.008-0.060-0.011-0.090-0.006-0.061-0.009-0.122-0.009-0.184 0-0.047 0.002-0.093 0.005-0.139 0.010-0.137 0.036-0.27 0.076-0.397 0.009-0.028 0.018-0.056 0.028-0.084 0.020-0.055 0.043-0.109 0.068-0.162 0.013-0.026 0.026-0.052 0.040-0.078 0.055-0.102 0.12-0.198 0.194-0.287 0.124-0.15 0.272-0.28 0.437-0.383 0.138-0.086 0.289-0.154 0.449-0.201 0.096-0.028 0.195-0.048 0.297-0.060 0.068-0.008 0.137-0.012 0.207-0.012 0.559 0 1.059 0.255 1.39 0.655 0.063 0.077 0.12 0.159 0.17 0.245 0.008 0.014 0.016 0.028 0.024 0.042 0.014 0.026 0.027 0.051 0.040 0.078 0.025 0.052 0.048 0.106 0.068 0.162 0.010 0.028 0.020 0.055 0.028 0.084 0.039 0.127 0.065 0.26 0.076 0.397 0.003 0.046 0.005 0.092 0.005 0.139 0 0.062-0.003 0.124-0.009 0.184-0.026 0.259-0.108 0.502-0.232 0.716-0.093 0.162-0.211 0.308-0.348 0.433zM28.473 16.274c-0.009 0.060-0.021 0.118-0.036 0.176-0.022 0.086-0.051 0.17-0.085 0.251s-0.074 0.159-0.119 0.233c-0.030 0.050-0.062 0.097-0.097 0.144s-0.071 0.091-0.11 0.133c-0.039 0.043-0.079 0.083-0.122 0.122s-0.087 0.076-0.133 0.11-0.094 0.067-0.144 0.097c-0.074 0.045-0.152 0.085-0.233 0.119s-0.165 0.063-0.251 0.085c-0.058 0.015-0.116 0.027-0.176 0.036-0.089 0.014-0.181 0.021-0.274 0.021s-0.185-0.007-0.274-0.021c-0.060-0.009-0.118-0.021-0.176-0.036-0.086-0.022-0.17-0.051-0.251-0.085s-0.159-0.074-0.233-0.119c-0.050-0.030-0.097-0.062-0.144-0.097s-0.091-0.071-0.133-0.11c-0.043-0.039-0.083-0.079-0.122-0.122s-0.076-0.087-0.11-0.133c-0.035-0.046-0.067-0.094-0.097-0.144-0.007-0.011-0.013-0.022-0.019-0.033-0.004-0.007-0.009-0.015-0.013-0.022-0.032-0.057-0.061-0.116-0.087-0.177-0.034-0.081-0.063-0.165-0.085-0.251-0.015-0.058-0.027-0.116-0.036-0.176-0.014-0.089-0.021-0.181-0.021-0.274s0.007-0.185 0.021-0.274c0.009-0.060 0.021-0.118 0.036-0.176 0.041-0.16 0.104-0.311 0.185-0.45 0.004-0.007 0.008-0.015 0.013-0.022 0.002-0.004 0.004-0.007 0.006-0.011 0.030-0.050 0.062-0.097 0.097-0.144 0.069-0.092 0.147-0.178 0.232-0.255 0.043-0.039 0.087-0.075 0.133-0.11s0.094-0.067 0.144-0.097c0.074-0.045 0.152-0.085 0.233-0.119s0.165-0.063 0.251-0.085c0.058-0.015 0.116-0.027 0.176-0.036 0.089-0.014 0.181-0.021 0.274-0.021 0.155 0 0.306 0.020 0.45 0.057 0.086 0.022 0.17 0.051 0.251 0.085s0.159 0.074 0.233 0.119c0.050 0.030 0.097 0.062 0.144 0.097s0.091 0.071 0.133 0.11c0.362 0.329 0.59 0.805 0.59 1.333 0 0.093-0.007 0.185-0.021 0.274z"/>
</g>
    </svg>
  );
}

export default ParticlesMerge;

