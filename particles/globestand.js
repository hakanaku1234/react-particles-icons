import React from 'react';

const ParticlesGlobestand = (props) => {
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
<path d="M10.786 18.547c1.859 1.859 4.296 2.789 6.732 2.789s4.873-0.93 6.732-2.789c3.718-3.718 3.718-9.746 0-13.465-1.859-1.859-4.296-2.789-6.732-2.789s-4.873 0.93-6.732 2.789c-3.718 3.718-3.718 9.746 0 13.465zM12.059 17.273c-0.561-0.561-1.024-1.192-1.382-1.875-0.057-0.108-0.038-0.241 0.049-0.327l1.802-1.802c0.118-0.118 0.312-0.106 0.414 0.025 0.432 0.558 0.917 1.111 1.451 1.645s1.087 1.020 1.645 1.452c0.132 0.102 0.143 0.296 0.025 0.414l-1.802 1.802c-0.086 0.086-0.219 0.105-0.327 0.049-0.682-0.359-1.314-0.822-1.875-1.383zM14.209 11.587l3.083-3.083c0.096-0.096 0.249-0.109 0.359-0.028 0.591 0.437 1.17 0.937 1.719 1.486 0.548 0.548 1.047 1.129 1.484 1.72 0.081 0.11 0.068 0.262-0.028 0.359l-3.083 3.083c-0.096 0.096-0.249 0.109-0.359 0.028-0.591-0.437-1.17-0.937-1.719-1.486-0.548-0.548-1.047-1.129-1.484-1.72-0.081-0.11-0.068-0.262 0.028-0.359zM17.518 19.534c-0.416 0-0.827-0.033-1.229-0.097-0.112-0.018-0.156-0.155-0.076-0.235l1.469-1.469c0.087-0.087 0.22-0.105 0.328-0.046 0.868 0.471 1.716 0.802 2.499 0.976 0.132 0.029 0.148 0.21 0.024 0.263-0.941 0.399-1.962 0.609-3.015 0.609zM22.496 16.792c-0.184 0.184-0.567 0.212-0.779 0.212-0.607 0-1.375-0.203-2.199-0.576-0.177-0.080-0.22-0.312-0.083-0.449l2.248-2.248c0.137-0.137 0.369-0.094 0.449 0.083 0.12 0.264 0.223 0.525 0.308 0.779 0.389 1.168 0.308 1.946 0.056 2.198zM25.238 11.814c0 1.053-0.21 2.074-0.609 3.014-0.053 0.125-0.234 0.109-0.263-0.024-0.174-0.783-0.504-1.631-0.975-2.499-0.059-0.108-0.041-0.241 0.046-0.328l1.469-1.469c0.080-0.080 0.218-0.036 0.235 0.076 0.064 0.403 0.097 0.814 0.097 1.229zM22.977 6.355c0.561 0.561 1.024 1.192 1.382 1.875 0.057 0.108 0.038 0.241-0.049 0.327l-1.802 1.802c-0.118 0.118-0.312 0.106-0.414-0.025-0.432-0.558-0.917-1.111-1.451-1.645s-1.087-1.020-1.645-1.452c-0.132-0.102-0.143-0.296-0.025-0.414l1.802-1.802c0.086-0.086 0.219-0.105 0.327-0.049 0.682 0.359 1.314 0.822 1.875 1.382zM17.518 4.094c0.416 0 0.827 0.033 1.229 0.097 0.112 0.018 0.156 0.155 0.076 0.235l-1.469 1.469c-0.087 0.087-0.22 0.105-0.328 0.046-0.868-0.471-1.716-0.802-2.499-0.975-0.132-0.029-0.148-0.21-0.024-0.263 0.941-0.399 1.962-0.609 3.014-0.609zM12.54 6.836c0.184-0.184 0.567-0.212 0.779-0.212h0c0.607 0 1.374 0.203 2.198 0.576 0.177 0.080 0.22 0.312 0.083 0.449l-2.248 2.248c-0.137 0.137-0.369 0.094-0.449-0.083-0.12-0.264-0.223-0.525-0.308-0.779-0.389-1.168-0.308-1.946-0.056-2.198zM11.599 11.651l-1.469 1.469c-0.080 0.080-0.217 0.036-0.235-0.076-0.064-0.403-0.097-0.814-0.097-1.229 0-1.053 0.21-2.073 0.609-3.014 0.053-0.125 0.234-0.109 0.263 0.024 0.174 0.783 0.504 1.631 0.975 2.499 0.059 0.108 0.041 0.241-0.046 0.328z"/>
<path d="M17.805 24.787c3.586 0 6.952-1.402 9.477-3.948 0.35-0.353 0.348-0.923-0.005-1.273s-0.923-0.348-1.273 0.005c-2.18 2.197-5.083 3.41-8.178 3.415-6.368 0.011-11.51-5.071-11.569-11.438-0.029-3.113 1.166-6.047 3.357-8.252 0.351-0.353 0.349-0.923-0.004-1.273s-0.923-0.349-1.273 0.004c-2.503 2.518-3.881 5.86-3.881 9.41 0 6.194 4.24 11.416 9.97 12.916 0.396 0.104 0.673 0.459 0.673 0.868v2.319c0 0.495-0.402 0.897-0.897 0.897h-7.069c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h17.759c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-7.095c-0.495 0-0.897-0.402-0.897-0.897v-1.866c0-0.494 0.402-0.888 0.896-0.888 0.003 0 0.006 0 0.009 0z"/>
</g>
    </svg>
  );
}

export default ParticlesGlobestand;

