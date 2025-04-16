import {
  EventsCategoriesFromPlacesOnes,
  fetchCategoryById,
  fetchCollectionFilters,
  fetchEventsCollectionFilters,
  fetchEventsFilters,
  fetchPlaceCollectionFilters,
  fetchPlacesFilters,
  getEventsCategoriesFromPlacesOnes,
  getPlacesCategoriesFromEventsOnes,
} from '@/api/filters';
import { useQuery } from '@tanstack/react-query';

export const useEventsFilters = () => {
  return useQuery({
    queryKey: ['EventsFilters'],
    queryFn: fetchEventsFilters,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
export const usePlacesFilters = () => {
  return useQuery({
    queryKey: ['PlacesFilters'],
    queryFn: fetchPlacesFilters,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};

export const useEventCollectionsFilters = () => {
  return useQuery({
    queryKey: ['EventsCollectionFilters'],
    queryFn: fetchEventsCollectionFilters,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
export const usePlaceCollectionsFilters = () => {
  return useQuery({
    queryKey: ['PlacesCollectionFilters'],
    queryFn: fetchPlaceCollectionFilters,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};

export const useCategoryById = (categories: string[]) => {
  return useQuery({
    queryKey: ['categoryById', categories],
    queryFn: async () => {
      const results = await Promise.all(categories.map((category: string) => fetchCategoryById(category)));
      return results;
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};

export function useEventsCategoriesFromPlacesOnesWithSelectedCategories(queryParams: EventsCategoriesFromPlacesOnes) {
  return useQuery({
    queryKey: ['EventsCategoriesFromPlacesOnes', queryParams],
    queryFn: getEventsCategoriesFromPlacesOnes,
    // enabled: queryParams.categories.length > 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}

export function usePlacesCategoriesFromEventsOnesWithSelectedCategories(queryParams: EventsCategoriesFromPlacesOnes) {
  return useQuery({
    queryKey: ['PlacesCategoriesFromPlacesOnes', queryParams],
    queryFn: getPlacesCategoriesFromEventsOnes,
    // enabled: queryParams.categories.length > 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}
