import React from 'react';
import styled from '@emotion/styled';





interface Props {
  width?: string;
  height?: string;
  isScroll?: boolean;
}
const IconWrapper = styled.div<Props>`
  display: flex;
  min-width: ${(props) => (props.width ? props.width : '40px')};
  min-height: ${(props) => (props.height ? props.height : '40px')};
  justify-content: center;
  padding: 12px;
  align-items: center;
  gap: 8px;
  border-radius: 39px;
  background: #fff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  background: ${(props) => (props.isScroll ? '#F9F9F9' : '#fff')};
`;

interface IconProps {
  color?: string;
  width?: string;
  height?: string;
  isScroll?: boolean;
}

export function PhoneIcon({ color, width, height, isScroll }: IconProps) {
  return (
    <IconWrapper width={width} height={height} isScroll={isScroll}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_40000059_61536)">
          <path
            d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
            fill="#00A3FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_40000059_61536">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
