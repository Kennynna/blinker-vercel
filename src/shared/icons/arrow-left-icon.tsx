import React from 'react';



import type { SvgProps } from './types';


interface ArrowLeft extends SvgProps {
  onCloseFilters: () => void;
}

export function ArrowLeftIcon({ color, onCloseFilters }: ArrowLeft): React.JSX.Element {
  return (
    <svg
      onClick={onCloseFilters}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_742_5417)">
        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill={color ? color : '#B7AEAE'} />
      </g>
      <defs>
        <clipPath id="clip0_742_5417">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
