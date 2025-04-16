
// src/hooks/useEvents.ts
import { useQuery } from '@tanstack/react-query';



import { EventByIdQueryParams, fetchEventById, fetchEvents, Filter } from '../../api/events';



export interface EventsQueryParams {
  longitude: number;
  latitude: number;
  localityId: string;
  filters: Filter[];
  categoriesOfEvents: string[] | null;
}

export function useEvents(queryParams: EventsQueryParams) {
  return useQuery({
    queryKey: ['events', queryParams],
    queryFn: fetchEvents,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}


export function useEventById(queryParams: EventByIdQueryParams) {
  return useQuery({
    queryKey: ['eventById', queryParams],
    queryFn: fetchEventById,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}
