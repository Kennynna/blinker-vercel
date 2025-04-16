import styled from "@emotion/styled";
import { useState } from "react";

const Block = styled.div`
  margin: 0;
  padding: 1rem;
  border-radius: 16px;
  background: #f9f9f9;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  gap: 8px;
  margin-top: 12px;
`;
const ImgWrapper = styled.div`
  position: relative;
  margin: 0;
  height: 1.5rem;
`;
const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.5rem;
  left: 0;
`;
export const Title = styled.p`
  margin: 0;

  color: #424242;
  font-size: 16px;
  font-weight: 700;
`;
const Desc = styled.p`
  margin: 0;

  color: #958a8a;
  font-size: 14px;
  font-weight: 600;
`;

interface FulltextProps {
  fullText: boolean;
}
const RecommendedText = styled.p<FulltextProps>`
  margin: 0;
  overflow: hidden;
  color: #424242;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => (props.fullText ? '12' : '5')};
`;

const Span = styled.span`
  color: #00a3ff;
  font-size: 14px;
  font-weight: 600;
`;

export function UserNotesItem() {
  const [fullText, setFullText] = useState(false);
  return (
    <Block>
      <LeftSection>
        <RecommendedText fullText={fullText}>
          Попробуйте их фирменное блюдо, просто супер! Какой то текст не полностью Попробуйте их фирменное блюдо,
          псупер! Какой то текст не полностьюросто супер! Какой то текст не полностью Попробуйте их фирменное блюдо,
          просто супер! Какой то текст не полностью Попробуйте их фирменное блюдо, псупер! Какой то текст не
          полностьюросто супер! Какой то текст не полностью
          <br />
        </RecommendedText>
        <Span onClick={() => setFullText(!fullText)}>{fullText ? 'Свернуть' : 'Еще'}</Span>
        <ImgBlock>
          <ImgWrapper>
            <Img src="https://cs14.pikabu.ru/avatars/3400/x3400884-1273444445.png" style={{ zIndex: 3 }} />
          </ImgWrapper>
          <Desc>Arianna Name · Название сообщества</Desc>
        </ImgBlock>
      </LeftSection>
    </Block>
  );
}


