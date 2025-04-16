import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 32px;
  background: #f9f9f9;
  padding: 4px;
`;

export const CloseIcon = ({ click }: { click?: () => void }) => {
  return (
    <Wrapper onClick={click}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 4 L12 12 M12 4 L4 12" stroke="#958A8A" stroke-width="2" fill="none" />
      </svg>
    </Wrapper>
  );
};

const WrapperV2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 32px;
  background: #f9f9f9;
  padding: 4px;
  width: 24px;
  height: 24px;
`;
export const CloseIconV2 = ({ click }: { click?: () => void }) => {
  return (
    <WrapperV2 onClick={click}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 4 L12 12 M12 4 L4 12" stroke="#958A8A" stroke-width="2" fill="none" />
      </svg>
    </WrapperV2>
  );
};
