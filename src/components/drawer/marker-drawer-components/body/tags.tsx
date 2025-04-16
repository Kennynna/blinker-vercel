import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@mui/system/styled';

const Block = styled(Box)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  padding: 4px 0;
  min-height: 40px;
`;

// const Tag = styled.p`
//   margin: 0;
//   height: 24px;
//   border-radius: 39px;
//   border: 1px solid #e9e9e9;
//   color: #958a8a;
//   padding: 4px 12px;
//   font-size: 14px;
//   font-weight: 600;
//   display: flex;
//   align-items: center;
// `;

const Tag = styled(Typography)`
  margin: 0;
  height: 24px;
  border-radius: 39px;
  color: #424242;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
`;
export const Tags = ({ sx, tags }: any) => {
  return (
    <Block sx={{ ...sx }}>
      {tags && tags.map((tag: any) => <Tag key={tag.definition_id}>{tag.string_representation}</Tag>)}
    </Block>
  );
};

export const EventTags = ({ sx, tags }: any) => {
  return (
    <Block sx={{ ...sx }}>
      {tags && tags.map((tag: any) => <Tag key={tag.definition_id}>{tag.string_representation}</Tag>)}
    </Block>
  );
};
