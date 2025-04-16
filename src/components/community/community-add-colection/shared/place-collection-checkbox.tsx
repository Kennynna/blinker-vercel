import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';

import { CheckBoxIcon } from '../../community-add-palce-steps/last-step-existing-place';
import { PlaceCardProps, PlaceCardThreeRow } from './place-card-in-collection';
import { CheckIcon } from '../../icons/check';
import { PlaceCardCheckbox } from '@/components/drawer/drawer-info-item';

const WrapperCheckBox = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface PlacesCollectionCheckBoxProps {
  cards: PlaceCardProps[];
  selectItems: number[];
  setSelectItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export const PlacesCollectionCheckBox = ({ cards, selectItems, setSelectItems }: PlacesCollectionCheckBoxProps) => {
  const handleToggle = (id: number) => {
    if (selectItems.includes(id)) {
      setSelectItems(selectItems.filter((itemId) => itemId !== id));
    } else {
      setSelectItems([...selectItems, id]);
    }
  };

  return (
    <>
      {cards.map((item) => {
        const isSelected = selectItems.includes(item.id);
        return (
          <WrapperCheckBox key={item.id} onClick={() => handleToggle(item.id)}>
            <PlaceCardCheckbox />
          </WrapperCheckBox>
        );
      })}
    </>
  );
};
