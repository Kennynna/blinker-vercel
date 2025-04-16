import React from 'react';
import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import {  EditIconV2 } from '@/shared/icons/community/edit-icon';
import { PlusIcon } from '@/shared/icons/community/plus-icon';
import { Global } from '@emotion/react';
import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { InfoIconBlue } from '../icons/info';
import { NotesAddInput } from './notes-add-input';



interface DrawerProps {
  sx?: object;
  notesValue: string;
}

export default function NotesAddLeftDrawer({ sx, notesValue }: DrawerProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '100%', height: '100%', overflowY: 'auto' }} role="presentation">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
            minHeight: '100%',
            background: 'white !important',
            padding: '16px',
          },
        }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          fontWeight: 700,
          justifyContent: 'space-between',
        }}
      >
        <ArrowLeftIcon closeDrawer={toggleDrawer(false)} />
        <p style={{ flex: 1, textAlign: 'center', color: '#424242', fontSize: '16px' }}>Заметка</p>
        <InfoIconBlue />
      </Box>
      <NotesAddInput closeDrawer={toggleDrawer(false)} />
    </Box>
  );

  return (
    <div>
      <AddNoteButton onClick={toggleDrawer(true)}>
        {notesValue.length > 0 ? <EditIconV2 color="#424242" /> : <PlusIcon />}
        {notesValue.length > 0 ? 'Редактировать заметку' : 'Добавить заметку'}
      </AddNoteButton>
      <Drawer open={open}>{DrawerList}</Drawer>
    </div>
  );
}

const AddNoteButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px; /* отступ между иконкой и текстом */
  padding: 12px 24px; /* внутренние отступы кнопки */
  border: none; /* убираем стандартную рамку */
  border-radius: 39px; /* нужное скругление */
  background: #fff; /* фон кнопки */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05); /* тень */
  cursor: pointer;
  font-size: 14px;
  color: #424242;
  font-weight: 600;
`;
