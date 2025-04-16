import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import styled from '@emotion/styled';

const Header = styled.div`
  padding: 8px 4px;
  width: 100%;
  position: relative;
  text-align: center;

  p {
    font-size: 16px;
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  left: 12px;
  top: 8px;
`;

export const HeaderDrawer = ({drawerClose}: {drawerClose: () => void}) => {
  return (
    <Header>
      <IconWrapper onClick={drawerClose}>
        <ArrowLeftIcon />
      </IconWrapper>
      <p>Создание сообщества</p>
    </Header>
  );
};
