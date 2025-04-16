

interface EventsListResponse {
  count_of_all: number;
  events: Event[];
}
interface Category {
  id: string;
}

interface Date {
  date: string;
}

interface Tag {
  id?: string; // Опциональное свойство, если оно есть
  name?: string; // Опциональное свойство, если оно есть
}

interface Event {
  id: string;
  name: string;
  categories: Category[];
  address: string;
  distance: number;
  listing_picture: string;
  listing_picture_uri: string;
  price_from: number;
  discount: number;
  dates: Date[];
  zone_offset: string;
  tags: Tag[];
}


export interface PlaceById {
  id: string;
  name: string;
  description: string;
  locality_id: string;
  categories: string[];
  address: string;
  longitude: number;
  latitude: number;
  distance: number;
  pictures: string[];
  pictures_uris: string[];
  map_picture: string;
  map_picture_uri: string;
  listing_picture: string;
  listing_picture_uri: string;
  detail_picture: string;
  detail_picture_uri: string;
  tags: Tag[];
  fields: any[]; // Если структура полей известна, замените any на конкретный тип
  working_hours: WorkingHours;
  zone_offset: string;
  opened_now: boolean;
  opening_soon: boolean;
  events: EventInPlace[];
}

interface Tag {
  type: 'ENUM_TAG' | 'BINDING_TAG';
  definition_id: string;
  string_representation: string;
  value_id?: string; // Опционально, так как не у всех тегов присутствует это поле
}

interface WorkingHours {
  MONDAY?: Hours;
  TUESDAY?: Hours;
  WEDNESDAY?: Hours;
  THURSDAY?: Hours;
  FRIDAY?: Hours;
  SATURDAY?: Hours;
  SUNDAY?: Hours;
  // Возможна поддержка и других ключей, если потребуется:
  [day: string]: Hours | undefined;
}

interface Hours {
  start: string; // Формат "HH:MM:SS"
  end: string; // Формат "HH:MM:SS"
}

interface EventInPlace {
  id: string;
  name: string;
  categories: string[];
  address: string;
  distance: number;
  listing_picture: string;
  listing_picture_uri: string;
  price_from: number;
  discount: number;
  dates: string[]; // Даты в формате ISO 8601, например "2025-03-30T13:00:00Z"
  zone_offset: string;
  tags: Tag[];
}
