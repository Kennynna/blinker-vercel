import React from 'react';

import type { SvgProps } from './types';

export function ArrowLeftIcon({ color }: SvgProps): React.JSX.Element {
  return (
    <svg fill="none" height="40" width="40" xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}}>
      <svg
        fill={color ? color : '#000'}
        height="40"
        opacity="100%"
        viewBox="0 0 24 24"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
    </svg>
  );
}
