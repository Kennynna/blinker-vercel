// map.tsx
'use client';

import * as React from 'react';
import Map, { MapRef } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useStoreFilters } from '@/shared/store/filters';
import { Crimea, userLocationState } from '@/shared/store/use-user-location';
import styled from '@emotion/styled';
import { useEventsMap, usePlacesMap } from '@/hooks/map/use-map';
import { CustomMarker } from '@/components/dashboard/map-marker/custom-marker';
import { SwipeableEdgeDrawer } from '@/components/drawer';
import { TopElements } from '@/components/map-elements/top-elements';
import { UserMarker } from '@/components/map-elements/user-marker';
import { MapQueryParams } from '@/api/map';

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export function WMap(): React.JSX.Element {
  return (
    <MapContainer>

      <SwipeableEdgeDrawer/>
    </MapContainer>
  );
}
