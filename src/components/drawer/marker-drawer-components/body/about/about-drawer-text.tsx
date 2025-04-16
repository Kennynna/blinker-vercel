'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Tag } from '@/components/community/constants';

import { MarkerDrawerText } from '../about-drawer-text';
import PlaceDescDrawer from '../desc-drawer';
import { EventTags, Tags } from '../tags';
import { Title } from './title';

interface AboutDrawerTextPlace {
  description: string;
  tags: Tag[];
}
export const AboutDrawerText = ({ description, tags }: AboutDrawerTextPlace) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleShareClick = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Box sx={{ marginTop: '24px' }}>
      <Title title="О месте" id="about" />
      {tags && tags.length > 0 && <Tags sx={{ marginTop: '16px', marginBottom: '12px' }} tags={tags} />}
      <MarkerDrawerText description={description} handleShareClick={handleShareClick} />
      <PlaceDescDrawer open={isDrawerOpen} handleCloseDrawer={handleCloseDrawer} desc={description} />
    </Box>
  );
};

interface AboutDrawerTextEvent {
  description: string;
  tags: any;
}

export const AboutDrawerTextEvent = ({ description, tags }: AboutDrawerTextEvent) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleShareClick = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Box sx={{ marginTop: '24px' }}>
      <Title title="О Событии" id="about" />
      {tags && tags.length > 0 && <EventTags sx={{ marginTop: '16px', marginBottom: '12px' }} tags={tags} />}
      <MarkerDrawerText description={description} handleShareClick={handleShareClick} />
      <PlaceDescDrawer open={isDrawerOpen} handleCloseDrawer={handleCloseDrawer} desc={description} />
    </Box>
  );
};
