import { IconWrapper } from '../marker-drawer/arrow-left';


export function ActionIcon({ color, isScroll }: { color: string; isScroll: boolean }): React.JSX.Element {
  return (
    <IconWrapper isScroll={isScroll}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_40000022_43925)">
          <path
            d="M2.52985 19.65L3.86985 20.21V11.18L1.43986 17.04C1.02986 18.06 1.51985 19.23 2.52985 19.65ZM22.0299 15.95L17.0699 3.98C16.7599 3.23 16.0299 2.77 15.2599 2.75C14.9999 2.75 14.7299 2.79 14.4699 2.9L7.09985 5.95C6.34985 6.26 5.88985 6.98 5.86985 7.75C5.85985 8.02 5.90985 8.29 6.01986 8.55L10.9799 20.52C11.2899 21.28 12.0299 21.74 12.8099 21.75C13.0699 21.75 13.3299 21.7 13.5799 21.6L20.9399 18.55C21.9599 18.13 22.4499 16.96 22.0299 15.95ZM12.8299 19.75L7.86985 7.79L15.2199 4.75H15.2299L20.1799 16.7L12.8299 19.75Z"
            fill={color}
          />
          <path
            d="M5.87988 19.7502C5.87988 20.8502 6.77988 21.7502 7.87988 21.7502H9.32988L5.87988 13.4102V19.7502Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000022_43925">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
