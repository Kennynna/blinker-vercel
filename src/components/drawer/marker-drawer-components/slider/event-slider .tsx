'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';

import { useCategoryById } from '@/hooks/filters/use-all-filters';
import SwiperModal from '@/components/drawer/marker-drawer-components/slider/modal-slider';

import { EventButtons } from '../body/place-buttons';
import { EventTopIcons } from '../event-drawer/event-top-icons';

interface PlacementProps {
  isScroll: boolean;
}

const EventName = styled.h2<PlacementProps>`
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: ${(props) => (props.isScroll ? '16px' : '1.5rem')};
  color: ${(props) => (props.isScroll ? '#424242' : '#fff')};
  margin-top: 12px;
`;
const EventLocation = styled.h2`
  margin-top: 6px;
  margin-bottom: 12px;
  padding: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

const ImageBlock = styled.div`
  top: 0;
  width: 100%;
  height: 35vh;
  z-index: 10;
`;

const ImageContent = styled.div`
  height: 35vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  pointer-events: none;
`;

const PlaceDescription = styled.p`
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.7);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.5);
  padding: 4px 12px;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
`;
const Price = styled.span`
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.7);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.7);
  padding: 4px 12px;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
`;
const Discount = styled.span`
  border-radius: 32px;
  background: #00a3ff;
  padding: 4px 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 35vh;
  pointer-events: true;

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
    top: 25px;
    pointer-events: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
`;

const QuantityBlock = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const QuantityTitle = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

const Quantity = styled.p`
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

interface ImageSliderProps {
  item: any;
  isScrolled: boolean;
  address: string;
  name: string;
  categoryArray: string[];
}

export function EventSlider({ item, isScrolled, address, name, categoryArray }: ImageSliderProps) {
  const { data: categories, isLoading } = useCategoryById(categoryArray);

  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <ImageBlock>
      <ImageContent>
        <EventTopIcons isScrolled={isScrolled} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {categories?.map((category) => <Price>{category.name}</Price>)}
          </div>
          <SwiperModal
            images={[
              'https://sn.kz/cache/imagine/main_page_full/uploads/news/2022/09/28/63334dcd060ea102234999.jpg ',
              'https://biz-nes.ru/wp-content/uploads/2022/06/Novyj-proekt-21.jpg',
            ]}
            isOpen={modalOpen}
            handleCloseModal={handleCloseModal}
          />
          <EventName isScroll={isScrolled}>{name}</EventName>
          <EventLocation>5 км от вас · {address} </EventLocation>
          <EventButtons isScrolled={isScrolled} />
        </div>
      </ImageContent>
      <StyledSwiper modules={[Pagination]} spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
        {[
          'https://sn.kz/cache/imagine/main_page_full/uploads/news/2022/09/28/63334dcd060ea102234999.jpg ',
          'https://biz-nes.ru/wp-content/uploads/2022/06/Novyj-proekt-21.jpg',
        ]?.map((url, index) => (
          <SwiperSlide key={index}>
            <Image src={url} alt={`Изображение ${index}`} onClick={() => setModalOpen(true)} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </ImageBlock>
  );
}
