import React from 'react';

import { Title } from '../drawer/marker-drawer-components/body/about/title';
import { TabEvents } from './tab-events';

export const CommunityEvents = () => {
  return (
    <div>
      <Title title="События" id="events" />
      <TabEvents />
    </div>
  );
};
