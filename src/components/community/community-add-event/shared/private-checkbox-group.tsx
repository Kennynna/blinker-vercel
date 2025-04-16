import { useState } from 'react';
import { PlusIcon } from '@/shared/icons/community/plus-icon';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

import { CheckBoxIcon,  } from '../../community-add-palce-steps/last-step-existing-place';
import { CheckIcon } from '../../icons/check';

const itemsData = [
  {
    id: 1,
    title: 'Открытое',
    desc: 'Увидят и могут принять участие все',
  },
  {
    id: 2,
    title: 'Закрытое',
    desc: 'Увидят все, но могут принять участие только по вашему разрешению',
  },
  {
    id: 3,
    title: 'По приглашению',
    desc: 'Увидят и могут принять участие только выбранные вами люди',
  },
];

interface PrivateCheckboxGroupProps {
  setInputValue: (value: string) => void;
}

export const PrivateCheckboxGroup = ({ setInputValue }: PrivateCheckboxGroupProps) => {
  // Массив айдишников выбранных карточек
  const [selectedItem, setSelectedItem] = useState(1);

  // Обработчик клика по карточке
  const handleSelectItem = (id: number, title: string) => {
    setSelectedItem(id);
    setInputValue(title);
  };

  // Проверяем, что хотя бы одна карточка выбрана

  return (
    <div style={{ marginBottom: '35px', marginTop: '8px' }}>
      <Wrapper>
        {itemsData.map((item) => {
          return (
            <ChooseItem key={item.id} onClick={() => handleSelectItem(item.id, item.title)}>
              <ContentWrapper>
                <TitleText>{item.title}</TitleText>
                <SeatsText>{item.desc}</SeatsText>
              </ContentWrapper>
              <StyledCheckbox
                checked={item.id === selectedItem}
                onChange={(e) => e.stopPropagation()}
                icon={<CheckBoxIcon />}
                checkedIcon={<CheckIcon />}
              />
            </ChooseItem>
          );
        })}
      </Wrapper>
    </div>
  );
};

/* ================== Стили ================== */

// Основа контейнера
const Wrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

// Карточка, которая может быть «выбранной»
const ChooseItem = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background: #f9f9f9;
  transition: background 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

// Название карточки (цвет зависит от того, выбрана ли карточка)
const TitleText = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: #424242;
`;

const SeatsText = styled.p`
  font-size: 14px;
  color: #424242;
  font-weight: 400;
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 8px;

  .MuiSvgIcon-root {
    border-radius: 50%;
  }
`;
