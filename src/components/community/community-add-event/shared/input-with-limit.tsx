import styled from '@emotion/styled';

export const SelectableField = styled.input`
  border-radius: 16px;
  background: #f9f9f9;
  padding: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #424242;
  border: none;
  outline: none;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &::placeholder {
    color: #958a8a;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const InputTitle = styled.div`
  color: #958a8a;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Star = styled.span`
  color: #00a3ff;
`;

interface InputWithLimitProps {
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  show?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  strong: boolean;
  limit?: number;
  inputTitle?: string;
}

export const InputWithLimit = ({
  value,
  onChange,
  show,
  onFocus,
  onBlur,
  placeholder,
  strong,
  limit,
  inputTitle,
  type,
}: InputWithLimitProps) => {
  return (
    <Section>
      <InputTitle>
        <p>
          {inputTitle} {strong && <Star>*</Star>}
        </p>
        {show && (
          <p>
            {value.length} из {limit}
          </p>
        )}
      </InputTitle>
      <SelectableField
        type={type}
        placeholder={placeholder || 'Введите название...'}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Section>
  );
};
