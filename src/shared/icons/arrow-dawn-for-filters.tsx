import React from 'react';

import type { SvgProps } from './types';

export function ArrowDawnForFiltersIcon({ color }: SvgProps): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.91992 4.66663L7.99992 8.78718L12.0799 4.66663L13.3333 5.93518L7.99992 11.3333L2.66659 5.93518L3.91992 4.66663Z"
        fill={color ? color : '#000'}
      />
    </svg>
  );
}
