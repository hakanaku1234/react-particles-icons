import React from 'react'

const BuoyIcon = (props) => {
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
<title>buoy</title>
<path d="M30.066 15.083c-0.030-0.082-0.064-0.162-0.101-0.239s-0.079-0.153-0.123-0.227c-0.245-0.403-0.594-0.737-1.010-0.962-0.076-0.041-0.153-0.079-0.233-0.112-0.135-0.057-0.276-0.103-0.421-0.137-0.015-0.072-0.031-0.145-0.047-0.216-0.023-0.1-0.048-0.2-0.073-0.3-0.052-0.203-0.11-0.404-0.172-0.603l2.176-6.963c0.259-0.83 0.114-1.705-0.398-2.401-0.51-0.694-1.322-1.109-2.172-1.109-0.274 0-0.548 0.042-0.815 0.126l-6.963 2.176c-0.366-0.114-0.739-0.211-1.119-0.292-0.061-0.256-0.158-0.497-0.286-0.718-0.017-0.029-0.034-0.058-0.052-0.086-0.472-0.748-1.306-1.246-2.256-1.246v0c-1.261 0-2.316 0.875-2.595 2.050-0.38 0.080-0.753 0.178-1.119 0.292l-6.963-2.176c-0.267-0.083-0.541-0.126-0.815-0.126-0.849 0-1.661 0.414-2.171 1.109-0.512 0.697-0.657 1.572-0.398 2.401l2.176 6.963c0.029-0.093 0.059-0.186 0.090-0.279-0.031 0.092-0.061 0.185-0.090 0.279-0.062 0.199-0.119 0.4-0.172 0.603-0.026 0.099-0.050 0.199-0.073 0.3-0.017 0.072-0.032 0.144-0.047 0.216-0.145 0.034-0.286 0.080-0.421 0.137-0.080 0.034-0.158 0.071-0.233 0.112-0.393 0.213-0.725 0.523-0.968 0.896-0.038 0.058-0.074 0.117-0.107 0.178-0.205 0.378-0.322 0.811-0.322 1.272v0c0 0.138 0.011 0.274 0.031 0.406s0.050 0.262 0.089 0.387c0.026 0.084 0.056 0.165 0.090 0.245s0.071 0.158 0.112 0.233 0.086 0.149 0.134 0.22c0.048 0.071 0.099 0.14 0.154 0.205s0.112 0.129 0.172 0.189c0.181 0.181 0.388 0.336 0.615 0.459 0.076 0.041 0.153 0.079 0.233 0.112 0.135 0.057 0.276 0.103 0.421 0.137 0.080 0.38 0.178 0.753 0.292 1.119l-2.176 6.963c-0.259 0.829-0.114 1.705 0.398 2.401 0.51 0.694 1.322 1.109 2.172 1.109 0.274 0 0.548-0.042 0.815-0.126l6.963-2.176c0.366 0.114 0.739 0.211 1.119 0.292v0c0.004 0.016 0.007 0.033 0.011 0.049 0.022 0.085 0.048 0.169 0.078 0.251 0.022 0.059 0.046 0.117 0.072 0.175 0.018 0.041 0.038 0.081 0.058 0.121 0.030 0.058 0.061 0.115 0.094 0.171 0.067 0.11 0.141 0.215 0.223 0.314 0.19 0.231 0.419 0.429 0.675 0.585 0.061 0.037 0.124 0.071 0.188 0.103 0.025 0.013 0.050 0.025 0.076 0.037 0.066 0.031 0.134 0.059 0.203 0.085 0.082 0.030 0.165 0.056 0.251 0.078 0.213 0.055 0.437 0.084 0.667 0.084v0 0c0.173 0 0.341-0.016 0.505-0.048 0.098-0.019 0.194-0.043 0.288-0.072 0.125-0.039 0.247-0.087 0.363-0.143 0.078-0.037 0.153-0.079 0.227-0.123 0.11-0.067 0.215-0.141 0.314-0.223 0.066-0.054 0.129-0.112 0.189-0.172 0.121-0.121 0.23-0.253 0.326-0.395 0.12-0.177 0.219-0.37 0.294-0.574 0.030-0.082 0.056-0.165 0.078-0.251 0.004-0.016 0.007-0.033 0.011-0.049v0c0.38-0.081 1.119-0.292 1.119-0.292l6.963 2.176c0.267 0.083 0.541 0.126 0.815 0.126 0.849-0 1.661-0.415 2.171-1.109 0.512-0.697 0.657-1.572 0.398-2.401l-2.176-6.963c0.114-0.366 0.211-0.739 0.292-1.119 0.145-0.034 0.286-0.080 0.421-0.137 0.080-0.034 0.158-0.071 0.233-0.112 0.094-0.051 0.186-0.108 0.273-0.17s0.17-0.129 0.249-0.201c0.032-0.029 0.062-0.058 0.093-0.088 0.060-0.060 0.118-0.124 0.172-0.189 0.082-0.099 0.156-0.204 0.223-0.314 0.045-0.073 0.086-0.149 0.123-0.227 0.056-0.117 0.104-0.238 0.143-0.363s0.069-0.255 0.089-0.387c0.020-0.132 0.031-0.268 0.031-0.406v0c-0-0.322-0.057-0.631-0.162-0.917zM28.415 16.146c-0.069 0.421-0.451 0.72-0.878 0.72h-3.554c-0.472 0-0.858-0.386-0.858-0.858v-0.018c-0-0.472 0.386-0.858 0.857-0.858h3.577c0.526 0 0.944 0.471 0.855 1.013zM25.992 19.694c-0.526 1.424-1.357 2.73-2.463 3.836s-2.412 1.937-3.836 2.463c-0.13 0.048-0.26 0.093-0.392 0.136-0.313 0.102-0.634-0.128-0.634-0.457v-2.749c0-0.189 0.112-0.36 0.284-0.438 1.56-0.713 2.82-1.973 3.533-3.533 0.079-0.172 0.249-0.284 0.438-0.284h2.749c0.329 0 0.558 0.321 0.457 0.634-0.043 0.132-0.088 0.262-0.136 0.392zM16.867 26.996v0.541c0 0.427-0.299 0.809-0.72 0.878-0.542 0.089-1.013-0.329-1.013-0.855v-3.578c0-0.472 0.386-0.858 0.858-0.857h0.018c0.472-0 0.858 0.386 0.858 0.858v3.013zM5.872 19.302c-0.102-0.313 0.128-0.634 0.457-0.634v0h2.749c0.189 0 0.36 0.112 0.438 0.284 0.713 1.56 1.973 2.82 3.533 3.533 0.172 0.079 0.284 0.249 0.284 0.438v2.749c0 0.329-0.321 0.558-0.634 0.457-0.132-0.043-0.262-0.088-0.392-0.136-1.424-0.526-2.73-1.357-3.836-2.463s-1.937-2.412-2.463-3.836c-0.048-0.13-0.093-0.26-0.136-0.392zM6.008 12.306c0.526-1.424 1.357-2.73 2.463-3.836s2.412-1.937 3.836-2.463c0.13-0.048 0.26-0.093 0.392-0.136 0.313-0.102 0.634 0.128 0.634 0.457v0 2.749c0 0.189-0.112 0.36-0.284 0.438-1.56 0.713-2.82 1.973-3.533 3.532-0.079 0.172-0.249 0.284-0.438 0.284h-2.749c-0.329 0-0.558-0.321-0.457-0.634 0.043-0.131 0.088-0.262 0.136-0.392zM15.133 5.004v-0.541c0-0.427 0.299-0.809 0.72-0.878 0.542-0.089 1.013 0.329 1.013 0.855v3.577c0 0.472-0.386 0.858-0.858 0.857h-0.018c-0.472 0-0.858-0.386-0.858-0.857v-3.013zM26.128 12.698c0.102 0.313-0.128 0.634-0.457 0.634v0h-2.749c-0.189 0-0.36-0.112-0.438-0.284-0.713-1.56-1.973-2.82-3.533-3.533-0.172-0.079-0.284-0.249-0.284-0.438v-2.749c0-0.329 0.321-0.558 0.634-0.457 0.132 0.043 0.262 0.088 0.392 0.136 1.424 0.526 2.73 1.357 3.836 2.463s1.937 2.412 2.463 3.836c0.048 0.13 0.093 0.26 0.136 0.392zM10.676 16c0-0.295 0.025-0.585 0.072-0.867 0.106-0.647 0.33-1.254 0.648-1.801 0.466-0.802 1.135-1.471 1.937-1.937 0.546-0.318 1.154-0.541 1.801-0.648 0.282-0.046 0.572-0.072 0.867-0.072s0.585 0.025 0.867 0.072c0.647 0.106 1.254 0.33 1.801 0.648 0.802 0.466 1.471 1.135 1.937 1.937 0.318 0.546 0.541 1.154 0.648 1.801 0.046 0.282 0.072 0.572 0.072 0.867s-0.025 0.585-0.072 0.867c-0.106 0.647-0.33 1.254-0.648 1.801v0c-0.466 0.802-1.135 1.471-1.937 1.937-0.547 0.318-1.154 0.541-1.801 0.648-0.282 0.046-0.572 0.072-0.867 0.072s-0.585-0.025-0.867-0.072c-0.647-0.106-1.254-0.33-1.801-0.648-0.802-0.466-1.471-1.135-1.937-1.937v0c-0.318-0.546-0.541-1.154-0.648-1.801-0.046-0.282-0.072-0.572-0.072-0.867zM27.56 13.332v0c0.053 0 0.106 0.002 0.158 0.005-0.052-0.003-0.105-0.005-0.158-0.005zM27.215 3.657c0.093-0.029 0.186-0.044 0.277-0.044 0.279 0 0.548 0.14 0.721 0.374 0.099 0.135 0.248 0.418 0.13 0.797 0 0-0.733 2.661-1.241 4.156-0.116 0.343-0.574 0.403-0.776 0.103-0.001-0.002-0.002-0.003-0.003-0.005-0.224-0.331-0.463-0.651-0.717-0.958-0.127-0.154-0.257-0.304-0.391-0.452-0.067-0.074-0.135-0.147-0.204-0.219-0.137-0.144-0.278-0.285-0.422-0.422-0.288-0.275-0.59-0.536-0.903-0.782-0.235-0.185-0.477-0.361-0.725-0.529l-0.007-0.005c-0.279-0.188-0.216-0.615 0.105-0.716l4.157-1.299zM3.657 4.785c-0.118-0.379 0.031-0.662 0.13-0.797 0.172-0.234 0.442-0.374 0.721-0.374 0.091 0 0.185 0.015 0.277 0.044l4.156 1.299c0.321 0.1 0.384 0.528 0.105 0.716l-0.007 0.005c-0.248 0.168-0.49 0.344-0.725 0.529-0.314 0.246-0.615 0.508-0.903 0.782-0.144 0.137-0.285 0.278-0.422 0.422-0.069 0.072-0.137 0.145-0.204 0.219-0.134 0.147-0.264 0.298-0.391 0.452-0.254 0.307-0.493 0.627-0.717 0.958-0.001 0.002-0.002 0.003-0.003 0.005-0.188 0.28-0.617 0.219-0.717-0.103l-1.299-4.156zM4.463 15.133h3.564c0.468 0 0.848 0.38 0.847 0.848v0.028c0 0.472-0.386 0.858-0.857 0.858h-3.578c-0.526 0-0.944-0.471-0.855-1.013 0.069-0.421 0.451-0.72 0.878-0.72zM9.047 26.328c0.279 0.188 0.219 0.615-0.102 0.715l-4.159 1.3c-0.093 0.029-0.186 0.044-0.277 0.044-0.279 0-0.548-0.14-0.721-0.374-0.099-0.135-0.248-0.418-0.13-0.797l1.39-4.447c0.065-0.208 0.344-0.246 0.462-0.062l0.003 0.005c0.108 0.168 0.22 0.334 0.335 0.497 0.636 0.895 1.388 1.702 2.234 2.4 0.154 0.127 0.31 0.25 0.47 0.37s0.322 0.235 0.488 0.347c0.002 0.002 0.005 0.003 0.007 0.005zM28.343 27.215c0.118 0.379-0.031 0.662-0.13 0.797-0.172 0.235-0.442 0.375-0.721 0.375-0.091 0-0.185-0.015-0.277-0.044 0 0-2.606-0.689-4.165-1.235-0.342-0.12-0.398-0.577-0.097-0.78 0.002-0.002 0.005-0.003 0.007-0.005 0.166-0.112 0.328-0.228 0.488-0.347s0.317-0.243 0.47-0.37c0.845-0.698 1.597-1.505 2.233-2.4 0.116-0.163 0.228-0.328 0.335-0.497l0.003-0.005c0.118-0.184 0.397-0.146 0.462 0.062l1.39 4.448z"/>
</g>
    </svg>
  )
}

export default BuoyIcon

