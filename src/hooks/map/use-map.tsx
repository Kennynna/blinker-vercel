import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { fetchEventsMap, fetchPlacesMap, MapQueryParams } from '@/api/map';

/**
 * Hook to fetch places for the map.
 */
export function usePlacesMap(queryParams: MapQueryParams, options?: UseQueryOptions) {
  return useQuery({
    queryKey: ['placeMap', queryParams],
    queryFn: fetchPlacesMap,
    staleTime: 0,
    refetchOnWindowFocus: false,
    ...options, // Spread options to include enabled
  });
}

/**
 * Hook to fetch events for the map.
 */
export function useEventsMap(queryParams: MapQueryParams, options?: UseQueryOptions) {
  return useQuery({
    queryKey: ['eventMap', queryParams],
    queryFn: fetchEventsMap,
    staleTime: 0,
    refetchOnWindowFocus: false,
    ...options, // Spread options to include enabled
  });
}
