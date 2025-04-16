import * as React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import { Global } from '@emotion/react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/system';

import { EventCart } from './event-card';
import { InviteEventCart } from './invite-event-card';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const BaseTab = styled(Tab)`
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  padding: 12px 16px;
  color: #958a8a;
  display: flex;
  &:focus {
    color: red;
    background-color: #f9f9f9;
    border-radius: 32px;
    color: #424242;
  }
  &.Mui-selected {
    color: #424242;
  }
`;

const Table = styled(Tabs)({
  '& .MuiTabs-flexContainer': {
    gap: '4px !important', // Устанавливаем gap между вкладками
  },
});

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '16px' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function TabEvents() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', outline: 'none', mt: '8px' }}>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
          },
          '.mui-1ues40t-MuiTabs-indicator': {
            display: 'none',
          },
        }}
      />
      <Box>
        <Table value={value} onChange={handleChange} aria-label="basic tabs example" className="MuiTab">
          <BaseTab label="Предстоящие" {...a11yProps(0)} />
          <BaseTab label="Предлагаемые" {...a11yProps(1)} />
          <BaseTab label="Прошедшие" {...a11yProps(2)} />
        </Table>
      </Box>

      {/* Предстоящие */}

      <CustomTabPanel value={value} index={0}>
        <EventCart />
        <EventCart />
        <EventCart />
        <Button>
          Все 13 событий <ArrowRightV2 color="#424242" />
        </Button>
      </CustomTabPanel>

      {/* Предлагаемые */}
      <CustomTabPanel value={value} index={1}>
        <InviteEventCart />
      </CustomTabPanel>

      {/* Прошедшие */}
      <CustomTabPanel value={value} index={2}>
        <EventCart />
        <EventCart />
        <EventCart />
        <Button>
          Все 13 событий <ArrowRightV2 color="#424242" />
        </Button>
      </CustomTabPanel>
    </Box>
  );
}

const Button = styled('button')`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  border-radius: 32px;
  background: #f9f9f9;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  color: #424242;
  font-weight: 600;
  font-size: 14px;
`;
