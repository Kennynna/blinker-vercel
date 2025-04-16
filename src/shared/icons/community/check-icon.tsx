import React from 'react';

export function CheckIcon({ color }: { color: string }): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <g clip-path="url(#clip0_2252_197311)">
        <path
          d="M6.5001 10.7799L3.7201 7.9999L2.77344 8.9399L6.5001 12.6666L14.5001 4.66656L13.5601 3.72656L6.5001 10.7799Z"
          fill={color ? color : '#958A8A'}
        />
      </g>
      <defs>
        <clipPath id="clip0_2252_197311">
          <rect width="16" height="16" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
