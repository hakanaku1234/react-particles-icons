import React from 'react'

const DenyIcon = (props) => {
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
<title>deny</title>
<path d="M25.781 12.432c-0.497 0-0.9 0.403-0.9 0.9v9.748c0 0.993-0.808 1.801-1.801 1.801h-14.16c-0.993 0-1.801-0.808-1.801-1.801v-14.16c0-0.993 0.808-1.801 1.801-1.801h9.748c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9h-9.748c-1.986 0-3.602 1.616-3.602 3.602v14.16c0 1.986 1.616 3.602 3.602 3.602h14.16c1.986 0 3.602-1.616 3.602-3.602v-9.748c0-0.497-0.403-0.9-0.9-0.9z"/>
<path d="M15.363 14.090l-4.062-4.062c-0.352-0.352-0.922-0.352-1.273 0s-0.352 0.922 0 1.273l4.062 4.062c0.352 0.352 0.352 0.922 0 1.273l-4.062 4.062c-0.352 0.352-0.352 0.922 0 1.273 0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264l4.062-4.062c0.352-0.352 0.922-0.352 1.273 0l4.062 4.062c0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264c0.35-0.35 0.332-0.942-0.019-1.292l-4.043-4.043c-0.352-0.352-0.352-0.922 0-1.273l4.041-4.041c0.351-0.351 0.377-0.925 0.033-1.282-0.35-0.364-0.93-0.368-1.285-0.012l-4.062 4.062c-0.352 0.351-0.922 0.351-1.273-0z"/>
</g>
    </svg>
  )
}

export default DenyIcon

