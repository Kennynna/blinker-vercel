import * as React from 'react';
import { Global } from '@emotion/react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


export default function ParticipantDrawer({ children }: any) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
          },
        }}
      />
      {children}
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      {/* Участник */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
