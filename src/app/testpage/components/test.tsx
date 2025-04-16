'use client';
import React from 'react';
import styled from '@emotion/styled';

/**
 * Обёртка всей карточки
 */
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #fff;
`;

/**
 * Блок с "обложкой" (картинка + полупрозрачный слой, если нужно)
 */
const CoverWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* можно подкорректировать высоту под себя */
  overflow: hidden;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

/**
 * Заголовок и подпись
 */
const TitleWrapper = styled.div`
  padding: 16px;
`;

const PlaceType = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #424242;
`;

const PlaceName = styled.h2`
  margin: 4px 0 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #424242;
`;

/**
 * Теги
 */
const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px;
  margin-bottom: 12px;
`;

const Tag = styled.span`
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #424242;
  background-color: #f5f5f5;
  border-radius: 1rem;
`;

/**
 * "Ваша заметка" блок
 */
const NoteWrapper = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
`;

const NoteTitle = styled.p`
  margin: 0 0 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #424242;
`;

const NoteButton = styled.button`
  display: inline-block;
  padding: 8px 12px;
  background-color: #ececec;
  border-radius: 1rem;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  color: #424242;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

/**
 * Вкладки "О месте", "Особенности", "События", "Статьи"
 */
const TabsWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const TabButton = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  background-color: ${({ active }) => (active ? '#00A3FF' : '#f2f2f2')};
  color: ${({ active }) => (active ? '#fff' : '#424242')};
  border: none;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

/**
 * Основной текстовый блок (описание "О месте" и т.д.)
 */
const ContentWrapper = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
`;

const ContentTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 700;
  color: #424242;
`;

const ContentText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #424242;
`;

/**
 * Кнопка "Далее" внизу
 */
const ActionButton = styled.button`
  margin: 16px;
  padding: 12px 0;
  width: 100%;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: #00a3ff;
  cursor: pointer;

  &:hover {
    background-color: #0090e0;
  }
`;

export const PlaceCardExample: React.FC = () => {
  // для примера: активная вкладка (можно управлять стейтом)
  const activeTab = 'О месте';

  return (
    <CardContainer>
      <CoverWrapper>
        <CoverImage
          src="https://avatars.mds.yandex.net/i?id=d60314bdc06212299a18bdc8059a2d0c478769ed-10929043-images-thumbs&n=13"
          alt="Обложка заведения"
        />
      </CoverWrapper>

      <TitleWrapper>
        <PlaceType>Ресторан</PlaceType>
        <PlaceName>Гуси</PlaceName>
      </TitleWrapper>

      <TagsWrapper>
        <Tag>Какой-то тег</Tag>
        <Tag>Какой-то тег</Tag>
        <Tag>Какой-то тег</Tag>
      </TagsWrapper>

      <NoteWrapper>
        <NoteTitle>Ваша заметка</NoteTitle>
        <NoteButton>+ Добавить заметку</NoteButton>
      </NoteWrapper>

      <TabsWrapper>
        <TabButton active={activeTab === 'О месте'}>О месте</TabButton>
        <TabButton active={activeTab === 'Особенности'}>Особенности</TabButton>
        <TabButton active={activeTab === 'События'}>События</TabButton>
        <TabButton active={activeTab === 'Статьи'}>Статьи</TabButton>
      </TabsWrapper>

      <ContentWrapper>
        <ContentTitle>О месте</ContentTitle>
        <ContentText>
          Необычный современный интерьер удивляет и впечатляет. В меню есть множество интересных блюд, которые придутся
          по вкусу самым разным гостям.
        </ContentText>
      </ContentWrapper>

      <ActionButton>Далее</ActionButton>
    </CardContainer>
  );
};
