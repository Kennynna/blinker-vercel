import React from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';



import { DrawerOpenAndFullOpen } from '@/hooks/use-drawer-open';





interface IconWrapperProps {
  isScroll?: boolean;
}
export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 39px;
  background: ${(props) => (props.isScroll ? '' : 'rgba(0, 0, 0, 0.50)')};
  box-shadow: ${(props) => (props.isScroll ? '' : ' 0px 8px 25px 0px rgba(0, 0, 0, 0.05)')};
  backdrop-filter: blur(16px);
`;

export function ArrowLeft({ color, isScroll }: { color: string; isScroll?: boolean }): React.JSX.Element {
  const { setWhatOpen, setIsListingOpen, isListingOpen, resetOnlyItem } = useDrawerValue();

  function closeItemPageAndOpedDefault() {
    setWhatOpen('default');
    if (isListingOpen === 'fullOpen') {
      resetOnlyItem();
      setIsListingOpen('fullOpen');
    } else {
      setIsListingOpen('open');
    }

  }
  return (
    <IconWrapper isScroll={isScroll} onClick={closeItemPageAndOpedDefault}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_40000064_58447)">
          <path
            d="M19 11H8.83L13.41 6.41L12 5L5 12L12 19L13.41 17.59L8.83 13H19V11Z"
            fill={isScroll ? '#00A3FF' : 'white'}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000064_58447">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
