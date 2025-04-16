import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';

import PrivateEventBottomDrawer from '../shared/event-private-drawer';
import { InputEvent } from '../shared/input-event';

export const EventPrivate = () => {
  const [inputValue, setInputValue] = React.useState('Открытое');
  return (
    <PrivateEventBottomDrawer setInputValue={setInputValue}>
      <InputEvent
        icon={<ArrowRightV2 color="#958A8A" />}
        title="Приватность события"
        value={inputValue}
        paragraph={true}
        />
    </PrivateEventBottomDrawer>
  );
};
