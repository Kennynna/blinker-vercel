import type React from 'react';
import styled from '@emotion/styled';
import Map from 'react-map-gl/maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';

import { ArrowLeft } from '@/shared/icons/marker-drawer';

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MapContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MapButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 16px;
  right: 16px;
  border-radius: 39px;
  background: #00a3ff;
  z-index: 1000;
  padding: 12px 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;
  z-index: 1000;
`;

interface MapOverlayProps {
  onClose: () => void;
}

export const MapOverlay: React.FC<MapOverlayProps> = ({ onClose }) => {
  return (
    <OverlayWrapper>
      <ArrowWrapper onClick={onClose}>
        <ArrowLeft />
      </ArrowWrapper>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <Map
        initialViewState={{
          zoom: 12,
          longitude: 34.10242,
          latitude: 44.95212,
        }}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=dzsJF0cNjmAHisl4dUlB"
        style={{ width: '100%', height: '100vh' }}
      ></Map>
      <MapButton onClick={onClose}>Выбрать</MapButton>
    </OverlayWrapper>
  );
};
