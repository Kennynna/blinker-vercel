'use client';

import * as React from 'react';
import type { EntityItem } from '@/constants/markeritems';
import { useActiveMarker } from '@/shared/store/avtive-marker';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Marker } from 'react-map-gl/maplibre';
import { Discount } from './discount';

interface CustomMarkerProps {
  color: string;
  item: EntityItem;
}

const ItemName = styled.p`
  margin: 0;
  color: #424242;
  text-align: center;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ClusterQuantity = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 26px;
`;

export function CustomMarker({ color, item }: CustomMarkerProps) {
  const { markerValue, setActiveMarker } = useActiveMarker();
  const { setMarkerMarkerClick, setItemType } = useDrawerValue();

  const clickPlace = React.useCallback(() => {
    setItemType('PLACE');
    setActiveMarker(item.id);
    setMarkerMarkerClick(item);
  }, [item, setActiveMarker, setMarkerMarkerClick]);

  const clickEvent = React.useCallback(() => {
    setItemType('EVENT');
    setActiveMarker(item.id);
    setMarkerMarkerClick(item);
  }, [item, setActiveMarker, setMarkerMarkerClick]);

  const content = React.useMemo(() => {
    if (item.type === 'EVENT') {
      const event = item;
      return (
        <Marker color={color} latitude={event.latitude} longitude={event.longitude} onClick={clickEvent}>
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              maxHeight: '75px',
              maxWidth: '75px',
              boxShadow:
                markerValue === event.id
                  ? '0px 0px  0.625rem 0px  #02F, 0px 0px 0.375rem 0px rgba(0, 0, 0, 0.50) inset'
                  : '',
              borderRadius: '1rem',
            }}
          >
            <img
              alt="marker"
              height={75}
              src={event.map_picture.uri}
              style={{
                borderRadius: '1rem',
                backgroundSize: 'cover',
                objectFit: 'cover',
              }}
              width={75}
            />
            <ItemName>{event.name}</ItemName>
          </Box>
        </Marker>
      );
    }

    if (item.type === 'PLACE') {
      const place = item;
      return (
        <Marker color={color} latitude={place.latitude} longitude={place.longitude} onClick={clickPlace}>
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              maxHeight: '75px',
              maxWidth: '75px',
              boxShadow:
                markerValue === place.id
                  ? '0px 0px  0.625rem 0px  #02F, 0px 0px 0.375rem 0px rgba(0, 0, 0, 0.50) inset'
                  : '',
              borderRadius: '1rem',
            }}
          >
            <img
              alt="marker"
              height={75}
              src={place.map_picture.uri}
              style={{
                borderRadius: '1rem',
                backgroundSize: 'cover',
                objectFit: 'cover',
              }}
              width={75}
            />
            <ItemName>{place.name}</ItemName>
          </Box>
        </Marker>
      );
    }

    if (item.type === 'CLUSTER') {
      const cluster = item;
      return (
        <Marker color={color} latitude={cluster.latitude} longitude={cluster.longitude} onClick={clickEvent}>
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              height: '75px',
              width: '75px',
              boxShadow:
                markerValue === cluster.id
                  ? '0px 0px  0.625rem 0px  #02F, 0px 0px 0.375rem 0px rgba(0, 0, 0, 0.50) inset'
                  : '',
              borderRadius: '1rem',
              backgroundColor: 'white',
            }}
          >
            <ClusterQuantity>{cluster?.clustered_points?.length}</ClusterQuantity>
          </Box>
        </Marker>
      );
    }

    return null;
  }, [item, color, clickEvent, clickPlace, markerValue]);

  return content;
}
