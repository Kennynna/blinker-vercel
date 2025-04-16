import React, { useEffect, useMemo, useRef, useState } from 'react';
import { InputCloseIcon } from '@/shared/icons/community/input-close-icon';
import { SearchIcon } from '@/shared/icons/community/search-icon';
import { SearchArrowLeftIcon } from '@/shared/icons/community/search-icon-arrow-left';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';

import { CustomEventCard } from '../community-add-event/shared/custom-event-card';
import { places } from '../constants';
import { MapOverlay } from '../widgets/map-overlay';
import { StepContentProps } from './choose-existing-or-new-place';

/* -- Стили (можно оставить ваши -- */
const WrapperInput = styled.div`
  display: flex;
  width: 100%;
  border-radius: 16px;
  background: #f9f9f9;
  padding: 16px;
  margin-top: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  border: none;
  font-size: 16px;
  color: #424242;
  background-color: #f9f9f9;

  ::placeholder {
    color: #b0a9a7;
  }

  &:focus {
    outline: none;
    border-color: none;
  }
`;

const SearchWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: start;
  gap: 24px;
  flex-direction: column;
  width: 100%;
  background: #ffffff; /* Чтобы отличалось визуально */
  border-radius: 8px;
  padding: 12px;
  max-height: 300px;
  overflow-y: scroll;
`;

const SearchTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
`;

const SearchType = styled.p`
  color: #958a8a;
  font-size: 14px;
  font-weight: 500;
`;

const SearchAddress = styled.p`
  color: #958a8a;
  font-size: 14px;
  font-weight: 500;
`;

const SearchName = styled.p`
  color: #424242;
  font-size: 16px;
  font-weight: 400;
  width: 100%;

`;
const Paragraph = styled.p`
  margin-top: 16px;

  color: #00a3ff;
  font-size: 14px;
  font-weight: 500;
`;
/* -- Компонент выпадающего списка -- */
interface ISearchItemProps extends StepContentProps {
  items: {
    type: string;
    address: string;
    name: string;
  }[];
  searchValue?: string;
  handleNewCardEvent?: () => void;
}
function SearchItem({ stepNext, items, searchValue, handleNewCardEvent }: ISearchItemProps) {
  // если раздел события то добавляем шаг на 0.1 иначе по другому не реализовать
  const { currentPlace } = useStepStore();
  function handleStepNext() {
    currentPlace === 'EVENT' ? stepNext(0.1) : stepNext(1);
  }
  return (
    <SearchWrapper>
      {currentPlace === 'EVENT' && items.length === 0 && (
        <SearchName onClick={handleNewCardEvent}>{searchValue}</SearchName>
      )}
      {items.map((item, index) => (
        <SearchTextWrapper key={index} onClick={handleStepNext}>
          <SearchType>{item.type}</SearchType>
          <SearchName>{item.name}</SearchName>
          <SearchAddress>{item.address}</SearchAddress>
        </SearchTextWrapper>
      ))}
    </SearchWrapper>
  );
}

/* -- Основной компонент с инпутом и логикой поиска -- */
export function FirstStepExistingCard({ stepNext }: StepContentProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMapOverlayVisible, setIsMapOverlayVisible] = useState(false);
  const [isNewCard, setNewCard] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Фильтрация по полям type, address, name
  const filteredPlaces = useMemo(() => {
    if (!searchValue.trim()) {
      // Если строка поиска пустая - показываем все
      return places;
    }
    const lowerSearch = searchValue.toLowerCase();
    return places.filter((place) =>
      [place.type, place.address, place.name].some((field) => field.toLowerCase().includes(lowerSearch))
    );
  }, [searchValue]);

  const handleMapClick = () => {
    setIsMapOverlayVisible(true);
  };

  const handleCloseMap = () => {
    setIsMapOverlayVisible(false);
  };

  const handleNewCardEvent = () => {
    setNewCard(true);
  };

  // При клике вне обёртки скрываем выпадающий список
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // Проверка: если клик был вне wrapperRef
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsDropdownVisible(false);
        setSearchValue('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);
  const fullReset = () => {
    setSearchValue('');
    setIsDropdownVisible(false);
  };
  const inputValueReset = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };

  // Кастомная карточка
  if (isNewCard) {
    return <CustomEventCard title={searchValue} />;
  }
  return (
    <div ref={wrapperRef}>
      <WrapperInput>
        {isDropdownVisible ? <SearchArrowLeftIcon onClick={fullReset} /> : <SearchIcon color="#958A8A" />}
        <StyledInput
          ref={inputRef}
          placeholder="Введите адрес или название"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsDropdownVisible(true)} // Показать список при фокусе
        />

        {isDropdownVisible && <InputCloseIcon click={inputValueReset} />}
      </WrapperInput>
      {isDropdownVisible ? (
        <SearchItem
          stepNext={stepNext}
          items={filteredPlaces}
          searchValue={searchValue}
          handleNewCardEvent={handleNewCardEvent}
        />
      ) : (
        <Paragraph onClick={handleMapClick}>Выбрать на карте</Paragraph>
      )}
      {isMapOverlayVisible && <MapOverlay onClose={handleCloseMap} />}
      {/* Отображаем выпадающее окно, когда isDropdownVisible === true */}
    </div>
  );
}
