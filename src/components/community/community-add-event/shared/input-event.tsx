import styled from '@emotion/styled';

import { CalendarInputIcon } from '../../icons/calendar-input';
import { InputTitle, Section, Star } from '../second-step-info/event-name';
import { on } from 'events';

export const SelectableField = styled.input`
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
  background: transparent;

  &::placeholder {
    color: #958a8a;
  }
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const Paragraph = styled.p`
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
  background: transparent;
`;

const Block = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
`;

interface InputEventProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  icon?: React.ReactNode;
  title?: string;
  strong?: boolean;
  type?: string;
  disabled?: boolean;
  paragraph?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
}

export function InputEvent({
  placeholder,
  value,
  onChange,
  onFocus,
  icon,
  title,
  strong,
  type,
  disabled,
  paragraph,
  ref,
}: InputEventProps) {
  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    event.target.showPicker(); // Программно открываем календарь
  }
  return (
    <Section>
      <InputTitle>
        <p>
          {title} {strong && <Star>*</Star>}
        </p>
      </InputTitle>
      <Block>
        {!paragraph ? (
          <SelectableField
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            type={type}
            disabled={disabled}
            onClick={onFocus}
          />
        ) : (
          <Paragraph>{value}</Paragraph>
        )}
        {icon}
      </Block>
    </Section>
  );
}
