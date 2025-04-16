import { useState } from 'react';

import { users_data } from '../../constants';
import { SearchInput } from '../../shared/search-custom-input';
import { EventUserList } from './event-user-list';
import { FixedButton } from './fixed-button';

export const FourStepCreateEvent = ({ stepNext }: { stepNext?: () => void }) => {
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState(users_data);
  function filterUsers(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value; // Берем новое значение из инпута
    setSearchValue(newValue); // Обновляем состояние

    if (!newValue) {
      setUsers(users_data);
      return;
    }
    const filteredUsers = users_data.filter(
      (user) => user.name.toLowerCase().includes(newValue.toLowerCase()) // Используем новое значение напрямую
    );
    setUsers(filteredUsers);
  }

  return (
    <>
      <SearchInput value={searchValue} onChange={(e) => filterUsers(e)} />
      <EventUserList users={users} />
      <FixedButton text="Создать событие" onClick={stepNext} />
    </>
  );
};
