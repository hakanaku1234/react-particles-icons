import React from 'react';

const ParticlesDisk = (props) => {
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
<path d="M29.959 18.705c-0.703-1.676-2.488-5.939-2.532-6.049s-0.098-0.219-0.163-0.327c-0.194-0.323-0.479-0.632-0.844-0.924-0.081-0.065-0.166-0.129-0.255-0.192-0.071-0.051-0.146-0.1-0.222-0.15-0.066-0.043-0.134-0.085-0.204-0.127-0.1-0.060-0.204-0.119-0.312-0.177s-0.218-0.115-0.333-0.171c-0.075-0.037-0.152-0.073-0.23-0.109-0.082-0.038-0.166-0.075-0.252-0.112-0.080-0.034-0.162-0.069-0.245-0.102-0.088-0.035-0.178-0.070-0.268-0.104-0.107-0.040-0.216-0.080-0.327-0.119-0.068-0.024-0.138-0.047-0.207-0.071-0.14-0.047-0.283-0.092-0.428-0.136-0.073-0.022-0.146-0.044-0.22-0.065-0.129-0.037-0.26-0.073-0.392-0.108-0.036-0.009-0.072-0.019-0.108-0.028-0.124-0.032-0.249-0.063-0.376-0.093-0.095-0.022-0.19-0.044-0.286-0.066-0.242-0.054-0.49-0.104-0.742-0.151s-0.51-0.090-0.773-0.13c-0.262-0.040-0.53-0.076-0.801-0.109-0.181-0.022-0.364-0.042-0.549-0.060s-0.371-0.035-0.559-0.050c-0.094-0.007-0.189-0.014-0.283-0.021-0.19-0.013-0.381-0.024-0.574-0.034-0.482-0.024-0.974-0.036-1.472-0.036-1.496 0-2.926 0.109-4.239 0.308-0.35 0.053-0.692 0.113-1.024 0.178-0.083 0.016-0.166 0.033-0.247 0.050-0.164 0.034-0.325 0.070-0.484 0.107s-0.315 0.076-0.469 0.116c-0.231 0.060-0.455 0.123-0.674 0.189-0.364 0.11-0.71 0.228-1.037 0.354-0.131 0.050-0.258 0.102-0.383 0.154s-0.246 0.106-0.363 0.161-0.232 0.111-0.343 0.168-0.218 0.115-0.322 0.174c-0.104 0.059-0.204 0.119-0.301 0.18-0.145 0.092-0.281 0.185-0.409 0.281-0.045 0.033-0.088 0.067-0.13 0.101-0.269 0.215-0.493 0.44-0.669 0.672-0.033 0.043-0.064 0.087-0.094 0.131-0.029 0.042-0.056 0.085-0.081 0.128-0.030 0.050-0.058 0.101-0.084 0.152-0.003 0.006-0.006 0.013-0.009 0.019-0.034 0.070-0.064 0.14-0.089 0.211-0.022 0.061-1.804 4.306-2.507 5.981-0.185 0.442-0.281 0.915-0.281 1.394v1.238c0 0.046 0.005 0.091 0.011 0.135v1.598c0 1.989 1.613 3.602 3.602 3.602h21.252c1.989 0 3.602-1.613 3.602-3.602v-1.598c0.007-0.044 0.011-0.089 0.011-0.135v-1.239c0-0.478-0.095-0.951-0.28-1.392zM7.039 12.575c0.072-0.047 0.15-0.094 0.234-0.143 0.359-0.208 0.83-0.433 1.446-0.654 1.957-0.704 4.543-1.091 7.282-1.091s5.325 0.387 7.282 1.091c0.615 0.221 1.087 0.446 1.446 0.654 0.084 0.049 0.162 0.097 0.234 0.143 0.55 0.357 0.55 1.158 0 1.515-0.072 0.047-0.15 0.094-0.233 0.143-0.359 0.208-0.83 0.433-1.446 0.654-1.957 0.704-4.543 1.091-7.282 1.091s-5.325-0.387-7.282-1.091c-0.615-0.221-1.087-0.446-1.446-0.654-0.084-0.049-0.162-0.096-0.234-0.143-0.55-0.357-0.55-1.158 0-1.515zM4.179 18.302l1.107-2.584c0.11-0.258 0.427-0.347 0.659-0.19 0.002 0.001 0.003 0.002 0.005 0.003 0.053 0.036 0.107 0.071 0.163 0.107 0.097 0.061 0.197 0.121 0.301 0.18s0.211 0.117 0.322 0.174 0.225 0.113 0.343 0.168c0.236 0.11 0.485 0.215 0.746 0.316 0.327 0.126 0.673 0.244 1.037 0.354 0.218 0.066 0.443 0.129 0.674 0.189 0.461 0.12 0.946 0.227 1.452 0.321 1.516 0.281 3.216 0.438 5.012 0.438 1.335 0 2.618-0.087 3.811-0.247 0.928-0.125 1.802-0.294 2.605-0.5 0.036-0.009 0.072-0.019 0.108-0.028 0.209-0.055 0.414-0.113 0.613-0.173 0.146-0.044 0.288-0.089 0.428-0.136 0.183-0.061 0.361-0.125 0.534-0.19 0.043-0.016 0.087-0.033 0.129-0.050 0.221-0.086 0.433-0.176 0.635-0.269 0.078-0.036 0.155-0.072 0.23-0.109 0.114-0.056 0.225-0.113 0.333-0.171s0.211-0.117 0.312-0.177c0.070-0.042 0.137-0.085 0.204-0.127 0.076-0.049 0.151-0.099 0.222-0.15l0.003-0.002c0.17-0.121 0.408-0.054 0.49 0.138l1.163 2.714c0.255 0.594-0.181 1.255-0.828 1.255h-21.986c-0.646-0-1.082-0.661-0.828-1.255zM28.427 23.069c0 0.995-0.806 1.801-1.801 1.801h-21.252c-0.995 0-1.801-0.806-1.801-1.801v-0.811c0-0.497 0.403-0.9 0.9-0.9h23.052c0.497 0 0.9 0.403 0.9 0.9v0.811z"/>
<path d="M13.64 13.81c0.012 0.009 0.024 0.017 0.036 0.025 0.047 0.032 0.098 0.063 0.153 0.092 0.024 0.013 0.049 0.026 0.075 0.038 0.101 0.049 0.213 0.095 0.336 0.137 0.077 0.026 0.157 0.050 0.241 0.073 0.045 0.012 0.090 0.024 0.137 0.034 0.034 0.008 0.069 0.015 0.104 0.023 0.010 0.002 0.021 0.004 0.031 0.006 0.093 0.019 0.19 0.036 0.289 0.051 0.199 0.030 0.409 0.050 0.627 0.061 0.109 0.005 0.22 0.008 0.333 0.008 0.46 0 0.894-0.045 1.272-0.124 0.003-0.001 0.005-0.001 0.008-0.002 0.073-0.015 0.143-0.032 0.212-0.050 0.106-0.028 0.207-0.058 0.302-0.091s0.183-0.069 0.265-0.107c0.054-0.025 0.106-0.052 0.154-0.079 0.024-0.014 0.047-0.027 0.069-0.042 0.045-0.028 0.086-0.057 0.123-0.087s0.071-0.061 0.101-0.092c0.075-0.079 0.125-0.162 0.148-0.248 0.009-0.034 0.014-0.069 0.014-0.105 0-0.071-0.019-0.14-0.054-0.207-0.027-0.050-0.063-0.099-0.108-0.146-0.030-0.031-0.064-0.062-0.101-0.092s-0.079-0.059-0.123-0.087c-0.022-0.014-0.045-0.028-0.069-0.042-0.048-0.027-0.099-0.054-0.154-0.079-0.163-0.076-0.354-0.143-0.567-0.198-0.069-0.018-0.139-0.034-0.212-0.050-0.003-0.001-0.005-0.001-0.008-0.002-0.076-0.016-0.153-0.030-0.233-0.043s-0.162-0.025-0.245-0.034c-0.125-0.015-0.255-0.027-0.387-0.034s-0.268-0.012-0.406-0.012c-0.23 0-0.454 0.011-0.667 0.032-0.085 0.008-0.169 0.018-0.251 0.030-0.125 0.018-0.246 0.039-0.362 0.063-0.035 0.007-0.070 0.015-0.104 0.023-0.77 0.18-1.284 0.506-1.284 0.877 0 0.173 0.111 0.335 0.307 0.478z"/>
<path d="M11.554 22.213h-5.335c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h5.335c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M14.309 22.213h-0.176c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h0.176c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
</g>
    </svg>
  );
}

export default ParticlesDisk;

