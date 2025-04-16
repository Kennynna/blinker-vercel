import React from 'react';
import { EditIcon } from '@/shared/icons/community/edit-icon';
import { ArrowLeft, SaveIcon, SaveQuantityIcon, ShareIcon } from '@/shared/icons/marker-drawer';
import { Toast } from '@/shared/toast';
import styled from '@emotion/styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#fff',
    },
  },
});

interface IconWrapperProps {
  isScroll: boolean;
}
const IconsWrapper = styled.div<IconWrapperProps>`
pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  position: ${(props) => (props.isScroll ? 'fixed' : 'static')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isScroll ? '56px' : '')}
  z-index: 1000;
  background-color: ${(props) => (props.isScroll ? 'white' : '')};
  padding: ${(props) => (props.isScroll ? '8px 4px' : '')}
`;

const LeftIconSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PlaceName = styled.h2<PlacementProps>`
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: ${(props) => (props.isScroll ? '16px' : '1.5rem')};
  color: ${(props) => (props.isScroll ? '#424242' : '#fff')};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const TopIconsCommunity = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <IconsWrapper isScroll={isScrolled}>
      <div>
        <ArrowLeft color="#fff" isScroll={isScrolled} />
      </div>
      {isScrolled && <PlaceName isScroll={isScrolled}>Community</PlaceName>}
      <LeftIconSection>
        <ThemeProvider theme={theme}>
          <Toast>
            <ShareIcon color="#fff" isScroll={isScrolled} />
          </Toast>
        </ThemeProvider>
        <EditIcon color="#fff" isScroll={isScrolled} />
      </LeftIconSection>
    </IconsWrapper>
  );
};
