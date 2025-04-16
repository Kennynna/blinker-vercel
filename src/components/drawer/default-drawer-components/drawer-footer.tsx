'use client';

import { useState } from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';

const Container = styled.div<{ fullOpen?: boolean }>`
  border-top: 0.0625rem solid #f0f0f0;
  z-index: ${(props) => (props.fullOpen ? 10 : 2)};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  padding: 0.4375rem 0;
  padding-bottom: 16px;
`;

export function DrawerFooter({ drawerState }: { drawerState?: string }) {
  const { item } = useDrawerValue();
  if (item !== null) {
    return null;
  }
  const isDrawerPartiallyOpen = drawerState !== 'fullOpen';

  return isDrawerPartiallyOpen ? (
    <Container fullOpen={isDrawerPartiallyOpen}>
      <Ticket />
      <Want />
      <Group />
      <Profile />
    </Container>
  ) : null;
}

const IconBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4rem; // Adjust this value to control icon size
`;

const IconWrapper = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem; // Adjust this value to control icon size
  height: 2.5rem; // Adjust this value to control icon size
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#007AFF' : 'transparent')};
  cursor: pointer; // Add cursor pointer for better UX
  transition: background-color 0.3s ease; // Add smooth transition

  & > svg {
    fill: ${(props) => (props.active ? 'white' : '#B7AEAE')}; // Change icon color on active
  }
`;

const IconTitle = styled.p<{ active?: boolean }>`
  color: ${(props) => (props.active ? '#007AFF' : '#958a8a')};
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;

export function Ticket() {
  const [active, setActive] = useState(false);
  return (
    <IconBlock>
      <IconWrapper active={active} onClick={() => setActive(!active)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <g clipPath="url(#clip0_911_26253)">
            <path
              d="M22.8 16.5C22.8 15.8825 23.1655 15.3462 23.701 15.07C24.211 14.8019 24.5 14.2494 24.5 13.6888V11.625C24.5 10.7312 23.735 10 22.8 10H9.2C8.265 10 7.5085 10.7231 7.5085 11.6169V13.6888C7.5085 14.2494 7.789 14.8019 8.3075 15.0619C8.843 15.3462 9.2 15.8825 9.2 16.5C9.2 17.1175 8.8345 17.6619 8.299 17.93C7.789 18.1981 7.5 18.7506 7.5 19.3112V21.375C7.5 22.2688 8.265 23 9.2 23H22.8C23.735 23 24.5 22.2688 24.5 21.375V19.3112C24.5 18.7506 24.211 18.1981 23.701 17.93C23.1655 17.6538 22.8 17.1175 22.8 16.5ZM18.125 19.8313L16 18.5312L13.875 19.8394C13.552 20.0344 13.1355 19.75 13.2375 19.3925L13.875 17.0525L11.92 15.525C11.8538 15.4728 11.8056 15.4027 11.7816 15.3239C11.7577 15.2451 11.7591 15.1612 11.7857 15.0832C11.8123 15.0052 11.8628 14.9366 11.9307 14.8865C11.9987 14.8363 12.0808 14.8068 12.1665 14.8019L14.6825 14.6637L15.6005 12.4294C15.745 12.0881 16.255 12.0881 16.391 12.4294L17.309 14.6719L19.825 14.81C20.2075 14.8344 20.369 15.2975 20.0715 15.5331L18.1165 17.0606L18.7625 19.3844C18.8645 19.75 18.448 20.0344 18.125 19.8313Z"
              fill={active ? 'white' : '#B7AEAE'}
            />
          </g>
          <defs>
            <clipPath id="clip0_911_26253">
              <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
      </IconWrapper>
      <IconTitle active={active}>Билеты</IconTitle>
    </IconBlock>
  );
}

export function Want() {
  const [active, setActive] = useState(false);
  return (
    <IconBlock>
      <IconWrapper active={active} onClick={() => setActive(!active)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
          <g clipPath="url(#clip0_912_37486)">
            <path
              d="M9.26217 13.5227L4.73692 12.1453V2.47904L9.26217 3.85545V13.5227ZM10.0164 3.79473L13.012 2.51918C13.3844 2.36111 13.7874 2.6524 13.7874 3.07843V11.4779C13.7874 11.7238 13.646 11.9446 13.4315 12.0374L10.0164 13.4901V3.79473ZM0.567326 3.96434L3.98271 2.51015V12.2055L0.987326 13.4826C0.615879 13.6406 0.21167 13.3496 0.21167 12.9231V4.52309C0.21167 4.27721 0.352495 4.05592 0.567326 3.96434Z"
              fill={active ? 'white' : '#B7AEAE'}
            />
          </g>
          <defs>
            <clipPath id="clip0_912_37486">
              <rect width="13.5758" height="14.4516" fill="white" transform="translate(0.21167 0.774414)" />
            </clipPath>
          </defs>
        </svg>
      </IconWrapper>
      <IconTitle active={active}>Хочу</IconTitle>
    </IconBlock>
  );
}

export function Group() {
  const [active, setActive] = useState(false);
  return (
    <IconBlock>
      <IconWrapper active={active} onClick={() => setActive(!active)}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5 11C18.16 11 19.49 9.66 19.49 8C19.49 6.34 18.16 5 16.5 5C14.84 5 13.5 6.34 13.5 8C13.5 9.66 14.84 11 16.5 11ZM8.5 11C10.16 11 11.49 9.66 11.49 8C11.49 6.34 10.16 5 8.5 5C6.84 5 5.5 6.34 5.5 8C5.5 9.66 6.84 11 8.5 11ZM8.5 13C6.17 13 1.5 14.17 1.5 16.5V19H15.5V16.5C15.5 14.17 10.83 13 8.5 13ZM16.5 13C16.21 13 15.88 13.02 15.53 13.05C16.69 13.89 17.5 15.02 17.5 16.5V19H23.5V16.5C23.5 14.17 18.83 13 16.5 13Z"
            fill={active ? 'white' : '#B7AEAE'}
          />
        </svg>
      </IconWrapper>
      <IconTitle active={active}>Сообщества</IconTitle>
    </IconBlock>
  );
}

export function Profile() {
  const [active, setActive] = useState(false);
  return (
    <IconBlock>
      <IconWrapper active={active} onClick={() => setActive(!active)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <g clipPath="url(#clip0_912_37491)">
            <path
              d="M16 17C17.7956 17 19.25 15.5456 19.25 13.75C19.25 11.9544 17.7956 10.5 16 10.5C14.2044 10.5 12.75 11.9544 12.75 13.75C12.75 15.5456 14.2044 17 16 17ZM16 18.625C13.8306 18.625 9.5 19.7137 9.5 21.875V23.5H22.5V21.875C22.5 19.7137 18.1694 18.625 16 18.625Z"
              fill={active ? 'white' : '#B7AEAE'}
            />
          </g>
          <defs>
            <clipPath id="clip0_912_37491">
              <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
      </IconWrapper>
      <IconTitle active={active}>Профиль</IconTitle>
    </IconBlock>
  );
}
