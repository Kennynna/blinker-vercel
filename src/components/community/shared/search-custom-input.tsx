import { SearchIcon } from '@/shared/icons/community/search-icon';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Input from '@mui/material/Input';

import { PlaceOrEventTabWithoutIcons } from '@/components/drawer/default-drawer-components/ui/place-or-event-tab';

const StyledInput = styled(Input)`
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

const WrapperInput = styled(Box)`
  height: 48px;
  display: flex;
  width: 100%;
  border-radius: 16px;
  background: #f9f9f9;
  padding: 12px;
  margin-top: 4px;
  align-items: center;
`;

const TabBlock = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const TexTab = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  wrapperStyle?: object;
  inputStyle?: object;
}

export const SearchInput = ({ value, onChange, onFocus, wrapperStyle, inputStyle, placeholder }: Props) => {
  return (
    <WrapperInput sx={{ ...wrapperStyle }}>
      <SearchIcon color="#958A8A" />
      <StyledInput
        placeholder={placeholder || 'Поиск'}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        sx={{ ...inputStyle }}
      />
    </WrapperInput>
  );
};

const TagsBlock = styled.div`
  margin-top: 10px;
  overflow-x: scroll;
  display: flex;
  gap: 8px;
  white-space: nowrap;
`;

const Tags = styled.p`
  padding: 12px 16px;
  border-radius: 39px;
  background: #00a3ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export const SearchInputEventOrPlace = ({ value, onChange, onFocus, wrapperStyle, inputStyle, placeholder }: Props) => {
  const { activeTab, setActiveTab } = useStoreFilters();

  return (
    <>
      <TabBlock>
        <PlaceOrEventTabWithoutIcons activeTab={activeTab} handleClickTab={setActiveTab} />
        <TexTab>Добавьте их к себе в подборку </TexTab>
      </TabBlock>

      <WrapperInput sx={{ ...wrapperStyle }}>
        <SearchIcon color="#958A8A" />
        <StyledInput
          placeholder={placeholder || 'Поиск'}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          sx={{ ...inputStyle }}
        />
      </WrapperInput>
      <TagsBlock>
        <Tags>Создано мной</Tags>
        <Tags>Новосибирск</Tags>
        <Tags>События</Tags>
      </TagsBlock>
    </>
  );
};
