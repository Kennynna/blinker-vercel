import { PlaceById } from '@/app/(marketing)/types/place-and-events';
import { QueryFunctionContext } from '@tanstack/react-query';

import { getAccessToken } from './auth';

export interface Tag {
  definition_id: string;
  type: string;
  value_id: string;
}

interface PlacesQueryParams {
  longitude: number;
  latitude: number;
  localityId: string;
  tags: Tag[];
  categoriesOfPlaces: string[] | [];
}

/**
 * Функция запроса списка мест (Places).
 * Сначала получает актуальный access_token, затем отправляет запрос с нужными параметрами.
 */
export const fetchPlaces = async ({ queryKey }: QueryFunctionContext): Promise<PlaceById[]> => {
  const [_key, { longitude, latitude, localityId, tags, categoriesOfPlaces }] = queryKey as [
    string,
    {
      longitude: number;
      latitude: number;
      localityId: string;
      tags: Tag[];
      categoriesOfPlaces: string[] | null;
    },
  ];

  // Получаем актуальный токен
  const token = await getAccessToken();

  // Собираем URL с динамическими параметрами
  let url = `https://api.blinker-dev.ru/api/v1/main-service/places/list`;


  console.log(tags);
  // Формируем тело запроса с фильтрами

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      locality_id: '00000000-0000-0000-0000-000000000000',
      filters: {
        categoriesOfPlaces: categoriesOfPlaces,
        tags: tags,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();

  return data.places;
};

interface PlacesQueryParams {
  userLongitude: number;
  userLatitude: number;
  placeId: string;
}

export const fetchPlaceById = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, { userLongitude, userLatitude, placeId }] = queryKey as [
    string,
    {
      userLongitude: number;
      userLatitude: number;
      placeId: string;
    },
  ];

  // Получаем актуальный токен
  const token = await getAccessToken();

  // Собираем URL с динамическими параметрами
  let url = `https://api.blinker-dev.ru/api/v1/main-service/places/${placeId}?userLongitude=83.0922185298129&userLatitude=54.85019526962852`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();

  return data;
};
