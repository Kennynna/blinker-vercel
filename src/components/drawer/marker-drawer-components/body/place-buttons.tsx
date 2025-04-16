import { PhoneIcon } from '@/shared/icons/marker-drawer/phone-icon';
import { RouteIcon } from '@/shared/icons/marker-drawer/route';
import { WorldIcon } from '@/shared/icons/marker-drawer/world-icon';
import styled from '@emotion/styled';

import { FixedButton } from '@/components/community/community-add-event/shared/fixed-button';

interface ButtonsBlockProps {
  isScroll: boolean;
}

const ButtonsBlock = styled.div<ButtonsBlockProps>`
  margin: 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: ${(props) => (props.isScroll ? '' : 'space-between')};
  position: ${(props) => (props.isScroll ? 'fixed' : 'static')};
  bottom: 0px;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: ${(props) => (props.isScroll ? '8px 16px 16px 16px;' : '')};
  padding-bottom: ${(props) => (props.isScroll ? '20px' : '')};
  overflow-x: ${(props) => (props.isScroll ? 'scroll' : '')}; // Enable horizontal scrolling
  -webkit-overflow-scrolling: touch;
  background-color: ${(props) => (props.isScroll ? '#FFF' : '')};
  pointer-events: auto;
`;

const ButtonDiscount = styled.button<ButtonsBlockProps>`
  border-radius: 39px;
  background: #00a3ff;
  font-weight: 600;
  padding: 16px;
  border: none;
  flex-shrink: 0;
  flex: ${(props) => (props.isScroll ? '' : '1')};
`;

const ButtonMenu = styled.button<ButtonsBlockProps>`
  color: ${(props) => (props.isScroll ? '#424242' : '#fff')};
  position: relative;
  -webkit-border-radius: 39px;
  -moz-border-radius: 39px;
  border-radius: 39px;
  background: ${(props) => (props.isScroll ? '#F9F9F9' : 'rgba(255, 255, 255, 0.2)')};
  box-shadow: ${(props) => (props.isScroll ? 'none' : '0px 8px 25px 0px rgba(0, 0, 0, 0.1)')};
  backdrop-filter: ${(props) => (props.isScroll ? 'none' : 'blur(25px)')};
  padding: 16px;
  border: none;
  font-weight: 600;
  flex-shrink: 0;
  isolation: isolate;
  overflow: hidden;
`;

const OpacityBlock = styled.div<ButtonsBlockProps>`
  margin: 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: ${(props) => (props.isScroll ? '' : 'space-between')};
  position: ${(props) => (props.isScroll ? 'fixed' : 'static')};
  bottom: 0px;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: ${(props) => (props.isScroll ? '8px 16px 16px 16px;' : '')};
  padding-bottom: ${(props) => (props.isScroll ? '20px' : '')};
  overflow-x: ${(props) => (props.isScroll ? 'scroll' : '')}; // Enable horizontal scrolling
  -webkit-overflow-scrolling: touch;
  pointer-events: auto;
`;

const ButtonDiscountFull = styled.button<ButtonsBlockProps>`
  border-radius: 39px;
  background: #00a3ff;
  font-weight: 600;
  width: 100%;
  padding: 16px;
  border: none;
  flex-shrink: 0;
  flex: ${(props) => (props.isScroll ? '' : '1')};
`;
export const PlaceButtons = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <ButtonsBlock isScroll={isScrolled}>
      <ButtonDiscount isScroll={isScrolled}>Получить скидку 10%</ButtonDiscount>
      <ButtonMenu isScroll={isScrolled}>Меню</ButtonMenu>
      {isScrolled && <ButtonMenu isScroll={isScrolled}> Предложить заметку</ButtonMenu>}
      {isScrolled && (
        <>
          <RouteIcon height="48px" width="48px" isScroll={isScrolled} />
          <PhoneIcon height="48px" width="48px" isScroll={isScrolled} />
          <WorldIcon height="48px" width="48px" isScroll={isScrolled} />
        </>
      )}
    </ButtonsBlock>
  );
};

export const EventButtons = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div>
      {!isScrolled ? (
        <ButtonsBlock isScroll={isScrolled}>
          <ButtonDiscount isScroll={isScrolled}>Билеты от 900 ₽</ButtonDiscount>
        </ButtonsBlock>
      ) : (
        <OpacityBlock isScroll={isScrolled}>
          <ButtonDiscountFull isScroll={isScrolled}>Билеты от 900 ₽</ButtonDiscountFull>
        </OpacityBlock>
      )}
    </div>
  );
};
