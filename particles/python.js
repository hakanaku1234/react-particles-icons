import React from 'react'

const PythonIcon = (props) => {
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
<title>python</title>
<path d="M12.978 15.55h6.007c1.672 0 3.007-1.377 3.007-3.056v-5.727c0-1.63-1.375-2.854-3.007-3.126-1.033-0.172-2.105-0.25-3.133-0.245s-2.010 0.092-2.874 0.245c-2.545 0.45-3.007 1.391-3.007 3.126v2.292h6.014v0.764h-8.272c-1.748 0-3.279 1.051-3.757 3.049-0.552 2.291-0.577 3.721 0 6.113 0.428 1.781 1.449 3.049 3.196 3.049h2.068v-2.748c0-1.985 1.718-3.736 3.757-3.736zM12.599 7.531c-0.623 0-1.129-0.511-1.129-1.143 0-0.634 0.505-1.15 1.129-1.15 0.621 0 1.129 0.516 1.129 1.15 0 0.632-0.507 1.143-1.129 1.143z"/>
<path d="M28.007 12.872c-0.432-1.74-1.257-3.049-3.007-3.049h-2.257v2.671c0 2.071-1.756 3.813-3.757 3.813h-6.007c-1.646 0-3.007 1.408-3.007 3.056v5.727c0 1.63 1.417 2.589 3.007 3.056 1.904 0.56 3.73 0.661 6.007 0 1.514-0.438 3.007-1.321 3.007-3.056v-2.292h-6.007v-0.764h9.015c1.748 0 2.399-1.219 3.007-3.049 0.628-1.884 0.601-3.696-0-6.113zM19.363 24.326c0.623 0 1.129 0.511 1.129 1.143 0 0.634-0.505 1.15-1.129 1.15-0.621 0-1.129-0.516-1.129-1.15 0-0.632 0.507-1.143 1.129-1.143z"/>
</g>
    </svg>
  )
}

export default PythonIcon

