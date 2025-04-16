import styled from '@emotion/styled';

import { Title } from '../body/about/title';
import { Organization } from '../participant-drawer';

const Container = styled.div`
  margin-top: 24px;
`;
const List = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const EventOrganizations = () => {
  return (
    <Container>
      <Title title="Организация" />
      <List>
        <Organization />
      </List>
    </Container>
  );
};
