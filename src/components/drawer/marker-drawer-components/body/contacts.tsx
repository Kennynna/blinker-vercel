import React from 'react';
import Link from 'next/link';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 14px;
  color: #424242;
  font-weight: 600;
  margin: 0;
`;

export const Desc = styled.a`
  font-size: 14px;
  color: #424242;
  margin: 0;
  margin-top: 4px;
  font-size: 16px;
  width: 100%;
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* Удалено лишнее двоеточие */
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
`;

const TextBlock = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  width: 100%;
  padding: 16px;
`;

interface MarkerItemContactsProps {
  description: string;
  icon?: string;
  socialNetwork?: string;
  children?: ReactJSXElement;
}

export const MarkerItemContacts: React.FC<MarkerItemContactsProps> = ({ description, children, socialNetwork }) => {
  return (
    <Block>
      <TextBlock>
        <Title>Телефон</Title>
        <Desc>{description}</Desc>
      </TextBlock>
      <TextBlock>
        <Title>Сайт</Title>
        <Desc target="_blank" href={socialNetwork}>
          {socialNetwork}
        </Desc>
      </TextBlock>
      {children}
    </Block>
  );
};
