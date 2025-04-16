import styled from '@emotion/styled';

const IconWrapper = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 12px;
  align-items: center;
  gap: 8px;
  border-radius: 39px;
  background: #f9f9f9;
`;
export function BookMark(): React.JSX.Element {
  return (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_1062_136558)">
          <path
            d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
            fill="#00A3FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_1062_136558">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
