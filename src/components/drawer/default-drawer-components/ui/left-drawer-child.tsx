import * as React from 'react';
import { useEffect } from 'react';
import { Global } from '@emotion/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import styled from '@mui/system/styled';

import { HeaderDrawer } from '@/components/community-create/header-drawer';

const TriggerButton = styled(Button)`
  padding: 12px 16px;
  border-radius: 39px;
  background: #00a3ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;

const TriggerBox = styled(Box)``;

interface DrawerProps {
  children: React.ReactNode;
  sx?: object;
  buttonText?: string;
  step?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}

export default function LeftDrawerChild({ children, sx, buttonText, step, setStep }: DrawerProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (step === 0) {
      setOpen(false);
      setStep && setStep(1);
    }
  }, [step]);
  const DrawerList = (
    <Box sx={{ width: '100%' }} role="presentation">
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
      <TriggerButton sx={{ ...sx }} onClick={toggleDrawer(true)}>
        {buttonText}
      </TriggerButton>
      <Drawer open={open}>{DrawerList}</Drawer>
    </div>
  );
}

interface DrawerPropsV2 {
  drawerContent: React.ReactNode;
  sx?: object;
  drawerOpenComponent: React.ReactNode;
  step?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}

export function LeftDrawerChildV2({ drawerContent, sx, drawerOpenComponent, step, setStep }: DrawerPropsV2) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (step === 0) {
      setOpen(false);
      setStep && setStep(1);
    }
  }, [step]);
  const DrawerList = (
    <Box sx={{ width: '100%' }} role="presentation">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
            height: '100%',
            background: 'white !important',
            color: '#424242',
          },
        }}
      />
      <HeaderDrawer drawerClose={toggleDrawer(false)} />
      {drawerContent}
    </Box>
  );

  return (
    <div>
      <TriggerBox sx={{ ...sx }} onClick={toggleDrawer(true)}>
        {drawerOpenComponent}
      </TriggerBox>
      <Drawer open={open}>{DrawerList}</Drawer>
    </div>
  );
}
