'use client';

import * as React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { Tag, TagBlock, TagList, Title } from '../community-add-palce-steps/four-step-new-card-place';

const Header = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const HeaderText = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderTitle = styled.p`
  margin: 0;
  color: #424242;
  font-size: 16px;
  font-weight: 700;
`;

const HeaderDesc = styled.p`
  margin: 0;
  color: #958a8a;
  font-size: 14px;
  font-weight: 600;
`;

interface DrawerProps {
  tags: string[];
  title: string;
  desc?: string;
  children?: React.ReactNode;
  selectedTags: string[];
  handleTagSelect: (tag: string) => void;
  onClose: () => void; // Новый пропс для синхронизации с родителем
}

export default function LeftDrawerTags({
  children,
  title,
  desc,
  tags,
  selectedTags,
  handleTagSelect,
  onClose,
}: DrawerProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    if (!newOpen) {
      onClose(); // Вызываем обновление тегов при закрытии
    }
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: '100%', padding: '16px', backgroundColor: '#fff', minHeight: '100%', zIndex: 1000 }}
      role="presentation"
    >
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
            minHeight: '100%',
            backgroundColor: '#fff',
          },
        }}
      />
      <Header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={toggleDrawer(false)}
        >
          <g clipPath="url(#clip0_40000050_2170)">
            <path d="M19 11H8.83L13.41 6.41L12 5L5 12L12 19L13.41 17.59L8.83 13H19V11Z" fill="#00A3FF" />
          </g>
          <defs>
            <clipPath id="clip0_40000050_2170">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <HeaderText>
          <HeaderTitle>{title}</HeaderTitle>
          {desc && <HeaderDesc>{desc}</HeaderDesc>}
        </HeaderText>
      </Header>
      <TagBlock>
        <Title>{title}</Title>
        <TagList>
          {tags.map((tag) => (
            <Tag key={tag} selected={selectedTags.includes(tag)} onClick={() => handleTagSelect(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      </TagBlock>
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Box onClick={toggleDrawer(true)}>{children}</Box>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
