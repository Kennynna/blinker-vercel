import React from 'react';
import styled from '@emotion/styled';


const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  width: 100%;
  margin-top: 8px;
`;

export const Head = styled.p`
  margin: 0;
  color: #424242;
  font-size: 14px;
  font-weight: 400;
`;

export const Desc = styled.a`
  margin: 0;
  margin-top: 4px;
  color: #424242;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 150%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* Удалено лишнее двоеточие */
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
`;

const Title = styled.a`
  color: #424242;
  margin: 0;
  margin-top: 4px;
  font-size: 16px;
  width: 100%;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* Удалено лишнее двоеточие */
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
`;
const TextBlock = styled.div``;

interface PlaceContactsProps {
  phoneNum: string;
  icon?: string;
  socialNetwork?: string;
}

const PhoneBlock = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border-radius: 16px;
  width: 100%;
  padding: 16px;
`;

export const PlaceContacts: React.FC<PlaceContactsProps> = ({ phoneNum, socialNetwork }) => {
  return (
    <>
      {/* <Title>Контакты</Title> */}
      <Block>
        <PhoneBlock>
          <TextBlock>
            <Title>Телефон</Title>
            <Desc>{phoneNum}</Desc>
          </TextBlock>
          <PhoneIcon />
        </PhoneBlock>
        {/* Сайт */}
        <PhoneBlock>
          <TextBlock>
            <Title>Сайт</Title>
            <Desc target="_blank" href={socialNetwork}>
              {socialNetwork}
            </Desc>
          </TextBlock>
          <SiteIcon />
        </PhoneBlock>
      </Block>
    </>
  );
};

export function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_40000074_45856)">
        <path
          d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
          fill="#00A3FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_40000074_45856">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SiteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_40000077_55699)">
        <path
          d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
          fill="#00A3FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_40000077_55699">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
