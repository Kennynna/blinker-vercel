import { useQuery } from '@tanstack/react-query';



import { fetchPlaceById, fetchPlaces, Tag } from '../../api/places';


export interface PlacesQueryParams {
  longitude: number;
  latitude: number;
  localityId: string;
  tags: Tag[];
  categoriesOfPlaces: string[] | null;
}

export function usePlaces(queryParams: PlacesQueryParams) {
  return useQuery({
    queryKey: ['places', queryParams],
    queryFn: fetchPlaces,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}

interface PlaceById {
  userLongitude: number;
  userLatitude: number;
  placeId: string;
}

export function usePlaceById(queryParams: PlaceById) {
  return useQuery({
    queryKey: ['placeById', queryParams],
    queryFn: fetchPlaceById,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}



