
export const InputCloseIcon = ({ click }: { click?: () => void }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={click}>
      <g clip-path="url(#clip0_2398_280676)">
        <rect width="24" height="24" fill="#F9F9F9" />
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="#958A8A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2398_280676">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
