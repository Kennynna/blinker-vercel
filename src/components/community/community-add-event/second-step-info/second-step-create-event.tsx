import styled from '@emotion/styled';

import { FixedButton } from '../shared/fixed-button';
import { EventDate } from './event-date';
import { EventName } from './event-name';
import { EventPrivate } from './event-private';
import { EventTime } from './time';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 90px;
`;

export const SecondStepCreateEvent = ({ stepNext }: { stepNext: () => void }) => {
  // Здесь или в глобал стейте нужно добавить хуки сохранения инфы о событии имя, дата, время и передавать через пропсы 
  return (
    <Container>
      <EventName />
      <EventDate />
      <EventTime />
      <EventPrivate />
      <FixedButton text="Далее" onClick={stepNext} />
    </Container>
  );
};
