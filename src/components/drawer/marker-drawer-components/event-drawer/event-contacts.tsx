import styled from '@emotion/styled';

import { EventDetails } from '../../map-item-details';
import { Title } from '../body/about/title';

const ContactsBlock = styled.div`
  margin-top: 24px;
`;

export const EventContacts = () => {
  return (
    <ContactsBlock>
      <Title title="Контакты" id="Контакты" />

      <EventDetails description="+8 123 456 78 91" title="Телефон " />
      <EventDetails description="https://yaltago.ru/restaurants/gussi" title="Сайт " />
    </ContactsBlock>
  );
};
