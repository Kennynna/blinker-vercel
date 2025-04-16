'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const OuterContainer = styled.div`
  border-radius: 16px;
  background: #fff;
  display: flex;
  width: 100%;
  height: 224px;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
`;

const WrapperIcon = styled.div`
  display: flex;
  width: 224px;
  height: 224px;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: #f9f9f9;
`;

const IconContainer = styled.div`
  border-radius: 83px;
  background: #fff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;

const PreviewImage = styled.img`
  width: 192px;
  height: 192px;
  object-fit: cover;
  border-radius: 16px;
  flex-shrink: 0;
`;

export const PhotoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
    <g clipPath="url(#clip0_2398_281599)">
      <path
        d="M25.3333 9.83268V13.8193C25.3333 13.8193 22.68 13.8327 22.6667 13.8193V9.83268H18.6667C18.6667 9.83268 18.68 7.17935 18.6667 7.16602H22.6667V3.16602H25.3333V7.16602H29.3333V9.83268H25.3333ZM21.3333 15.166V11.166H17.3333V7.16602H6.66667C5.2 7.16602 4 8.36602 4 9.83268V25.8327C4 27.2993 5.2 28.4993 6.66667 28.4993H22.6667C24.1333 28.4993 25.3333 27.2993 25.3333 25.8327V15.166H21.3333ZM6.66667 25.8327L10.6667 20.4993L13.3333 24.4993L17.3333 19.166L22.6667 25.8327H6.66667Z"
        fill="#00A3FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_2398_281599">
        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`;

const Swiper = styled.div`
  display: inline-flex;
  gap: 16px;
  height: 100%;
  padding: 0 16px;
`;

const IconPlusContainer = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 83px;
  background: #fff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  z-index: 2;
`;

export function IconPlus({ onClick }: { onClick?: () => void }) {
  return (
    <IconPlusContainer onClick={onClick ? onClick : undefined}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_2398_281811)">
          <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#00A3FF" />
        </g>
        <defs>
          <clipPath id="clip0_2398_281811">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconPlusContainer>
  );
}

export function PhotoUpload() {
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null); // Создаём ref для input

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));

      Promise.all(
        imageFiles.map(
          (file) =>
            new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(file);
            })
        )
      )
        .then((results) => {
          setPreviews((prev) => [...prev, ...results]); // Добавляем новые фото, а не заменяем
        })
        .catch((error) => {
          console.error('Ошибка при чтении файлов:', error);
        });
    }
  };

  return (
    <OuterContainer>
      {previews.length === 0 ? (
        <>
          <WrapperIcon>
            <IconContainer>
              <PhotoIcon />
            </IconContainer>
            <Box sx={{ color: '#333', fontSize: '14px', zIndex: 1, fontWeight: '600' }}>Выбор фото</Box>
          </WrapperIcon>
          <HiddenInput ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileChange} />
        </>
      ) : (
        <SwiperContainer>
          <Swiper>
            {previews.map((preview, index) => (
              <PreviewImage key={index} src={preview} alt={`preview-${index}`} />
            ))}
          </Swiper>
          <IconPlus onClick={(e) => handleFileChange(e)} />
        </SwiperContainer>
      )}
    </OuterContainer>
  );
}
