import React from 'react';
import styled from '@emotion/styled';

const IconWrapper = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 39px;
  background: #fff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
`;

export function ArrowRight({ color }: React.HTMLAttributes<SVGSVGElement>): React.JSX.Element {
  return (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <g clip-path="url(#clip0_40000052_38162)">
          <path
            d="M5.8335 15.6002L10.9842 10.5002L5.8335 5.40016L7.41919 3.8335L14.1668 10.5002L7.41919 17.1668L5.8335 15.6002Z"
            fill={color ? color : '#00A3FF'}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000052_38162">
            <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}

export function ArrowRight({ color }: React.HTMLAttributes<SVGSVGElement>): React.JSX.Element {
  return (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <g clip-path="url(#clip0_40000052_38162)">
          <path
            d="M5.8335 15.6002L10.9842 10.5002L5.8335 5.40016L7.41919 3.8335L14.1668 10.5002L7.41919 17.1668L5.8335 15.6002Z"
            fill={color ? color : '#00A3FF'}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000052_38162">
            <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
