import styled from '@emotion/styled';
import { Title } from './about/title';

const Block = styled.div`
  margin: 0;
  width: 100%;
  font-weight: 600;
`;

const ItemsBlock = styled.div`
  margin: 0;
  margin-top: 0.75rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Item = styled.p`
  margin: 0;
  padding: 0.75rem 1rem;
  color: #424242;
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 39px;
  border: 1px solid #e9e9e9;
`;

export function MarkerDrawerFeatures() {
  const features = ['Детская комната', 'Детское меню', 'Кальяны'];
  return (
    <Block>
      <Title title='Особенности' id='features' />
      <ItemsBlock>
        {features.map((feature) => (
          <Item>{feature}</Item>
        ))}
      </ItemsBlock>
    </Block>
  );
}
