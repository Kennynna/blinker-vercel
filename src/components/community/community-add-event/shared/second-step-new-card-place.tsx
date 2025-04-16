import { useMemo, useState } from 'react';
import { useStepCategory } from '@/shared/store/community/step-category';
import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';

import { CheckBoxIcon } from '../../community-add-palce-steps/last-step-existing-place';
import { category } from '../../constants';
import { CheckIcon } from '../../icons/check';
import { NoFoundSearch } from '../../shared/no-found-search';
import { SearchInput } from '../../shared/search-custom-input';
import { FixedButton } from './fixed-button';

const CategoryList = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 400;
`;

const ButtonBlock = styled.div`
  padding: 0 16px;
  position: fixed;
  bottom: 16px;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Button = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 39px;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;

  background: ${({ isSelected }) => (isSelected ? '#00A3FF' : '#b7aeae')};

  &:disabled {
    pointer-events: none;
  }
`;

export const SecondStepNewCard = ({ stepNext, buttonNext = true }: { stepNext?: () => void; buttonNext?: boolean }) => {
  const [searchValue, setSearchValue] = useState('');
  const { selectedCategories, setSelectedCategories } = useStepCategory();

  const filteredCategories = useMemo(() => {
    return category.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
  }, [searchValue]);

  const handleCategoryToggle = (id: number) => {
    setSelectedCategories((prev) => (prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]));
  };

  return (
    <div>
      <SearchInput
        placeholder="Введите категорию"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <CategoryList>
        {filteredCategories.map((item) => (
          <CheckBoxCategory
            key={item.id}
            name={item.name}
            isSelected={selectedCategories.includes(item.id)}
            onToggle={() => handleCategoryToggle(item.id)}
          />
        ))}
      </CategoryList>

      {filteredCategories.length === 0 && <NoFoundSearch />}

      {buttonNext && (
        <FixedButton
          text="Выбрать"
          onClick={selectedCategories.length > 0 ? stepNext : undefined}
          disabled={selectedCategories.length === 0}
        />
      )}
    </div>
  );
};

interface CheckBoxCategoryProps {
  name?: string;
  isSelected: boolean;
  onToggle: () => void;
}

export function CheckBoxCategory({ name, isSelected, onToggle }: CheckBoxCategoryProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        color: ' #424242',
      }}
    >
      <p>{name}</p>
      <Checkbox checked={isSelected} onChange={onToggle} icon={<CheckBoxIcon />} checkedIcon={<CheckIcon />} />
    </div>
  );
}
