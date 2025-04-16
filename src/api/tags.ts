import { QueryFunctionContext } from '@tanstack/react-query';
import { isArray } from 'lodash';

import { getAccessToken } from './auth';

export interface TagsByPlaceCategory {
  placeCategoryId: string[];
}
export const fetchTagsByPlaceCategoryId = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, { placeCategoryId }] = queryKey as [string, TagsByPlaceCategory];
  // Получаем актуальный токен
  const token = await getAccessToken();

  let url = `https://api.blinker-dev.ru/api/v1/main-service/tags-definitions/filterable-tags-values-for-places?localityId=00000000-0000-0000-0000-000000000000`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      placeCategories: placeCategoryId,
    }),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();

  return data;
};

export interface TagsByEventCategory {
  eventsCategories: string[];
}
export const fetchTagsByEventCategoryId = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, { eventsCategories }] = queryKey as [string, TagsByEventCategory];
  // Получаем актуальный токен

  const token = await getAccessToken();
  let url = `https://api.blinker-dev.ru/api/v1/main-service/tags-definitions/filterable-tags-values-for-events?localityId=00000000-0000-0000-0000-000000000000`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ eventsCategories }),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();

  return data;
};
