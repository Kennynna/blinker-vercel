import styled from '@emotion/styled';
import { Button } from '@mui/material';





const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #fff;
`;

const FixedBtn = styled(Button)<{ isSelected?: boolean }>`
  width: calc(100% - 32px); // Убираем margin из расчета ширины
  box-sizing: border-box; // Учитываем padding и border
  margin: 8px 16px 16px 16px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  border-radius: 39px;
  background: #00a3ff;
  padding: 12px !important;

  &:disabled {
    background-color: #b7aeae;
    color: #fff;
  }
`;

interface FixedButtonProps {
  children?: React.ReactNode;
  text?: string;
  sx?: object;
  onClick?: () => void;
  disabled?: boolean;
}
export const FixedButton = ({ children, text, sx, onClick, disabled }: FixedButtonProps) => {
  return (
    <Wrapper>
      <FixedBtn onClick={onClick} sx={{ ...sx }} disabled={disabled}>
        {text}
        {children}
      </FixedBtn>
    </Wrapper>
  );
};
