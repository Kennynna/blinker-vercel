import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

import { Title } from '../drawer/marker-drawer-components/body/about/title';

const Wrapper = styled.div`
  padding: 16px;
  border-radius: 16px;
  background: #f9f9f9;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Text = styled.p`
  flex: 1;
  color: #424242;
  font-size: 16px;
  font-weight: 700;
`;

export const CommunityAuthor = () => {
  return (
    <>
      <Title title="Создатель группы" />
      <Wrapper>
        <Avatar sx={{ bgcolor: '#958A8A', width: '64px', height: '64px' }} />
        <Text>Ваше имя</Text>
        <ArrowRightV2 color="#424242" />
      </Wrapper>
    </>
  );
};
