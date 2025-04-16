import React, { useState } from 'react';
import styled from '@emotion/styled';

const Block = styled.div`
  border-radius: 16px;
  display: flex;
  padding: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 14px;
  color: #424242;
  font-weight: 600;
  margin: 0;
`;

const Desc = styled.p<{ $fullText: boolean }>`
  display: ${({ $fullText }) => ($fullText ? 'block' : '-webkit-box')};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $fullText }) => ($fullText ? 'none' : 2)};
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  color: #424242;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  margin-top: 4px;
`;

const More = styled.button`
  margin: 0;
  color: #00a3ff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-top: 8px;
`;

const TextBlock = styled.div`
  width: 100%;
`;

interface MapItemDetailsProps {
  description: string;
  handleShareClick?: () => void;
}

export const MarkerDrawerText: React.FC<MapItemDetailsProps> = ({ description, handleShareClick }) => {
  const [fullText, setFullText] = useState(false);

  const toggleFullText = () => {
    setFullText(!fullText);
  };

  return (
    <Block>
      <TextBlock>
        <Desc $fullText={fullText} onClick={handleShareClick}>
          {description}
        </Desc>
        <More onClick={toggleFullText}>{fullText ? 'Свернуть' : 'Еще'}</More>
      </TextBlock>
    </Block>
  );
};
