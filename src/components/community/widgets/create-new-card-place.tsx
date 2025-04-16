import { CreateCardIcon } from '@/shared/icons/community/create-card-icon';
import { PlusIcon } from '@/shared/icons/community/plus-icon';
import styled from '@emotion/styled';

export const CreateCard = ({ createNewCard }: { createNewCard?: () => void }) => {
  return (
    <CreateCardWrapper onClick={createNewCard}>
      <UpperContent>
        <ImgDiv>
          <CreateCardIcon />
        </ImgDiv>
        <div>
          <TextGray>Ресторан</TextGray>
          <TextBlack>Gusi введено в строке</TextBlack>
          <TextGray>ул. Северная 5, Город</TextGray>
        </div>
      </UpperContent>
      <AddNoteButton>
        <PlusIcon />
        Создать новую карточку
      </AddNoteButton>
    </CreateCardWrapper>
  );
};
const UpperContent = styled.div`
  align-self: start;
  display: flex;
  align-items: center;
  gap: 13px;
`;

const CreateCardWrapper = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
  gap: 12px;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  background: #e1e1e1;
  border-radius: 16px;
`;
const TextGray = styled.p`
  color: #958a8a;
  font-size: 14px;
  font-weight: 600;
`;

const TextBlack = styled.p`
  color: #424242;
  font-size: 16px;
  font-weight: 700;
`;
const AddNoteButton = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px; /* отступ между иконкой и текстом */
  padding: 12px 24px; /* внутренние отступы кнопки */
  border: none; /* убираем стандартную рамку */
  border-radius: 39px; /* нужное скругление */
  background: #fff; /* фон кнопки */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05); /* тень */
  cursor: pointer;
  font-size: 14px;
  color: #424242;
  font-weight: 600;
`;
