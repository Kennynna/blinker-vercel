import { useState } from 'react';
import styled from '@emotion/styled';
import { Stack } from '@mui/material';

import { UserAvatar } from '../../shared/avatar';
import { LinkCopy } from './link-copy';

const Wrapper = styled.div`
  margin-bottom: 76px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// Props юзеры, searchvalue,
export const EventUserList = ({ users }: { users: any[] }) => {
  const [userSelected, setUserSelected] = useState<Record<string, boolean>>({});
  
  // Функция переключения выбора пользователя
  const toggleUserSelected = (userId: string) => {
    setUserSelected((prev) => ({
      ...prev,
      [userId]: !prev[userId], // Переключаем состояние конкретного пользователя
    }));
  };

  return (
    <Wrapper>
      <LinkCopy />
      {users.map((user) => (
        <UserCard
          key={user.id}
          imgUrl={user.imgUrl}
          alt={user.name}
          userName={user.name}
          isSelected={!!userSelected[user.id]}
          clickHandler={() => toggleUserSelected(user.id)}
        />
      ))}
    </Wrapper>
  );
};
const UserName = styled.p`
  flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #424242;

  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const UserButton = styled.button<{ isSelected?: boolean }>`
  border-radius: 39px;
  background: ${({ isSelected }) => (isSelected ? '#00a3ff' : '#FFF')};
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? '#FFF' : '#424242')};

  font-size: 14px;
  font-weight: 600;
  border: none;
`;

interface UserCardProps {
  imgUrl?: string;
  alt?: string;
  userName?: string;
  isSelected: boolean;
  clickHandler?: () => void;
}

export const UserCard = ({ imgUrl, alt, userName, isSelected, clickHandler }: UserCardProps) => {
  return (
    <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
      <UserAvatar imgUrl={imgUrl} alt={alt} />
      <UserName>{userName}</UserName>
      <UserButton isSelected={isSelected} onClick={clickHandler}>
        {isSelected ? 'Приглашен' : 'Пригласить'}
      </UserButton>
    </Stack>
  );
};
