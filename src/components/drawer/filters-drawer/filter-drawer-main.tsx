import React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { FilterDrawerItems } from './filter-drawer';

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface DrawerProps {
  children: React.ReactNode;
  sx?: object;
}

export default function MainFiltersDrawer({ children, sx }: DrawerProps) {
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
          },
        }}
      />
      <FilterDrawerItems closeDrawer={toggleDrawer(false)} />
    </Box>
  );

  return (
    <div>
      <IconWrapper sx={{ ...sx }} onClick={toggleDrawer(true)}>
        {children}
      </IconWrapper>
      <Drawer open={open}>{DrawerList}</Drawer>
    </div>
  );
}
