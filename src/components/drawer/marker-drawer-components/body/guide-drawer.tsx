import * as React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

export default function GuideDrawer({ children }: any) {
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
      {/* Гид */}
      <Guide toggleDrawer={toggleDrawer(true)} name="Название гида" />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}

const Block = styled.div`
  margin: 0;
  margin-top: 8px;
  border-radius: 16px;
  background: #f9f9f9;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  width: 100%;
`;

const Left = styled.div`
  margin: 0;
  overflow: hidden;
  border-radius: 16px;
  flex-shrink: 0;
`;

const Right = styled.div`
  align-self: start;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const GuideTitle = styled.p`
  margin: 0;
  text-align: center;
  padding: 2px 8px;
  color: #cf9332;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  background: rgba(255, 136, 0, 0.15);
`;

const GuideName = styled.p`
  margin: 0;
  color: #424242;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 700;
`;

const GuidePlace = styled.p`
  margin: 0;
  color: #958a8a;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

const Img = styled.img`
  margin: 0;
  width: 84px;
  height: 84px;
  border-radius: 16px;
  object-fit: cover;
`;

const LeftFlex = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  min-width: 0;
`;

const ArrowWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

interface MarkerItemContactsProps {
  name?: string;
  toggleDrawer: () => void;
}
export function Guide({ toggleDrawer, name }: MarkerItemContactsProps) {
  return (
    <Block onClick={toggleDrawer}>
      <LeftFlex>
        <Left>
          <Img
            src="https://avatars.mds.yandex.net/i?id=f24c113322751ad42fb19bc8bd7df458_sr-8963933-images-thumbs&n=13"
            alt="Логотип"
          />
        </Left>
        <Right>
          <GuideTitle>Путеводитель</GuideTitle>
          <GuideName>{name}</GuideName>
          <GuidePlace>20 мест · 3 подборки</GuidePlace>
        </Right>
      </LeftFlex>
      <ArrowWrapper>
        <ArrowRightV2 color="#424242" />
      </ArrowWrapper>
    </Block>
  );
}
