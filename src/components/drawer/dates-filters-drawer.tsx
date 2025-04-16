'use client';

import * as React from 'react';
import { Global } from '@emotion/react';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';



import { DateFilters, TypeFilters } from './date-filters';


const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  toggleDrawerOpen: boolean;
  onClose: () => void;
}

const Root = styled('div')({
  height: '100%',
  backgroundColor: grey[100],
  borderRadius: '16px 16px 0px 0px',
});

const StyledBox = styled('div')({
  backgroundColor: '#fff',
  borderRadius: '16px 16px 0px 0px',
});



export function DatesFilterDrawer(props: Props) {
  const { window, toggleDrawerOpen, onClose } = props; // Add onClose here
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(toggleDrawerOpen);
  }, [toggleDrawerOpen]);



  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (!newOpen) {
      onClose(); // Call onClose when the drawer is closed
    }
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
            borderRadius: '16px 16px 0px 0px',
          },
          '.MuiDrawer-root>.MuiPaper-root':{
            height: '600px',
          }
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(toggleDrawerOpen)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox sx={{ px: 2, py: 2, height: '100%', overflow: 'auto', bgcolor: '#FFFFFF' }}>
          <DateFilters onClose={toggleDrawer(false)}/>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}




export function TypeFilterDrawer(props: Props) {
  const { window, toggleDrawerOpen, onClose } = props; // Add onClose here
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(toggleDrawerOpen);
  }, [toggleDrawerOpen]);



  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (!newOpen) {
      onClose(); // Call onClose when the drawer is closed
    }
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
            borderRadius: '16px 16px 0px 0px',
          },
          '.MuiDrawer-root>.MuiPaper-root':{
            height: '600px',
          }
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(toggleDrawerOpen)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox sx={{ px: 2, py: 2, height: '100%', overflow: 'auto', bgcolor: '#FFFFFF' }}>
          <TypeFilters onClose={toggleDrawer(false)}/>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
