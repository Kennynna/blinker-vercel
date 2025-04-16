import * as React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { UserNotes } from './user-notes-and-colletions/user-notes';

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
  title: string;
  desc: string;
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  visibleContent?: React.ReactNode;
}
export default function LeftDrawerV2({ visibleContent, children, open, handleClose, title, desc }: DrawerProps) {
  const DrawerList = (
    <Box sx={{ width: '100%', padding: '9px 16px', bgcolor: 'white' }} role="presentation">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
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
          onClick={handleClose}
        >
          <g clip-path="url(#clip0_40000050_2170)">
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
          <HeaderDesc>{desc}</HeaderDesc>
        </HeaderText>
      </Header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          overflow: 'auto',
          maxHeight: '90vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      {visibleContent}
      <Drawer open={open}>{DrawerList}</Drawer>
    </Box>
  );
}
