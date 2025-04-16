import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 12px;
  flex: 1 0 0;
  height: 80px; // Set a fixed height for the entire component
`;

const ImageWrapper = styled.div`
  flex: 0 0 80px; // Fixed width for the image
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  overflow: hidden;
  color: #424242;
`;

const EventName = styled.p`
  margin: 0;
  color: #958a8a;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EventTime = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

const EventPrice = styled.span`
  margin-left: 8px;
  color: #424242;
  font-size: 14px;
  font-weight: 600;
`;

const EventDesc = styled.p`
  text-overflow: ellipsis;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin: 0;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
`;

export const EventDateStyle = styled.p`
  margin: 0;
  margin-bottom: 16px;
  color: #424242;
  font-size: 18px;
  font-weight: 700;
`;

export function EventCart() {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image
            src="https://yandex-images.clstorage.net/9o74ivO15/c9876bbR/47JPeUb5j1kyuLI0EOyvm59OfyuHBulGcd5ucSHm9gEJpdgHATbGiL94S16cxlImz9kmFdlTCyKERZ5mZDsDAca2Kk1TnZv41rhj0OEM7k8OX3qbt3aZ1gH76wcCAbEGr3JuINN0YWyvPT4ejVeGV8kPhxJ9Nt6URoWYQJb7kpQTA8zKxir-n-AaYGKQ3u1YnQ3rKvXnb5TEnBxGMNODlRwx_6Kht9MP7h9OTJ_TJiaJnGNAfxatVPZXixF1CpN1gzPNyhQKToyT6sOCsG-_G20--2glFK72h02PtVJS8XQc8qwAASZRva2tz39_svU2K96Dsw53HFbEtjhR92iQNfIhb-iUut3t4IlhYcFdninPXXubxGVPlaa-bqazo1C0TmOfkvF10p4_v70eDiIENjt_cIMuZ893tzQoIdaa4oaS0f9KNfvP7VIq03HgPH8rP7zYq6fmvVWW7O2WIXGRpO_iLiJTR_Hcrq89XH-iBeeI3hOQ3gfPFfRUKOO26sFlARK9-WYq_25SeDHTck3fmN2tGou0B47lZo5e1mMxMiYsknySUAXQ3bwtnH6PouQ3mN6xgA9UfCU3VDkDlUkSFQMDzzp2-N3tMquRwgBtLbit_WjZJnfN9lbtv7Rys4KVvLL_UiNGwe1t_T89_1O3Rkqd8TGd9owUtBdYMWea4TVCMX8LZ3gcnwIY0XPD_Azrjh_ausd0LBfFrFxG0NPiF88TvTPDZOCtf78On42jxwSLvOOybAa_NfdmGxI22wL3U5J92WeK_V8g-NHgYT2cao3u24p0NS0GpUzuF9OQ4YZM0sxxImZxDc5dPc6dwgZnuJ0zQk5ELIaWRJvRJJgBNGDiH4g1avwO01jRciMsz1uMX3tKRddO17at3GYBAAHXDaJ_EnCHcZ8OLW6N71BHVZhckYONNL9Gdpb5wlSZouRw8E5Zh0p9HQEbwbAR_i8rTTy5q-UnH5W2DG1kYqHR4"
            alt="Event"
          />
        </ImageWrapper>
        <TextWrapper>
          <EventTime>10:00</EventTime>
          <EventName>
            Концерт <EventPrice>от 900 ₽</EventPrice>
          </EventName>
          <EventDesc>Событие в 1 строку сокращение</EventDesc>
          <EventName>Свердлова 9, Ялта</EventName>
        </TextWrapper>
      </Wrapper>
    </>
  );
}
