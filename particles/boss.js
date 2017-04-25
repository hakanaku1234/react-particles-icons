import React from 'react'

const BossIcon = (props) => {
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
<title>boss</title>
<path d="M23.017 13.626c0.641-1.165 1-2.507 0.986-3.934-0.044-4.323-3.566-7.858-7.889-7.918-4.472-0.062-8.117 3.544-8.117 8.002 0 1.399 0.359 2.715 0.991 3.859 0.219 0.397 0.099 0.894-0.269 1.16-3.13 2.261-5.168 5.941-5.168 10.098 0 3.438 6.225 5.157 12.449 5.157s12.449-1.719 12.449-5.157c0-4.157-2.038-7.837-5.168-10.098-0.371-0.268-0.485-0.768-0.264-1.168zM9.809 9.408c0.038-0.642 0.726-1.031 1.301-0.744l1.642 0.821c0.347 0.173 0.765 0.105 1.039-0.169l2.576-2.576c0.303-0.303 0.779-0.351 1.136-0.112l1.687 1.125c0.231 0.154 0.521 0.193 0.784 0.105l0.867-0.289c0.497-0.165 1.025 0.127 1.158 0.633 0.132 0.503 0.203 1.030 0.203 1.574 0 1.386-0.457 2.668-1.229 3.702-0.395 0.529-0.873 0.994-1.413 1.374-1.008 0.709-2.236 1.126-3.56 1.126s-2.552-0.417-3.56-1.126c-0.541-0.38-1.018-0.845-1.413-1.374-0.772-1.034-1.229-2.315-1.229-3.702-0-0.123 0.004-0.246 0.011-0.367zM26.141 25.84c-0.472 0.447-1.234 0.872-2.205 1.229-2.034 0.749-4.926 1.178-7.936 1.178s-5.903-0.429-7.936-1.178c-0.97-0.357-1.732-0.782-2.205-1.229-0.455-0.43-0.507-0.747-0.507-0.948 0-2.844 1.108-5.518 3.119-7.529 0.482-0.482 1.002-0.911 1.553-1.287 0.326-0.222 0.76-0.218 1.072 0.024 0.858 0.667 1.857 1.161 2.943 1.435 0.11 0.028 0.183 0.128 0.183 0.242 0 0.001 0 0.001 0 0.002 0 0.622 0.32 1.526 0.804 2.106 0.058 0.069 0.074 0.163 0.041 0.247-0.026 0.068-0.045 0.139-0.055 0.214l-0.712 5.693c-0.047 0.379 0.149 0.746 0.491 0.917l0.806 0.403c0.254 0.127 0.552 0.127 0.805 0l0.806-0.403c0.341-0.171 0.538-0.538 0.491-0.917l-0.712-5.693c-0.009-0.075-0.028-0.147-0.055-0.214-0.033-0.084-0.016-0.178 0.041-0.247 0.484-0.579 0.804-1.483 0.804-2.106 0-0.001 0-0.001 0-0.002-0-0.113 0.073-0.214 0.183-0.242 1.086-0.274 2.084-0.768 2.943-1.435 0.312-0.242 0.745-0.246 1.072-0.024 0.551 0.375 1.071 0.805 1.553 1.287 2.011 2.011 3.119 4.685 3.119 7.529-0 0.201-0.053 0.518-0.507 0.948z"/>
</g>
    </svg>
  )
}

export default BossIcon

