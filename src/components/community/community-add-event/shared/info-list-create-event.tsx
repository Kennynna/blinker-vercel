import { useState } from 'react';
import styled from '@emotion/styled';

import LeftSideDrawer from '../../community-add-palce-steps/third-step/left-drawer';
import BottomInfoDrawer from '../../community-add-palce-steps/third-step/notes-info-botom-drawer';
import { OtherInfo } from '../../community-add-palce-steps/third-step/other-info/other-info';
import { Private } from '../../community-add-palce-steps/third-step/private';
import { LeftDrawerInput } from './left-drawer-input';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 90px;
`;
export const InfoListCreateEvent = () => {
  const [notes, setNotes] = useState('');
  const [descPlace, setDescPlace] = useState('');
  const [think, setThink] = useState('');
  return (
    <Container>
      <LeftDrawerInput
        inputValue={descPlace}
        setInputValue={setDescPlace}
        headerTitle="Описание"
        placeholder="Расскажите о месте"
        inputTitle="Описание"
        limit={1000}
      />

      <LeftDrawerInput
        inputValue={notes}
        setInputValue={setNotes}
        headerTitle='Заметка'
        inputTitle="Заметка"
        placeholder="Ваши впечатления, советы, мнение"
        childrenDrawer={<BottomInfoDrawer />}
        limit={100}
      />

      <LeftDrawerInput
        inputValue={think}
        setInputValue={setThink}
        headerTitle="Исполнители"
        placeholder="Ваши впечатления, советы, мнение"
        inputTitle="Исполнители"
        limit={100}
      />
      <OtherInfo />
      <Private />
    </Container>
  );
};
