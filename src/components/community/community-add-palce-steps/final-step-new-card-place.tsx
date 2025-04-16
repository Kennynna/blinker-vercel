import { useState } from 'react';
import { PlusIcon } from '@/shared/icons/community/plus-icon';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

import { Title } from '@/components/drawer/marker-drawer-components/body/about/title';

import { FixedButton } from '../community-add-event/shared/fixed-button';
import { CompassIcon } from '../icons/compass';
import { SpaghettiIcon } from '../icons/spaghetti';
import { WomanDancingIcon } from '../icons/woman-dancing';

const itemsData = [
  {
    id: 1,
    icon: <SpaghettiIcon />,
    title: 'Разное',
    desc: '2 места',
  },
  {
    id: 2,
    icon: <WomanDancingIcon />,
    title: 'Другое',
    desc: '5 мест',
  },
  {
    id: 3,
    icon: <CompassIcon />,
    title: 'Название 1',
    desc: '1 место',
  },
  {
    id: 4,
    icon: <CompassIcon />,
    title: 'Кастомная 3',
    desc: 'Необычный современный ',
  },
  {
    id: 5,
    icon: <CompassIcon />,
    title: 'Кастомная 3',
    desc: 'Необычный современный ',
  },
  {
    id: 6,
    icon: <CompassIcon />,
    title: 'Кастомная 3',
    desc: 'Необычный современный ',
  },
  {
    id: 7,
    icon: <CompassIcon />,
    title: 'Кастомная 3',
    desc: 'Необычный современный ',
  },
];

export const FinalStepNewCardPlace = () => {
  // Массив айдишников выбранных карточек
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { closeCommunityDrawer, openToast, setCurrentPlace, setToastMessage } = useStepStore();

  function handleCloseDrawers() {
    closeCommunityDrawer();
    setToastMessage('Место добавлено');
    openToast();
    setCurrentPlace(null);
  }

  // Обработчик клика по карточке
  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) => {
      // Если айди уже есть в массиве, убираем его (снимаем выбор)
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      }
      // Если нет — добавляем
      return [...prev, id];
    });
  };

  // Проверяем, что хотя бы одна карточка выбрана
  const isAnythingSelected = selectedItems.length > 0;

  return (
    <div style={{ marginBottom: '60px', marginTop: '8px' }}>
      <Title title="Куда хотите добавить" styles={{ textAlign: 'center' }} />
      <Wrapper>
        {itemsData.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          return (
            <ChooseItem key={item.id} onClick={() => handleSelectItem(item.id)} selected={isSelected}>
              <IconWrapper>{item.icon}</IconWrapper>
              <ContentWrapper>
                <TitleText>{item.title}</TitleText>
                <SeatsText>{item.desc}</SeatsText>
              </ContentWrapper>
              <StyledCheckbox
                checked={isSelected}
                onChange={(e) => e.stopPropagation()}
                icon={<CheckBoxIcon />}
                checkedIcon={<CheckIcon />}
              />
            </ChooseItem>
          );
        })}

        {/* «Создать подборку» – как в оригинале, не завязан на выборе */}
        <ButtonAddCollection>
          <PlusIcon /> Создать подборку
        </ButtonAddCollection>
      </Wrapper>

      <FixedButton text="Выбрать" onClick={handleCloseDrawers} disabled={!isAnythingSelected} />
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
const ChooseItem = styled.div<{ selected: boolean }>`
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

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

// Название карточки (цвет зависит от того, выбрана ли карточка)
const TitleText = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
`;

const SeatsText = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 4px 0 0;
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 8px;

  .MuiSvgIcon-root {
    border-radius: 50%;
  }
`;

// «Создать подборку» – не зависит от выбора
const ButtonAddCollection = styled.button`
  color: #424242;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 16px;
  border-radius: 39px;
  background: #f9f9f9;
  border: none;
`;

const BgIcon = styled.div`
  border-radius: 39px;
  border: 1px solid #b7aeae;
  background: #fff;
  width: 24px;
  height: 24px;
`;

export const CheckBoxIcon = () => {
  return <BgIcon></BgIcon>;
};

const BgIconBlack = styled.div`
  border-radius: 32px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
  width: 24px;
  height: 24px;
`;

export const CheckBoxIconBlack = () => {
  return <BgIconBlack></BgIconBlack>;
};

const CheckBox = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 39px;
  background: #00a3ff;
`;

export function CheckIcon() {
  return (
    <CheckBox>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_40000120_76554)">
          <path
            d="M6.0001 10.7799L3.2201 7.9999L2.27344 8.9399L6.0001 12.6666L14.0001 4.66656L13.0601 3.72656L6.0001 10.7799Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_40000120_76554">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </CheckBox>
  );
}
