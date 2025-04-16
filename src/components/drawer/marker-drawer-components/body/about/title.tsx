import React from 'react';
import styled from '@emotion/styled';





interface StylesProps {
  styles?: React.CSSProperties;
}

const TitleText = styled.p<StylesProps>`
  color: #424242;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  ${(props) => props.styles && { ...props.styles }}
`;
export const Title = ({ title, id, styles }: { title: string; id?: string; styles?: React.CSSProperties }) => {
  return (
    <TitleText id={id} styles={styles}>
      {title}
    </TitleText>
  );
};
