import React from 'react';
import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';



import { EventCard } from '../event-card';
import { FAKEEVENT } from '../events-tab-content/event-content';


const ShowList = styled.div`
  width: 100%;
  border-radius: 39px;
  background: #f9f9f9;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
  p {
    color: #424242;
    font-size: 14px;
    font-weight: 600;
  }
`;

const EventsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 16px;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  padding: 8px 4px;
  background: #fff;
  text-align: center;
  top: 0;
  left: 0;
  z-index: 1;
  h3 {
    color: #424242;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  span {
    color: #958a8a;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }
`;

const ArrowWrapper = styled.div`
  position: fixed;
  z-index: 2;
  left: 16px;
  top: 16px;
`;

interface LeftSideDrawerProps {
  eventsData: any;
}

export default function LeftDrawerEventList({ eventsData }: LeftSideDrawerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setIsOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: '100%', backgroundColor: '#fff', minHeight: '100%' }} role="presentation">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
            height: '100%',
            backgroundColor: '#fff !important',
            padding: '16px',
            color: '#424242',
            overflow: 'auto',
          },
        }}
      />
      <ArrowWrapper onClick={toggleDrawer(false)}>
        <ArrowLeftIcon />
      </ArrowWrapper>
      <Header>
        <h3>События</h3>
        <span>13 июля · Сегодня</span>
      </Header>
      <EventsWrapper>
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventsWrapper>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer(true)}>
        <ShowList>
          <p>Показать все</p>
          <ArrowRightV2 color="#424242" />
        </ShowList>
      </div>
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
