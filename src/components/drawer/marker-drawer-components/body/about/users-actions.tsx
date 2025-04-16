import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';





const Wrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UsersActions = ({ actions } : { actions: object }) => {
  return (
    <Wrapper>
      <Views views={actions.views}/>
      <Likes likes={actions.likes}/>
      <Comments comments={actions.comments}/>
      <Reposts reposts={actions.reposts}/>
    </Wrapper>
  );
};

const Quantity = styled.p`
  margin: 0;
  color: #958a8a;
  font-size: 14px;
  font-weight: 400;
`;
export const Views = ({views} : {views: number}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <g clip-path="url(#clip0_1846_145047)">
          <path
            d="M8 4.5C5.27273 4.5 2.94364 6.15867 2 8.5C2.94364 10.8413 5.27273 12.5 8 12.5C10.7273 12.5 13.0564 10.8413 14 8.5C13.0564 6.15867 10.7273 4.5 8 4.5ZM8 11.1667C6.49455 11.1667 5.27273 9.972 5.27273 8.5C5.27273 7.028 6.49455 5.83333 8 5.83333C9.50545 5.83333 10.7273 7.028 10.7273 8.5C10.7273 9.972 9.50545 11.1667 8 11.1667Z"
            fill="#958A8A"
          />
          <circle cx="7.99935" cy="8.49935" r="1.33333" fill="#958A8A" />
        </g>
        <defs>
          <clipPath id="clip0_1846_145047">
            <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
      <Quantity>{views}</Quantity>
    </Box>
  );
};

export const Likes = ({likes} : {likes: number}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <g clip-path="url(#clip0_1846_145051)">
          <path
            d="M2.66602 12.4993H4.60541V6.89935H2.66602V12.4993ZM13.3327 7.36602C13.3327 6.85268 12.8963 6.43268 12.363 6.43268H9.30359L9.7642 4.30002L9.77874 4.15068C9.77874 3.95935 9.69632 3.78202 9.56541 3.65602L9.05147 3.16602L5.86117 6.24135C5.68177 6.40935 5.57511 6.64268 5.57511 6.89935V11.566C5.57511 12.0793 6.01147 12.4993 6.5448 12.4993H10.9084C11.3109 12.4993 11.6551 12.266 11.8006 11.93L13.2648 8.64002C13.3084 8.53268 13.3327 8.42068 13.3327 8.29935V7.36602Z"
            fill="#958A8A"
          />
        </g>
        <defs>
          <clipPath id="clip0_1846_145051">
            <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
      <Quantity>{likes}</Quantity>
    </Box>
  );
};

export const Comments = ({comments} : {comments: number}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <g clip-path="url(#clip0_1846_145055)">
          <path
            d="M11.734 3.83398H4.26732C3.75398 3.83398 3.33398 4.25398 3.33398 4.76732V13.1673L5.86732 9.96732H11.734C12.2473 9.96732 12.6673 9.54732 12.6673 9.03398V4.76732C12.6673 4.25398 12.2473 3.83398 11.734 3.83398Z"
            fill="#958A8A"
          />
        </g>
        <defs>
          <clipPath id="clip0_1846_145055">
            <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
      <Quantity>{comments}</Quantity>
    </Box>
  );
};

export const Reposts = ({reposts} : {reposts: number}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', margin: '0' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <path
          d="M7.33333 4.3V1.5L12 6.4L7.33333 11.3V8.43C4 8.43 1.66667 9.55 0 12C0.666666 8.5 2.66667 5 7.33333 4.3Z"
          fill="#958A8A"
        />
      </svg>
      <Quantity>{reposts}</Quantity>
    </Box>
  );
};
