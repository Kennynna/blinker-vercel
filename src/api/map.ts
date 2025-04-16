// src/api/map.ts
import { QueryFunctionContext } from '@tanstack/react-query';
import { getAccessToken } from './auth';

export interface MapQueryParams {
  localityId: string;
  zoom: number;
  boundaryBox: {
    longitudeFrom: number;
    latitudeFrom: number;
    longitudeTo: number;
    latitudeTo: number;
  };
  userLocation?: {
    longitude: number;
    latitude: number;
  };
  filters?: {
    categoriesOfPlace?: string[];
    categoriesOfEvents?: string[];
    tags?: string[];
  };
  oldBoundaryBox?: {
    longitudeFrom: number;
    latitudeFrom: number;
    longitudeTo: number;
    latitudeTo: number;
  };
}

export const fetchPlacesMap = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, params] = queryKey as [string, MapQueryParams];

  const {
    localityId,
    zoom,
    boundaryBox,
    userLocation,
    filters = {},
    oldBoundaryBox,
  } = params;

  const token = await getAccessToken();

  const url = 'https://api.blinker-dev.ru/api/v1/main-service/places/map';

  const body: any = {
    locality_id: localityId,
    zoom,
    boundary_box: {
      longitude_from: boundaryBox.longitudeFrom,
      latitude_from: boundaryBox.latitudeFrom,
      longitude_to: boundaryBox.longitudeTo,
      latitude_to: boundaryBox.latitudeTo,
    },
    filters: {
      categories_of_place: filters.categoriesOfPlace || [],
      categories_of_events: filters.categoriesOfEvents || [],
      tags: filters.tags || [],
    },
  };

  if (userLocation) {
    body.user_location = {
      longitude: userLocation.longitude,
      latitude: userLocation.latitude,
    };
  }

  if (oldBoundaryBox) {
    body.old_boundary_box = {
      longitude_from: oldBoundaryBox.longitudeFrom,
      latitude_from: oldBoundaryBox.latitudeFrom,
      longitude_to: oldBoundaryBox.longitudeTo,
      latitude_to: oldBoundaryBox.latitudeTo,
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();
  return data;
};

export const fetchEventsMap = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, params] = queryKey as [string, MapQueryParams];

  const {
    localityId,
    zoom,
    boundaryBox,
    userLocation,
    filters = {},
    oldBoundaryBox,
  } = params;

  const token = await getAccessToken();

  const url = 'https://api.blinker-dev.ru/api/v1/main-service/events/map';

  const body: any = {
    locality_id: localityId,
    zoom,
    boundary_box: {
      longitude_from: boundaryBox.longitudeFrom,
      latitude_from: boundaryBox.latitudeFrom,
      longitude_to: boundaryBox.longitudeTo,
      latitude_to: boundaryBox.latitudeTo,
    },
    filters: {
      categories_of_place: filters.categoriesOfPlace || [],
      categories_of_events: filters.categoriesOfEvents || [],
      tags: filters.tags || [],
    },
  };

  if (userLocation) {
    body.user_location = {
      longitude: userLocation.longitude,
      latitude: userLocation.latitude,
    };
  }

  if (oldBoundaryBox) {
    body.old_boundary_box = {
      longitude_from: oldBoundaryBox.longitudeFrom,
      latitude_from: oldBoundaryBox.latitudeFrom,
      longitude_to: oldBoundaryBox.longitudeTo,
      latitude_to: oldBoundaryBox.latitudeTo,
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе событий');
  }

  const data = await response.json();
  return data;
};
