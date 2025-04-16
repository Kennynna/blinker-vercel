'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';

import LeftDrawerV2 from '../left-drawer';
import { PlaceInCollection } from './pace-in-colletions';
import { UserNotes } from './user-notes';
import { UserNotesItem } from './user-notes-item';

export const NotesAndCollections = () => {
  const [notesOpen, setNotesOpen] = useState(false);
  const handleCloseNotesDrawer = () => {
    setNotesOpen(false);
  };
  const handleOpenNotesDrawer = () => {
    setNotesOpen(true);
  };

  const [PlaceCollectionsOpen, setPlaceCollectionsOpen] = useState(false);
  const handleClosePlaceCollectionsDrawer = () => {
    setPlaceCollectionsOpen(false);
  };
  const handleOpenPlaceCollectionsDrawer = () => {
    setPlaceCollectionsOpen(true);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '16px', bgcolor: '#fff' }}>
      {/* Drawer с Заметками */}
      <LeftDrawerV2
        open={notesOpen}
        handleClose={handleCloseNotesDrawer}
        title="Заметки пользователей"
        desc="Ptizza"
        visibleContent={<UserNotes openDrawer={handleOpenNotesDrawer} />}
      >
        <UserNotesItem />
        <UserNotesItem />
        <UserNotesItem />
        <UserNotesItem />
        <UserNotesItem />
        <UserNotesItem />
        <UserNotesItem />
        <UserNotesItem />
      </LeftDrawerV2>
    </Box>
  );
};

const Tabs = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  gap: 12px;
`;
interface Tabs {
  index: number;
  activeTab: number;
}
const TabsText = styled.p<Tabs>`
  color: ${(props) => (props.index === props.activeTab ? '#424242' : '#B7AEAE')};
`;

export function PlaceInGroupCollections({ children }: { children?: React.ReactNode }) {
  const tabs = ['Все', 'Путеводители', 'Группы'];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Tabs>
        {tabs.map((text, index) => (
          <TabsText index={index} activeTab={activeTab} onClick={() => setActiveTab(index)}>
            {text}
          </TabsText>
        ))}
      </Tabs>
      {children}
    </>
  );
}

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  views: string;
  location: string;
  tag: string;
}

export const CardGroup: React.FC<CardProps> = ({ image, title, subtitle, views, location, tag }) => {
  return (
    <CardContainer>
      <Image src={image} alt="Community" />
      <CardContent>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle}{' '}
          {views && (
            <Views>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0_2065_178675)">
                  <path
                    d="M10.6665 7.83301C11.7732 7.83301 12.6598 6.93967 12.6598 5.83301C12.6598 4.72634 11.7732 3.83301 10.6665 3.83301C9.55984 3.83301 8.6665 4.72634 8.6665 5.83301C8.6665 6.93967 9.55984 7.83301 10.6665 7.83301ZM5.33317 7.83301C6.43984 7.83301 7.3265 6.93967 7.3265 5.83301C7.3265 4.72634 6.43984 3.83301 5.33317 3.83301C4.2265 3.83301 3.33317 4.72634 3.33317 5.83301C3.33317 6.93967 4.2265 7.83301 5.33317 7.83301ZM5.33317 9.16634C3.77984 9.16634 0.666504 9.94634 0.666504 11.4997V13.1663H9.99984V11.4997C9.99984 9.94634 6.8865 9.16634 5.33317 9.16634ZM10.6665 9.16634C10.4732 9.16634 10.2532 9.17967 10.0198 9.19967C10.7932 9.75967 11.3332 10.513 11.3332 11.4997V13.1663H15.3332V11.4997C15.3332 9.94634 12.2198 9.16634 10.6665 9.16634Z"
                    fill="#958A8A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2065_178675">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              {views}
            </Views>
          )}
        </Subtitle>
        <Location>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <g clip-path="url(#clip0_40000070_63021)">
              <path
                d="M1.68657 13.5997L2.5799 13.973V7.95301L0.959903 11.8597C0.68657 12.5397 1.01324 13.3197 1.68657 13.5997ZM14.6866 11.133L11.3799 3.15301C11.1732 2.65301 10.6866 2.34634 10.1732 2.33301C9.9999 2.33301 9.8199 2.35967 9.64657 2.43301L4.73324 4.46634C4.23324 4.67301 3.92657 5.15301 3.91324 5.66634C3.90657 5.84634 3.9399 6.02634 4.01324 6.19967L7.3199 14.1797C7.52657 14.6863 8.0199 14.993 8.5399 14.9997C8.71324 14.9997 8.88657 14.9663 9.05324 14.8997L13.9599 12.8663C14.6399 12.5863 14.9666 11.8063 14.6866 11.133ZM3.9199 13.6663C3.9199 14.3997 4.5199 14.9997 5.25324 14.9997H6.2199L3.9199 9.43967V13.6663Z"
                fill="#424242"
              />
            </g>
            <defs>
              <clipPath id="clip0_40000070_63021">
                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>{' '}
          {location}
        </Location>
      </CardContent>
    </CardContainer>
  );
};

// Стили компонентов
const CardContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #fff;
  width: 100%;
`;

