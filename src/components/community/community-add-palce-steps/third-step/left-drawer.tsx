import * as React from 'react';
import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import { Global } from '@emotion/react';
import { TextareaAutosize } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/system';



import ModalSaveText from '../../shared/modal-save-text';
import { Button, ButtonBlock } from './third-step-new-card-place';


const Textarea = styled(TextareaAutosize)(
  `
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
border-radius: 16px;
background-color: #F9F9F9;
color: #424242;
border: none;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
  /* firefox */
  &:focus-visible {
    outline: 0;
  }
    &:placeholder {
      color:rgb(0, 0, 0);
    }
`
);


interface LeftSideDrawerProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder: string;
  title: string;
  children?: React.ReactNode;
  childrenDrawer?: React.ReactNode;
  limit?: number;
}

export default function LeftSideDrawer({
  inputValue,
  setInputValue,
  placeholder,
  title,
  children,
  childrenDrawer,
  limit,
}: LeftSideDrawerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > limit || event.target.value.length > 100) {
      return;
    }
    setInputValue(event.target.value);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setIsOpen(open);
  };

  const handleCloseAndReset: () => void = () => {
    setIsOpen(false);
    setInputValue('');
  };

  const handleSaveText: () => void = () => {
    setIsOpen(false);
  };

  const drawerContent = (
    <Box sx={{ width: '100%', backgroundColor: '#fff', minHeight: '100%' }} role="presentation">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
            backgroundColor: '#fff !important',
            padding: '16px',
            color: '#424242',
          },
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '16px',
          fontWeight: 700,
          justifyContent: 'space-between',
        }}
      >
        {inputValue?.length === 0 ? (
          <div onClick={handleCloseAndReset}>
            <ArrowLeftIcon />
          </div>
        ) : (
          <ModalSaveText handleCloseAndReset={handleCloseAndReset}>
            <ArrowLeftIcon />
          </ModalSaveText>
        )}
        <p style={{ flex: 1, textAlign: 'center' }}>{title}</p>
        {childrenDrawer}
      </Box>

      <Box
        sx={{
          marginTop: '54px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          color: '#958A8A',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        <p>{title}</p>
        <p>{inputValue?.length ?? 0} из 100</p>
      </Box>
      <Textarea placeholder={placeholder} value={inputValue} onChange={handleChange} />
      <ButtonBlock onClick={handleSaveText}>
        <Button>
          <p>Сохранить</p>
        </Button>
      </ButtonBlock>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer(true)}>{children}</div>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          backgroundColor: '#fff',
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
}
