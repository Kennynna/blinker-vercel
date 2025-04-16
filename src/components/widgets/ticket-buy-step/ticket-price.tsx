import Image from 'next/image';
import styled from '@emotion/styled';

export const TicketPrice = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <div onClick={nextStep}>
      <Event>
        <Image src="/img/event.png" alt="" height={48} width={48} objectFit="cover" />
        <div>
          <p>16 июля вт 16:00 </p>
          <p>Цена за 1 билет</p>
        </div>
      </Event>
      <PriceList>
        <PriceItem />
        <PriceItem />
      </PriceList>
    </div>
  );
};

const Event = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(271deg, rgba(0, 0, 0, 0) 18.28%, rgba(0, 0, 0, 0.75) 108.24%);
  }
  p {
    color: #424242;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const PriceList = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PriceItemBlock = styled.div`
border-radius: 16px;
display: flex;
padding: 16px;
justify-content: space-between;
background: #F9F9F9;
align-items: center;
`;

const LeftSection = styled.div`
display: flex;
gap: 8px;
align-items: center;

p{
font-size: 16px;
font-weight: 700;
}

a{
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
color: #424242;
text-overflow: ellipsis;
font-size: 14px;
font-weight: 400;
text-style: normal;
text-decoration: none;

`;

const PriceButton = styled.button`
  border-radius: 39px;
  background: #fff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  color: #00a3ff;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border: none;

  &:active {
    background: #00a3ff;
    color: #fff;
  }
`;

export const PriceItem = () => {
  return (
    <PriceItemBlock>
      <LeftSection>
        <Image src="/img/event.png" alt="" height={24} width={24} objectFit="cover" />
        <div>
          <p>900 ₽ </p>
          <a href="">Сайт с билетами 1</a>
        </div>
      </LeftSection>

      <PriceButton>Купить</PriceButton>
    </PriceItemBlock>
  );
};
