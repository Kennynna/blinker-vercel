import { PlusIcon } from '@/shared/icons/community/plus-icon';
import styled from '@emotion/styled';
import { style } from '@mui/system';

import { ImageIcon } from '../../icons/image-icon';
import BottomDrawerEvent from './bottom-drawer-event';
import { StepTitle } from './step-title';

const Wrapper = styled.div`
  padding: 16px;
  background: #f9f9f9;
  border-radius: 16px;
  color: #424242;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 12px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  background-color: #e1e1e1;
  border-radius: 16px;
`;

const ButtonAddCollection = styled.button`
  width: 100%;
  color: #424242;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 16px;
  border-radius: 39px;
  background: #fff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  border: none;
`;

const FixedButton = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  max-width: 700px;
  display: flex;
  align-items: center;
`;
interface CustomEventCardProps {
  title: string;
}
export const CustomEventCard = ({ title }: CustomEventCardProps) => {
  return (
    <>
      <StepTitle title="Где провести событие?" />
      <Wrapper>
        <Header>
          <IconWrapper>
            <ImageIcon />
          </IconWrapper>
          <p style={{ flex: 1 }}>{title}</p>
        </Header>

        <ButtonAddCollection>
          <PlusIcon /> Создать подборку
        </ButtonAddCollection>
      </Wrapper>

      <FixedButton>
        {/* так как у нас разный сценарий для следующего шага мы должны передать пропс в условие, чтобы была разная реализация перехода в следующий шаг */}
        <BottomDrawerEvent isCurrentCreateEvent={true} />
      </FixedButton>
    </>
  );
};
