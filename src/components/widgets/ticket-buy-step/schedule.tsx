import styled from '@emotion/styled';

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #424242;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
`;
const BlockItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: start;
  p {
    overflow: hidden;
    color: #424242;
    text-overflow: ellipsis;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
  }
`;
const PriceButton = styled.button`
  border-radius: 39px;
  background: #00a3ff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border: none;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e1e1;
  margin: 24px 0;
`;

const data = [
  {
    date: '13',
    day: 'января',
    weekDay: 'сб',
    time: '11:00',
    location: 'Название локации',
    price: 'от 900 ₽',
  },
  {
    date: '13',
    day: 'января',
    weekDay: 'сб',
    time: '11:00',
    location: 'Название локации',
    price: 'от 900 ₽',
  },
  {
    date: '13',
    day: 'января',
    weekDay: 'сб',
    time: '11:00',
    location: 'Название локации',
    price: 'от 900 ₽',
  },
];

export const Schedule = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <Table>
      {data.map((item, index) => (
        <>
          <BlockItem key={index}>
            <DateBlock>
              <p>{item.date}</p>
              <p style={{ fontSize: '14px' }}>
                {item.day} <span>{item.weekDay}</span>
              </p>
            </DateBlock>
            <TimeBlock>
              <h2>{item.time}</h2>
              <p>{item.location}</p>
            </TimeBlock>
            <PriceButton onClick={nextStep} type='button'>{item.price}</PriceButton>
          </BlockItem>
            <Border />
        </>
      ))}
    </Table>
  );
};
