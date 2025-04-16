interface EnumTag {
  type: 'ENUM_TAG';
  definition_id: string;
  string_representation: string;
  value_id: string;
}
export interface OptionalField {
  field_type: string;
  priority: number;
  value?: string;
  from?: number;
  to?: number;
}
export interface Event {
  type: 'EVENT'; // Добавляем поле type, присутствующее в данных
  id: string; // uuid
  name: string;
  longitude: number;
  latitude: number;
  map_picture: string; // uuid
  map_picture_uri: string; // Переименуем map_point_uri в map_picture_uri для一致ности
  listing_picture: string; // uuid
  listing_picture_uri: string;
  categories: string[]; // Array of uuid strings
  distance: number;
  dates: string[]; // Array of ISO date strings
  zone_offset: string; // e.g. "+07:00"
  tags?: Tag[]; // Теги есть только в некоторых событиях, делаем необязательным
  // Отсутствующие в данных поля делаем необязательными
  description?: string;
  locality_id?: string;
  address?: string;
  pictures?: string[];
  pictures_uris?: string[];
  detail_picture?: string;
  detail_picture_uri?: string;
  fields?: JSONField[];
  place_id?: string;
  price_from?: number;
  discount?: number;
}
interface JSONField {
  type: 'JSON_FIELD';
  definition_id: string;
  json_value: string;
}

export interface Place {
  type: 'PLACE'; // Добавляем поле type, присутствующее в данных
  id: string;
  name: string;
  longitude: number; // Заменяем location_longitude
  latitude: number; // Заменяем location_latitude
  map_picture: string; // Заменяем general_picture
  map_point_uri: string; // Заменяем general_picture_url
  listing_picture: string;
  listing_picture_uri: string;
  categories: string[]; // Заменяем types
  distance: number;
  opened_now: boolean; // Новое поле из данных
  opening_soon: boolean; // Новое поле из данных
  tags: Tag[];
  events: Event[];
  // Отсутствующие в данных поля делаем необязательными
  description?: string;
  pictures?: string[];
  pictures_urls?: string[];
  general_picture?: string;
  general_picture_url?: string;
  optional_fields?: OptionalField[];
  owner_id?: string;
}
export type EntityItem = Place | Event;

export interface EventById {
  id: string;
  name: string;
  description?: string;
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
  tags: Array<{
    type: 'BINDING_TAG';
    definition_id: string;
    string_representation: string;
  }>;
  fields?: JSONField[];
  place_id: string;
  price_from: number;
  discount: number;
  dates: string[];
  zone_offset: string;
}
