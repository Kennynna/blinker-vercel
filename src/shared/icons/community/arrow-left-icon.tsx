import React from 'react';

interface ArrowLeftProps {
  color?: string;
  closeDrawer?: () => void;
}

export function ArrowLeftIcon({ color,closeDrawer }: ArrowLeftProps): React.JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeDrawer}>
      <g clip-path="url(#clip0_40000071_11148)">
        <path d="M19 11H8.83L13.41 6.41L12 5L5 12L12 19L13.41 17.59L8.83 13H19V11Z" fill={color ? color : '#00A3FF'} />
      </g>
      <defs>
        <clipPath id="clip0_40000071_11148">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
