import React, { useState } from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';

import { tags } from '../constants';
import LeftDrawerTags from '../shared/leftDrawerTags';
import { FixedButton } from '../community-add-event/shared/fixed-button';

export const TagsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin-bottom: 50px;
`;

export const TagBlock = styled.div`
  width: 100%;
  background: #f9f9f9;
  border-radius: 16px;
  padding: 16px;
`;

export const Title = styled.p`
  color: #424242;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p<{ selected: boolean }>`
  padding: 12px 16px;
  border-radius: 39px;
  background: ${({ selected }) => (selected ? '#00a3ff' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#424242')};
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer; // Добавляем указатель при наведении
  transition: all 0.2s ease; // Плавное изменение цвета
`;

export const TagList = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const AllTagsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
`;


export const TagsStepChoose = ({ stepNext }: { stepNext: () => void }) => {
  return (
    <TagsContainer>
      {tags.map((obj) => (
        <TagChoose key={obj.title} obj={obj} />
      ))}

      <FixedButton onClick={stepNext}>Далее</FixedButton>
    </TagsContainer>
  );
};

export function TagChoose({ obj }: { obj: { title: string; tags: string[] } }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [drawerSelectedTags, setDrawerSelectedTags] = useState<string[]>([]);

  // Функция для обновления списка тегов при закрытии Drawer
  const updateSelectedTags = () => {
    setSelectedTags(drawerSelectedTags.slice(0, 10)); // Оставляем только 10 тегов
  };

  // Выбор тегов (работает и в родительском компоненте, и в Drawer)
  const handleTagSelect = (tag: string) => {
    setDrawerSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag); // Удаляем, если уже выбран
      } else {
        return [...prev, tag]; // Добавляем
      }
    });

    // Ограничиваем выбор в самом `TagChoose`
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else if (prev.length < 10) {
        return [...prev, tag];
      }
      return prev;
    });
  };

  return (
    <TagBlock>
      <Title>{obj.title}</Title>
      <TagList>
        {/* Выбранные теги (до 10) */}
        {selectedTags.map((tag) => (
          <Tag key={tag} selected={true} onClick={() => handleTagSelect(tag)}>
            {tag}
          </Tag>
        ))}
        {/* Доступные теги, пока не достигнут лимит */}
        {obj.tags
          .filter((tag) => !selectedTags.includes(tag))
          .slice(0, 10 - selectedTags.length)
          .map((tag) => (
            <Tag key={tag} selected={false} onClick={() => handleTagSelect(tag)}>
              {tag}
            </Tag>
          ))}
      </TagList>

      {/* Drawer открывается при клике */}
      <LeftDrawerTags
        title={obj.title}
        tags={obj.tags}
        selectedTags={drawerSelectedTags}
        handleTagSelect={handleTagSelect}
        onClose={updateSelectedTags} // Синхронизация при закрытии Drawer
      >
        <AllTagsBtn>
          <p>Все теги</p>
          <ArrowRightV2 color="#424242" />
        </AllTagsBtn>
      </LeftDrawerTags>
    </TagBlock>
  );
}
