import React from 'react'

const CarrotIcon = (props) => {
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
<path d="M17.778 7.11h-0.25c-0.36 0-0.631-0.339-0.538-0.687 0.303-1.131 1.336-1.967 2.56-1.969 0.47-0.001 0.873-0.369 0.904-0.838 0.036-0.526-0.38-0.963-0.898-0.963-0.816 0-1.581 0.22-2.239 0.604-0.185 0.108-0.417-0.024-0.417-0.238v-0.329c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v0.355c0 0.215-0.233 0.346-0.418 0.238-0.649-0.378-1.401-0.598-2.203-0.604-0.479-0.004-0.898 0.354-0.933 0.831-0.039 0.529 0.378 0.97 0.898 0.97 1.223 0 2.256 0.831 2.563 1.958 0.096 0.352-0.171 0.698-0.536 0.698h-0.249c-1.473 0-2.668 1.194-2.668 2.668v0c0 2.836 0.295 6.446 0.88 9.743-0.001 0.013-0.002 0.026-0.002 0.038 0 0.127 0.027 0.247 0.074 0.357 0.265 1.424 0.584 2.78 0.958 3.978l1.817 5.816c0.11 0.352 0.414 0.528 0.718 0.528s0.608-0.176 0.718-0.528l1.817-5.816c1.269-4.060 1.91-9.931 1.91-14.116v0c-0-1.473-1.194-2.668-2.668-2.668zM18.18 16.654c-0.33 2.587-0.802 4.905-1.363 6.702l-0.552 1.768c-0.081 0.259-0.448 0.259-0.529 0l-0.552-1.768c-0.214-0.685-0.415-1.446-0.6-2.269-0.072-0.322 0.172-0.628 0.502-0.628v0c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-0.559c-0.254 0-0.469-0.185-0.509-0.435-0.038-0.242-0.074-0.486-0.11-0.734-0.044-0.31 0.197-0.587 0.51-0.587h1.532c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-1.89c-0.266 0-0.488-0.203-0.513-0.468-0.023-0.244-0.044-0.488-0.064-0.731-0.024-0.3 0.212-0.557 0.513-0.557h2.817c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-3.001c-0.278 0-0.506-0.221-0.514-0.499-0.013-0.434-0.019-0.859-0.019-1.269 0-0.479 0.388-0.867 0.867-0.867h3.557c0.479 0 0.867 0.388 0.867 0.866 0 2.087-0.165 4.529-0.465 6.877z"/>
</g>
    </svg>
  )
}

export default CarrotIcon
