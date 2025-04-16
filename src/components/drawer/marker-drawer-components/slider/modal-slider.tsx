import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const style = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  bgcolor: 'black',
  border: '2px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 375x;

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.8;
  }

  .swiper-pagination-bullet-active {
    background-color: #007aff;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }

  .swiper-pagination-bullet {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    top: 10px;
    pointer-events: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 375px;
  object-fit: cover;
  object-position: center;
`;

interface Props {
  images?: string[];
  isOpen: boolean;
  handleCloseModal: () => void;
}

export default function SwiperModal({ images, isOpen, handleCloseModal }: Props) {
  return (
    <div>
      <Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box
            sx={{
              height: '375px',
              width: '100%',
            }}
          >
            <svg
              onClick={handleCloseModal}
              style={{ position: 'absolute', top: '16px', left: '16px', pointerEvents: 'auto' }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_40000064_58447)">
                <path d="M19 11H8.83L13.41 6.41L12 5L5 12L12 19L13.41 17.59L8.83 13H19V11Z" fill={'white'} />
              </g>
              <defs>
                <clipPath id="clip0_40000064_58447">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <StyledSwiper modules={[Pagination]} spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
              {images?.map((url, index) => (
                <SwiperSlide key={index} onClick={() => console.log('click slide')}>
                  <Image src={url} alt={`Изображение ${index + 1}`} />
                </SwiperSlide>
              ))}
            </StyledSwiper>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
