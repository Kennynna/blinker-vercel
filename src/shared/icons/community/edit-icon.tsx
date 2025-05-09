import { IconWrapper } from '../marker-drawer/arrow-left';

export function EditIcon({ color, isScroll }: { color: string; isScroll?: boolean }): React.JSX.Element {
  return (
    <IconWrapper isScroll={isScroll}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_40000012_66523)">
          <path
            d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
            fill={isScroll ? '#00A3FF' : 'white'}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000012_66523">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}

export function EditIconV2({ color }: { color: string }): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_40000012_66523)">
        <path
          d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
          fill={color ? color : '#00A3FF'}
        />
      </g>
      <defs>
        <clipPath id="clip0_40000012_66523">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
