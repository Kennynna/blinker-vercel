'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface Props {
  active: boolean;
}

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
    name: 'О месте',
    href: '#about',
  },

  {
    name: 'События',
    href: '#events',
  },
];

export const Links = () => {
  const [active, setActive] = useState(0);

  return (
    <Box sx={{ display: 'flex', gap: '6px', width: '100%' }}>
      {LinksArray.map((link, index) => (
        <Link key={index} href={link.href} onClick={() => setActive(index)} active={active === index}>
          {link.name}
        </Link>
      ))}
    </Box>
  );
};

export const LinksEvents = () => {
  const LinksEventsArray = [
    {
      name: 'О событии',
      href: '#about',
    },

    {
      name: 'Исполнители',
      href: '#Исполнители',
    },

    {
      name: 'Расписание',
      href: '#Расписание',
    },
    {
      name: 'Контакты',
      href: '#Контакты',
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <LinksBlock>
      {LinksEventsArray.map((link, index) => (
        <Link key={index} href={link.href} onClick={() => setActive(index)} active={active === index}>
          {link.name}
        </Link>
      ))}
    </LinksBlock>
  );
};
const LinksBlock = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
  gap: 10px;
  width: 100%;
  scrollbar-width: none; /* Скрывает ползунок в Firefox */
  -ms-overflow-style: none; /* Скрывает ползунок в Internet Explorer и старом Edge */
  &::-webkit-scrollbar {
    display: none; /* Скрывает ползунок в WebKit-браузерах (Chrome, Safari, новый Edge) */
  }
`;
