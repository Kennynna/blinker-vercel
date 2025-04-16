import React from 'react';
import { CollectionsIcon } from '@/shared/icons';
import styled from '@emotion/styled';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';

const Block = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Contents = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Text = styled.p`
  color: #424242;
  font-size: 14px;
  font-weight: 600;
`;

export const Title = styled(Text)``;
export const PlaceInCollection = ({openDrawer}: {openDrawer?: () => void} ) => {
  return (
    <Block onClick={openDrawer}>
      <Contents>
        <CollectionsIcon />
        <Text>Место в подборках сообществ</Text>
      </Contents>
      <ArrowRightV2 color="#424242" />
    </Block>
  );
};
