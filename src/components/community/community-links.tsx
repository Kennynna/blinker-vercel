'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface Props {
  active: boolean;
  isScroll: boolean;
}

const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  position: ${({ isScroll }) => (isScroll ? 'fixed' : 'static')};
  left: 0;
  top: 56px;
  width: 100%;
  height: ${(props) => (props.isScroll ? '47px' : '')};
  z-index: 1000;
  background-color: ${(props) => (props.isScroll ? 'white' : '')};
  padding: ${(props) => (props.isScroll ? '8px 16px' : '')};
`;

const Link = styled.a<Props>`
  color: ${(props) => (props.active ? '#424242' : '#958A8A')};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  border-bottom: ${(props) => (props.active ? ' 2px solid #424242' : '')};
`;

const LinksArray = [
  {
    name: 'О группе',
    href: '#about',
  },
  {
    name: 'Ближайшее',
    href: '#features',
  },
  {
    name: 'Подборки',
    href: '#collections',
  },
  {
    name: 'События',
    href: '#events',
  },
];
export const CommunityLinks = ({ isScroll }: { isScroll: boolean }) => {
  const [active, setActive] = useState(0);

  return (
    <Wrapper isScroll={isScroll}>
      {LinksArray.map((link, index) => (
        <Link key={index} href={link.href} onClick={() => setActive(index)} active={active === index}>
          {link.name}
        </Link>
      ))}
    </Wrapper>
  );
};
