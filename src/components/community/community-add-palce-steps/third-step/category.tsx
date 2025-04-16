import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import { useStepCategory } from '@/shared/store/community/step-category';

import { category } from '../../constants';
import LeftDrawerCategory from '../../shared/left-drawer-category-step';
import { InputTitle, Section, SelectableField } from './info-list';

export const Category = () => {
  const { selectedCategories } = useStepCategory();
  // Получаем отфильтрованные категории
  const selectedCategoryNames = category
    .filter((item) => selectedCategories.includes(item.id))
    .map((item) => item.name);
  return (
    <Section>
      <InputTitle>Категории</InputTitle>
      <LeftDrawerCategory>
        <SelectableField>
          <p>{selectedCategoryNames.join(', ') || 'Выберите категорию'}</p>
          <ArrowRightV2 color="#958A8A" />
        </SelectableField>
      </LeftDrawerCategory>
    </Section>
  );
};
