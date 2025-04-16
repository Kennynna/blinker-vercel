import { QueryFunctionContext } from '@tanstack/react-query';

import { getAccessToken } from './auth';

export const fetchEventsFilters = async ({ queryKey }: QueryFunctionContext): Promise<CategoryFilters> => {
  const [_key] = queryKey as [string]; // Изменили типизацию на [string]
  const url =
    'https://api.blinker-dev.ru/api/v1/main-service/categories-definitions/available-events-categories?localityId=00000000-0000-0000-0000-000000000000';

  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе фильтров');
  }

  const data = await response.json();
  return data.available_categories;
};
export const fetchPlacesFilters = async ({ queryKey }: QueryFunctionContext): Promise<CategoryFilters> => {
  const [_key] = queryKey as [string]; // Изменили типизацию на [string]
  const url =
    'https://api.blinker-dev.ru/api/v1/main-service/categories-definitions/available-places-categories?localityId=00000000-0000-0000-0000-000000000000';

  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе фильтров');
  }

  const data = await response.json();
  return data.available_categories;
};

export const fetchEventsCollectionFilters = async ({
  queryKey,
}: QueryFunctionContext): Promise<Array<CollectionsFilters>> => {
  const [_key] = queryKey as [string]; // Изменили типизацию на [string]
  const url =
    'https://api.blinker-dev.ru/api/v1/main-service/categories-sets/for-events?localityId=00000000-0000-0000-0000-000000000000';

  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Ошибка сети при запросе фильтров');
  }

  const data = await response.json();
  return data;
};

export const fetchPlaceCollectionFilters = async ({
  queryKey,
}: QueryFunctionContext): Promise<Array<CollectionsFilters>> => {
  const [_key] = queryKey as [string]; // Изменили типизацию на [string]
  const url =
    'https://api.blinker-dev.ru/api/v1/main-service/categories-sets/for-places?localityId=00000000-0000-0000-0000-000000000000';

  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Ошибка сети при запросе фильтров');
  }

  const data = await response.json();
  return data;
};

export interface EventByIdQueryParams {
  categoryId: string;
}

export const fetchCategoryById = async ({ categoryId }: EventByIdQueryParams): Promise<EventByIdQueryParams> => {
  // Получаем актуальный токен
  const token = await getAccessToken();

  let url = `https://api.blinker-dev.ru/api/v1/main-service/categories-definitions/01953764-7b12-794e-8f85-7c43e02ab066`;

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

export interface EventsCategoriesFromPlacesOnes {
  localityId: number;
  categories: string[];
}

export const getEventsCategoriesFromPlacesOnes = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, { localityId, categories }] = queryKey as [
    string,
    {
      localityId: number;
      categories: string[];
    },
  ];

  let url = `https://api.blinker-dev.ru/api/v1/main-service/categories-definitions/events-categories-from-places-ones?localityId=00000000-0000-0000-0000-000000000000`;

  const response = await fetch(url, {
    method: 'GET',
    body: JSON.stringify({
      categories: categories && categories.length > 0 ? categories : [],
      include_orphans: true,
    }),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();

  return data;
};

export const getPlacesCategoriesFromEventsOnes = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [_key, { localityId, categories }] = queryKey as [
    string,
    {
      localityId: number;
      categories: string[];
    },
  ];

  let url = `https://api.blinker-dev.ru/api/v1/main-service/categories-definitions/places-categories-from-events-ones?localityId=00000000-0000-0000-0000-000000000000`;

  const response = await fetch(url, {
    method: 'GET',
    body: JSON.stringify({
      categories: categories && categories.length > 0 ? categories : [],
      include_orphans: true,
    }),
  });

  if (!response.ok) {
    throw new Error('Ошибка сети при запросе мест');
  }

  const data = await response.json();

  return data;
};
