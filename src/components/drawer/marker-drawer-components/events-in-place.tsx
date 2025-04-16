import * as React from 'react';
import { ArrowLeft } from '@/shared/icons/marker-drawer';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import { Global } from '@emotion/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

export default function LeftDrawer({ children }: any) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '100%', }} role="presentation" onClick={toggleDrawer(false)}>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
            height: '100%',
            background: 'white !important',
          },
        }}
      />
      {children}
    </Box>
  );

  return (
    <div>
      <Button
        sx={{
          color: ' #424242',
          fontWeight: '600',
          width: '100%',
        }}
      >
        11 событий места
        <ArrowRightV2 color="#424242" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
