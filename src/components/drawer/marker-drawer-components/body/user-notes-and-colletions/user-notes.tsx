import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';

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

const RecommendedText = styled.p`
  margin: 0;
  overflow: hidden;
  color: #424242;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  align-self: stretch;
  margin-bottom: 8px;
`;

export function UserNotes({ openDrawer }: { openDrawer: () => void }) {
  return (
    <Block onClick={openDrawer}>
      <LeftSection>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flex: 1 }}>
          <Title>Заметки пользователей</Title>
          <ArrowRightV2 color="#424242" />
        </div>
        <RecommendedText>
          Попробуйте их фирменное блюдо, просто супер! Какой то текст не полностью Попробуйте их фирменное блюдо,
          псупер! Какой то текст не полностьюросто супер! Какой то текст не полностью
        </RecommendedText>
        <ImgBlock>
          <ImgWrapper>
            <Img src="https://cs14.pikabu.ru/avatars/3400/x3400884-1273444445.png" style={{ zIndex: 3 }} />
          </ImgWrapper>
          <Desc>Arianna Name · Гид</Desc>
        </ImgBlock>
      </LeftSection>
    </Block>
  );
}
