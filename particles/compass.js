import React from 'react'

const CompassIcon = (props) => {
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
<title>compass</title>
<path d="M25.712 28.966l-3.778-8.313c-0.042-0.092 0.025-0.196 0.126-0.196h1.943c0.512 0 0.924-0.427 0.899-0.944-0.023-0.484-0.44-0.857-0.925-0.857h-2.773c-0.109 0-0.207-0.064-0.252-0.162l-2.623-5.771c-0.050-0.11-0.022-0.239 0.067-0.32 0.756-0.689 1.213-1.699 1.156-2.815-0.076-1.49-1.088-2.753-2.459-3.198-0.115-0.037-0.193-0.143-0.193-0.263v-3.44c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v3.466c0 0.12-0.078 0.226-0.193 0.263-1.43 0.461-2.464 1.802-2.464 3.385 0 1.042 0.448 1.978 1.161 2.629 0.089 0.081 0.116 0.21 0.066 0.319l-2.623 5.771c-0.045 0.099-0.144 0.162-0.252 0.162h-2.773c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h1.943c0.101 0 0.168 0.104 0.126 0.196l-3.778 8.312c-0.206 0.453-0.006 0.987 0.447 1.192s0.987 0.006 1.192-0.447l4.132-9.091c0.045-0.099 0.144-0.162 0.252-0.162h2.649c0.077 0 0.139 0.062 0.139 0.139v0.714c0 0.485 0.373 0.902 0.857 0.925 0.517 0.024 0.944-0.388 0.944-0.899v-0.74c0-0.077 0.062-0.139 0.139-0.139h2.649c0.109 0 0.207 0.064 0.252 0.162l4.132 9.091c0.151 0.332 0.478 0.528 0.82 0.528 0.125 0 0.251-0.026 0.372-0.081 0.453-0.206 0.653-0.74 0.447-1.192zM16 7.997c0.982 0 1.778 0.796 1.778 1.778s-0.796 1.778-1.778 1.778c-0.982 0-1.778-0.796-1.778-1.778s0.796-1.778 1.778-1.778zM18.833 18.656h-1.794c-0.077 0-0.139-0.062-0.139-0.139v-0.714c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v0.739c0 0.076-0.062 0.139-0.139 0.139h-1.794c-0.101 0-0.168-0.104-0.126-0.196l2.311-5.085c0.026-0.057 0.086-0.088 0.147-0.079 0.163 0.023 0.33 0.036 0.5 0.036s0.337-0.013 0.5-0.036c0.061-0.009 0.122 0.023 0.147 0.079l2.311 5.085c0.042 0.092-0.026 0.196-0.126 0.196z"/>
</g>
    </svg>
  )
}

export default CompassIcon

