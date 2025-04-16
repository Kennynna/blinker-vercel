import styled from '@emotion/styled';

const Block = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 330px;
  border-radius: 1rem;
  background-color: #f9f9f9;
  padding: 16px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
export const CreateCommunityMainScreen = () => {
  return (
    <Block>
      <Card>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
        <div>
          <Title>Путеводитель</Title>
          <Desc>Обзоры мест, маршруты</Desc>
        </div>
      </Card>

      <Card>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
        <div>
          <Title>Группа</Title>
          <Desc>Интересы, события</Desc>
        </div>
      </Card>
    </Block>
  );
};
