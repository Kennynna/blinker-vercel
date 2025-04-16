import {
  fetchTagsByEventCategoryId,
  fetchTagsByPlaceCategoryId,
  TagsByEventCategory,
  TagsByPlaceCategory,
} from '@/api/tags';
import { useQuery } from '@tanstack/react-query';

export const useTagsByCategoryPlaceId = (queryParams: TagsByPlaceCategory) => {
  return useQuery({
    queryKey: ['tagsByCategoryPlaceId', queryParams],
    enabled: queryParams.placeCategoryId.length > 0,
    queryFn: fetchTagsByPlaceCategoryId,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
export const useTagsByCategoryEventId = (queryParams: TagsByEventCategory) => {
  return useQuery({
    queryKey: ['tagsByCategoryEventId', queryParams],
    queryFn: fetchTagsByEventCategoryId,
    enabled: queryParams.eventsCategories.length > 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
