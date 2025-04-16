




export function ArrowRightV2({ color, openDrawer }: { color: string; openDrawer?: () => void }): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" onClick={openDrawer}>
      <g clip-path="url(#clip0_1513_336001)">
        <path
          d="M5.75 13.59L10.3856 9L5.75 4.41L7.17713 3L13.25 9L7.17713 15L5.75 13.59Z"
          fill={color ? color : '#00A3FF'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1513_336001">
          <rect width="18" height="18" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
