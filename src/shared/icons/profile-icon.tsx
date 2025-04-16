import React from 'react';

import type { SvgProps } from './types';

export function ProfileIcon({ color }: SvgProps): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        fill={color || '#000'}
        opacity="100%"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </svg>
  );
}
