import React from 'react';
import styled from '@emotion/styled';

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  margin-top: 12px;
  margin-bottom: 24px;
  color: #958a8a;

  font-size: 14px;
  font-weight: 600;
`;

export const Sub = () => {
  return (
    <Block>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <g clip-path="url(#clip0_2252_197471)">
          <path
            d="M6.0001 11.2799L3.2201 8.4999L2.27344 9.4399L6.0001 13.1666L14.0001 5.16656L13.0601 4.22656L6.0001 11.2799Z"
            fill="#958A8A"
          />
        </g>
        <defs>
          <clipPath id="clip0_2252_197471">
            <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
      <p>Вы присоединились · </p>
      <p> 1 Участник</p>
    </Block>
  );
};
