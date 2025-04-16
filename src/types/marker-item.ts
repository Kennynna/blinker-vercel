export interface MarkerItemResponse {
    name?: string;
    description?: string;
    types?: string[];
    location_longitude?: number;
    location_latitude?: number;
    pictures?: string[];
    general_picture?: string;
    optional_fields?: {
      field_type?: string;
      phone?: string;
      site_url?: string;
      social_networks?: string;
      priority?: number;
    }[];
    id?: string;
    owner_id?: string;
    distance?: number;
    entity_type?: string;
    pictures_urls?: string[];
}
