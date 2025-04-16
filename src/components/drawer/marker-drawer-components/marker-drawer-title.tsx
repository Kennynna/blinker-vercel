import styled from '@emotion/styled';

const Title = styled.p`
  color: #424242;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const Block = styled.div`
  margin: 0;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
`;


export function MarkerDrawerTitle({ title }: { title: string }) {
  return (
    <Block>
      <Title>{title}</Title>
    </Block>
  );
}
