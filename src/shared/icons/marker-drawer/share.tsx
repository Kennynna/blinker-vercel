import styled from '@emotion/styled';

import { IconWrapper } from './arrow-left';

export function ShareIcon({ color, isScroll }: { isScroll: boolean; color: string }): React.JSX.Element {
  return (
    <IconWrapper isScroll={isScroll}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1528 8.73257V5.86296L19.1331 10.8667L13.1528 15.8704V12.64H11.4028C8.26504 12.64 6.10206 13.1119 4.3215 14.3296C4.48669 13.8861 4.66963 13.4691 4.87609 13.0778C5.89783 11.1416 7.6558 9.51957 11.6316 8.95036L13.1528 8.73257ZM1.81164 16.7936C1.63971 17.593 1.48795 18.412 1.33467 19.2392C1.22641 19.8234 1.1174 20.4117 1 21C1.23277 20.6734 1.4534 20.3599 1.66495 20.0592C2.30499 19.1497 2.86187 18.3584 3.4201 17.681C4.93022 15.8484 6.4502 14.8498 9.65278 14.6018C10.1868 14.5605 10.7675 14.54 11.4028 14.54V19.7333L22 10.8667L11.4028 2V7.06667C4.54087 8.04909 2.82561 12.0794 1.81164 16.7936Z"
          fill={isScroll ? '#00A3FF' : 'white'}
        />
      </svg>
    </IconWrapper>
  );
}

const IconWrapperV2 = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 12px;
  align-items: center;
  gap: 8px;
  border-radius: 39px;
  background: #f9f9f9;
`;
export function ShareIconV2(): React.JSX.Element {
  return (
    <IconWrapperV2>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1528 8.73257V5.86296L19.1331 10.8667L13.1528 15.8704V12.64H11.4028C8.26504 12.64 6.10206 13.1119 4.3215 14.3296C4.48669 13.8861 4.66963 13.4691 4.87609 13.0778C5.89783 11.1416 7.6558 9.51957 11.6316 8.95036L13.1528 8.73257ZM1.81164 16.7936C1.63971 17.593 1.48795 18.412 1.33467 19.2392C1.22641 19.8234 1.1174 20.4117 1 21C1.23277 20.6734 1.4534 20.3599 1.66495 20.0592C2.30499 19.1497 2.86187 18.3584 3.4201 17.681C4.93022 15.8484 6.4502 14.8498 9.65278 14.6018C10.1868 14.5605 10.7675 14.54 11.4028 14.54V19.7333L22 10.8667L11.4028 2V7.06667C4.54087 8.04909 2.82561 12.0794 1.81164 16.7936Z"
          fill="#00A3FF"
        />
      </svg>
    </IconWrapperV2>
  );
}
