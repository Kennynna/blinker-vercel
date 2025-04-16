import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  border: none;
  border-radius: 39px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Text = styled.p`
  color: #424242;
  font-size: 14px;
  font-weight: 600;
`;

export const CommunityAddButton = () => {
  return (
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <g clip-path="url(#clip0_2252_198438)">
          <path d="M19.5 13H13.5V19H11.5V13H5.5V11H11.5V5H13.5V11H19.5V13Z" fill="#B7AEAE" />
        </g>
        <defs>
          <clipPath id="clip0_2252_198438">
            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      <Text>Добавить</Text>
    </Button>
  );
};
