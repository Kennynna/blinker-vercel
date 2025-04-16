import styled from "@emotion/styled";

const CheckBox = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 39px;
  background: #00a3ff;
`;
export function CheckIcon() {
  return (
    <CheckBox>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_40000120_76554)">
          <path
            d="M6.0001 10.7799L3.2201 7.9999L2.27344 8.9399L6.0001 12.6666L14.0001 4.66656L13.0601 3.72656L6.0001 10.7799Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_40000120_76554">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </CheckBox>
  );
}
