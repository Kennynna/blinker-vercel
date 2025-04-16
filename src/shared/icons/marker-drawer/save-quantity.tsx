import React from 'react';
import styled from '@emotion/styled';

const IconWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 39px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
`;

export function SaveQuantityIcon({ color }: { color: string }): React.JSX.Element {
  return (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_1563_110217)">
          <path
            d="M12.6667 12.0003L14 12.667V2.00033C14 1.26699 13.4 0.666992 12.6667 0.666992H5.99333C5.26 0.666992 4.66667 1.26699 4.66667 2.00033H11.3333C12.0667 2.00033 12.6667 2.60033 12.6667 3.33366V12.0003ZM10 3.33366H3.33333C2.6 3.33366 2 3.93366 2 4.66699V15.3337L6.66667 13.3337L11.3333 15.3337V4.66699C11.3333 3.93366 10.7333 3.33366 10 3.33366Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1563_110217">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
