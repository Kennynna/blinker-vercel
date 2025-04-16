import styled from '@emotion/styled';

import { EventCart } from '../../default-drawer-components/event-card';
import { OrganizationCard } from './organization-card';

const Wrapper = styled.div`
  padding: 12px 16px;
  position: relative;
  color: #424242;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  align-items: center;
`;
const Title = styled.p`
  margin: 0;
`;

const Desc = styled.p`
  margin: 0;
  color: #958a8a;
  font-size: 14px;
  font-weight: 600;
`;

const Icon = styled.div`
  margin: 0;
  border-radius: 39px;
  background: #f9f9f9;
  display: flex;
  width: 36px;
  height: 36px;
  padding: 8px;
  align-items: center;
`;

const Date = styled.p`
  margin: 0;
  margin-top: 24px;
  color: #424242;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;
const List = styled.div`
  margin: 0;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export function DrawerOrganizationsItems({ name = 'Организация' }) {
  return (
    <Wrapper>
      <Header>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_40000025_179512)">
              <path
                d="M14.1665 4.89984L9.01581 9.99984L14.1665 15.0998L12.5808 16.6665L5.83317 9.99984L12.5808 3.33317L14.1665 4.89984Z"
                fill="#00A3FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_40000025_179512">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Icon>
        <div>
          <Title>{name}</Title>
          <Desc>3 места</Desc>
        </div>
        <div></div>
      </Header>

      <List>
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
      </List>
    </Wrapper>
  );
}
