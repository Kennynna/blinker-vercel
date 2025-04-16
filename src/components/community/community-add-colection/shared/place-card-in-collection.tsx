import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ImageBlock = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    color: #958a8a;
    font-size: 14px;
    font-weight: 600;
  }
  h5 {
    font-size: 16px;
    font-weight: 700;
  }
`;

export interface PlaceCardProps {
  placeName: string;
  type: string;
  address: string;
  id: number;
}

export const PlaceCardThreeRow = ({ placeName, type, address }: PlaceCardProps) => {
  return (
    <Wrapper>
      <ImageBlock src="https://i.pinimg.com/280x280_RS/66/e3/66/66e366007fba701ac8e4c3700b99dfc8.jpg" />
      <TextBlock>
        <p>{placeName}</p>
        <h5>{type}</h5>
        <p>{address}</p>
      </TextBlock>
    </Wrapper>
  );
};
