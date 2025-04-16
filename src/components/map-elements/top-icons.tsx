import { Group } from '@/shared/icons';
import styled from '@emotion/styled';

import { CustomButton } from './bottom-elements';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.50);

  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);

  position: absolute;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  right: -7px;
  top: -8px;
`;

interface Props {
  setWhatOpen: (open: string) => void;
  bgColor?: string;
}

export function RightIcons({ setWhatOpen, bgColor }: Props) {
  return (
    <Div>
      <CustomButton>
        <Quantity>3</Quantity>
        <Group />
      </CustomButton>
    </Div>
  );
}
