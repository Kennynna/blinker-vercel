import React from 'react';





export function PlusIcon({ color, onClick }: { color?: string; onClick?: () => void }): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" onClick={onClick}>
      <g clip-path="url(#clip0_2252_197712)">
        <path d="M19.5 13H13.5V19H11.5V13H5.5V11H11.5V5H13.5V11H19.5V13Z" fill={color ? color : '#958A8A'} />
      </g>
      <defs>
        <clipPath id="clip0_2252_197712">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
