import React from 'react';
import Box from '@mui/material/Box';

import { InfoIcon } from '../../icons/info';
import IOSSwitch from '../../shared/switch';
import { InputTitle, Section, SectionText, SelectableField } from './info-list';
import PrivateBottomDrawer from './private-drawer';

export const Private = () => {
  return (
    <Section>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <InputTitle>Приватность</InputTitle>
        <PrivateBottomDrawer>
          <InfoIcon />
        </PrivateBottomDrawer>
      </Box>
      <SelectableField>
        <SectionText>Скрыть меня из создателей</SectionText>
        <IOSSwitch />
      </SelectableField>
    </Section>
  );
};
