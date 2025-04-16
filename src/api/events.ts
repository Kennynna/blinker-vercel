// src/api/events.ts
import { EventById } from '@/constants/markeritems';
import { QueryFunctionContext } from '@tanstack/react-query';

import { getAccessToken } from './auth';

export interface Tag {
  definition_id: string;
  type: string;
  value_id: string;
}

interface EventsQueryParams {
  longitude: number;
  latitude: number;
  localityId: string;
  tags: Tag[];
  categoriesOfEvents: string[] | null;
}

/**
 * Функция запроса мест.
 * Сначала получает актуальный access_token, затем отправляет запрос с нужными параметрами.
 */
export const fetchEvents = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, { longitude, latitude, localityId, tags, categoriesOfEvents }] = queryKey as [string, EventsQueryParams];

  // Получаем актуальный токен
  const token = await getAccessToken();

  let url = `https://api.blinker-dev.ru/api/v1/main-service/events/list`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      locality_id: '00000000-0000-0000-0000-000000000000',
      filters: {
        categoriesOfEvents: categoriesOfEvents,
        tags: tags,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();

  return data.events;
};

export interface EventByIdQueryParams {
  userLongitude: number;
  userLatitude: number;
  eventId: string;
}

export const fetchEventById = async ({ queryKey }: QueryFunctionContext): Promise<EventById> => {
  const [_key, { userLongitude, userLatitude, eventId }] = queryKey as [string, EventByIdQueryParams];

  // Получаем актуальный токен
  const token = await getAccessToken();

  let url = `https://api.blinker-dev.ru/api/v1/main-service/events/${eventId}?userLongitude=${userLongitude}&userLatitude=${userLatitude}`;

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