const Image = styled.img`
  margin: 0;

  width: 84px;
  height: 84px;
  border-radius: 8px;
  object-fit: cover;
`;

const CardContent = styled.div`
  margin: 0;

  display: flex;
  flex-direction: column;
`;

const Tag = styled.span`
  margin: 0;

  background: rgba(44, 148, 234, 0.15);
  color: #2c94ea;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 12px;
  display: inline-block;
  max-width: fit-content;
`;

const Title = styled.h3`
  margin: 0;

  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin: 0;

  font-size: 14px;
  color: #b7aeae;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Views = styled.span`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 1px;
  color: #9e9e9e;
`;

const Location = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #424242;
  font-weight: 500;
  gap: 2px;
`;

const TagGuide = styled.span`
  margin: 0;

  background: rgba(255, 136, 0, 0.15);
  color: #cf9332;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 12px;
  display: inline-block;
  max-width: fit-content;
`;

export const CardGuide: React.FC<CardProps> = ({ image, title, subtitle, views, location, tag }) => {
  return (
    <CardContainer>
      <Image src={image} alt="Community" />
      <CardContent>
        <TagGuide>{tag}</TagGuide>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle}{' '}
          {views && (
            <Views>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0_2065_178675)">
                  <path
                    d="M10.6665 7.83301C11.7732 7.83301 12.6598 6.93967 12.6598 5.83301C12.6598 4.72634 11.7732 3.83301 10.6665 3.83301C9.55984 3.83301 8.6665 4.72634 8.6665 5.83301C8.6665 6.93967 9.55984 7.83301 10.6665 7.83301ZM5.33317 7.83301C6.43984 7.83301 7.3265 6.93967 7.3265 5.83301C7.3265 4.72634 6.43984 3.83301 5.33317 3.83301C4.2265 3.83301 3.33317 4.72634 3.33317 5.83301C3.33317 6.93967 4.2265 7.83301 5.33317 7.83301ZM5.33317 9.16634C3.77984 9.16634 0.666504 9.94634 0.666504 11.4997V13.1663H9.99984V11.4997C9.99984 9.94634 6.8865 9.16634 5.33317 9.16634ZM10.6665 9.16634C10.4732 9.16634 10.2532 9.17967 10.0198 9.19967C10.7932 9.75967 11.3332 10.513 11.3332 11.4997V13.1663H15.3332V11.4997C15.3332 9.94634 12.2198 9.16634 10.6665 9.16634Z"
                    fill="#958A8A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2065_178675">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              {views}
            </Views>
          )}
        </Subtitle>
        <Location>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <g clip-path="url(#clip0_40000070_63021)">
              <path
                d="M1.68657 13.5997L2.5799 13.973V7.95301L0.959903 11.8597C0.68657 12.5397 1.01324 13.3197 1.68657 13.5997ZM14.6866 11.133L11.3799 3.15301C11.1732 2.65301 10.6866 2.34634 10.1732 2.33301C9.9999 2.33301 9.8199 2.35967 9.64657 2.43301L4.73324 4.46634C4.23324 4.67301 3.92657 5.15301 3.91324 5.66634C3.90657 5.84634 3.9399 6.02634 4.01324 6.19967L7.3199 14.1797C7.52657 14.6863 8.0199 14.993 8.5399 14.9997C8.71324 14.9997 8.88657 14.9663 9.05324 14.8997L13.9599 12.8663C14.6399 12.5863 14.9666 11.8063 14.6866 11.133ZM3.9199 13.6663C3.9199 14.3997 4.5199 14.9997 5.25324 14.9997H6.2199L3.9199 9.43967V13.6663Z"
                fill="#424242"
              />
            </g>
            <defs>
              <clipPath id="clip0_40000070_63021">
                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>{' '}
          {location}
        </Location>
      </CardContent>
    </CardContainer>
  );
};
