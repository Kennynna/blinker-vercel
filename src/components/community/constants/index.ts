import { Tag } from './../community-add-palce-steps/four-step-new-card-place';


export const places = [
  { type: 'Ресторан', name: 'Gussi', address: 'ул. Северная 5, Город' },
  { type: 'Кафе', name: 'Lavka', address: 'ул. Центральная 12, Город' },
  { type: 'Бар', name: 'Fox', address: 'ул. Академика 2, Город' },
  { type: 'Ресторан', name: 'Burger&Co', address: 'ул. Примерная 9, Город' },
  { type: 'Ресторан', name: 'Gussi', address: 'ул. Северная 5, Город' },
  { type: 'Кафе', name: 'Lavka', address: 'ул. Центральная 12, Город' },
  { type: 'Бар', name: 'Fox', address: 'ул. Академика 2, Город' },
  { type: 'Ресторан', name: 'Burger&Co', address: 'ул. Примерная 9, Город' },
];

export const category = [
  {
    name: 'Бар',
    id: 1,
  },
  {
    name: 'Ресторан',
    id: 2,
  },
  {
    name: 'Кафе',
    id: 3,
  },
  {
    name: 'Кафе',
    id: 4,
  },
  {
    name: 'Ресторан',
    id: 5,
  },
  {
    name: 'Кафе',
    id: 6,
  },
  {
    name: 'Кафе',
    id: 7,
  },
  {
    name: 'Ресторан',
    id: 8,
  },
  {
    name: 'Кафе',
    id: 9,
  },
  {
    name: 'Кафе',
    id: 10,
  },
];

export interface Tag {
  type: 'ENUM_TAG';
  definition_id: string;
  value_id: string;
  string_representation: string;
}


export const tags: Tag[] = [
  {
    title: 'Кухня',
    id: 1,
    tags: [
      'Тег какой то в списке',
      'Some Tag',
      ' Tag',
      'Длинный очень длинный Tag',
      'короткий Tag',
      'Соус',
      'Soap',
      'Bread',
      'Sugar',
      'Mini',
      'Maximum',
      '10 teg',
    ],
  },
  {
    title: 'Особенности',
    id: 2,
    tags: [
      'Some Tag',
      'Tag',
      'Se Tag',
      'me Tag',
      'Someg',
      ' Tag',
      'Длинный очень длинный Tag',
      'короткий Tag',
      'Соус',
      'Soap',
      'Bread',
      'Sugar',
      'Mini',
      'Maximum',
      '10 teg',
    ],
  },
  {
    title: 'Доступная среда',
    id: 1,
    tags: [
      'Безбарьерный вход',
      'Оборудованные туалеты',
      'Визуальная навигация',
      'Парковка для людей с инвалидностью',
      'Some Tag',
      ' Tag',
      'Длинный очень длинный Tag',
      'короткий Tag',
      'Соус',
      'Soap',
      'Bread',
      'Sugar',
      'Mini',
      'Maximum',
      '10 teg',
    ],
  },
];

export const users_data = [
  {
    name: 'John Doe',
    id: 1,
  },
  {
    name: 'Jane Smith',
    id: 2,
  },
  {
    name: 'Mike Johnson',
    id: 3,
  },
  {
    name: 'Emily Brown',
    id: 4,
  },
  {
    name: 'David Lee',
    id: 5,
  },
  {
    name: 'Sarah Taylor',
    id: 6,
  },
  {
    name: 'Kevin White',
    id: 7,
  },
  {
    name: 'Lisa Nguyen',
    id: 8,
  },
  {
    name: 'Chris Harris',
    id: 9,
  },
  {
    name: 'Olivia Martin',
    id: 10,
  },
];

export const CustomPlacesInCollection = [
  {
    id: 1,
    placeName: 'Gussi',
    type: 'Ресторан',
    address: 'ул. Северная 5, Город',
  },
  {
    id: 2,
    placeName: 'Lavka',
    type: 'Кафе',
    address: 'ул. Центральная 12, Город',
  },
  {
    id: 3,
    placeName: 'Fox',
    type: 'Бар',
    address: 'ул. Академика 2, Город',
  },
  {
    id: 4,
    placeName: 'Burger&Co',
    type: 'Ресторан',
    address: 'ул. Примерная 9, Город',
  },
  {
    id: 5,
    placeName: 'Cafe Delight',
    type: 'Кафе',
    address: 'ул. Пушкина 15, Город',
  },
  {
    id: 6,
    placeName: 'The Pub',
    type: 'Бар',
    address: 'ул. Ленина 22, Город',
  },
  {
    id: 7,
    placeName: 'Restaurant Elite',
    type: 'Ресторан',
    address: 'ул. Мира 100, Город',
  },
  {
    id: 8,
    placeName: 'Coffee Corner',
    type: 'Кафе',
    address: 'ул. Солнечная 45, Город',
  },
  {
    id: 9,
    placeName: 'Nightclub',
    type: 'Бар',
    address: 'ул. Дискотека 67, Город',
  },
  {
    id: 10,
    placeName: 'Fine Dining',
    type: 'Ресторан',
    address: 'ул. Гourmet 89, Город',
  },
];
