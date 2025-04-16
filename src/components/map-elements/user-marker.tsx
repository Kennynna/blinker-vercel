'use client';

import * as React from 'react';
import { userLocationState } from '@/shared/store/use-user-location';
import { Box } from '@mui/material';
import { throttle } from 'lodash';
import { Marker } from 'react-map-gl/maplibre';





export function UserMarker(): React.JSX.Element {

  const { userLat, userLon, newUserLocation } = userLocationState();

  const throttledHandleUserLocationUpdate = throttle((position: GeolocationPosition) => {
    newUserLocation(
      position.coords.latitude,
      position.coords.longitude,
    );
  }, 2000);

  React.useEffect(() => {
    let watchId: number;
    if (userLat && userLon) {
      watchId = navigator.geolocation.watchPosition(throttledHandleUserLocationUpdate, (error) => {
        console.error('Error getting user location:', error);
      });
    }
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [userLat, userLon]);
  return (
    <>
      {userLat && userLon && (
        <Marker latitude={userLat} longitude={userLon} color='red'>
          <Box sx={{ width: 20, height: 20, backgroundColor: 'red', borderRadius: '50%' }} />
        </Marker>
      )}
    </>
  );
}
