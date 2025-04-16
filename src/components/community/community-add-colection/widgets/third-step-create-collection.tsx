import { useState } from 'react';

import { FixedButton } from '../../community-add-event/shared/fixed-button';
import { CustomPlacesInCollection } from '../../constants';
import {  SearchInputEventOrPlace } from '../../shared/search-custom-input';
import { PlaceCardProps } from '../shared/place-card-in-collection';
import { PlacesCollectionCheckBox } from '../shared/place-collection-checkbox';

export const ThirdStepCreateCollection = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState<PlaceCardProps[]>(CustomPlacesInCollection);
  const [selectItems, setSelectItems] = useState<number[]>([]);

  function filterItems(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setSearchValue(newValue);

    if (!newValue) {
      setItems(CustomPlacesInCollection);
      return;
    }

    const filteredItems = CustomPlacesInCollection.filter(
      (item) =>
        item.placeName.toLowerCase().includes(newValue.toLowerCase()) ||
        item.type.toLowerCase().includes(newValue.toLowerCase())
    );
    setItems(filteredItems);
  }

  return (
    <div style={{ marginBottom: '60px' }}>
      <SearchInputEventOrPlace value={searchValue} onChange={filterItems} />
      <PlacesCollectionCheckBox cards={items} selectItems={selectItems} setSelectItems={setSelectItems} />
      <FixedButton text="Добавить подборку" onClick={closeDrawer} />
    </div>
  );
};
