import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';



import OtherInfoBottomDrawer from './other-info-bottom-drawer';
import OtherInfoDrawer from './other-info-drawer';


const SelectableField = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 14px;

  >p {
    color: #424242;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    min-width: 0;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputTitle = styled.h3`
  color: #958a8a;
  font-weight: 600;
  font-size: 14px;
`;

const InfoText = styled.p`
  overflow: hidden;
  color: #958a8a !important;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OtherInfo = () => {
  const [otherInfo, setOtherInfo] = React.useState({
    phone: '',
    site: '',
    socials: [],
  });

  const haveInfo = otherInfo.phone || otherInfo.site || otherInfo.socials.length > 0;

  return (
    <OtherInfoDrawer title="Дополнительные сведения" setOtherInfo={setOtherInfo} otherInfo={otherInfo} infoDrawer={<OtherInfoBottomDrawer/>} >
      <Section>
        <InputTitle>Дополнительные сведения</InputTitle>
        {!haveInfo && (
          <SelectableField>
            <InfoText>Телефон, сайт, ссылки </InfoText>
            <ArrowRightV2 color="#958A8A" />
          </SelectableField>
        )}
      </Section>

      {haveInfo && (
        <Section>
          {otherInfo.phone && (
            <SelectableField>
              {otherInfo.phone} <ArrowRightV2 color="#958A8A" />
            </SelectableField>
          )}
          {otherInfo.site && (
            <SelectableField>
              {otherInfo.site}
              <ArrowRightV2 color="#958A8A" />
            </SelectableField>
          )}
          {otherInfo.socials.map((item, index) => (
            <SelectableField key={index}>
              {item} <ArrowRightV2 color="#958A8A" />
            </SelectableField>
          ))}
        </Section>
      )}
    </OtherInfoDrawer>
  );
};
