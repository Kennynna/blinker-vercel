import React from 'react';
import { RestIcon } from '@/shared/icons/rest-icon';





export interface CollectionItem {
  title: string;
  itemSymbol: string | React.ReactNode;
  description: string[];
  type: string[] | [];
  spanText?: string;
  fullText?: string;
  soloFilter: { title: string; type: string | null }[];
}

export const collectionsItems: CollectionItem[] = [
  {
    title: 'Всё',
    itemSymbol: null,
    description: ['Все места и события'],
    type: ['all'],
    spanText: 'Хочу всё и сразу ',
    fullText:
      '- это для тех, кто хочет охватить всё: от незабываемых вечеров в баре до утренних пробежек по набережной. Мы собрали самые крутые места и мероприятия, чтобы ваш отдых был незабываемым!',
    soloFilter: [],
  },
  {
    title: 'Выпить и поесть',
    itemSymbol: '🍹🍽',
    description: ['Бары и рестораны'],
    type: ['RESTAURANT', 'BAR'],
    spanText: 'Хочу выпить и вкусно поесть',
    fullText:
      '- Баров и ресторанов много, но мы знаем те, где коктейли не только вкусные, но и эстетичные, а блюда впечатляют разнообразием и качеством. Наши любимые места с авторской кухней, уютные семейные рестораны, лучшие бары и стильные кафе.',
    soloFilter: [
      { title: 'Все', type: [] },
      { title: 'Бары', type: 'BAR' },
      { title: 'Рестораны', type: 'RESTAURANT' },
    ],
  },
  {
    title: 'Петь',
    itemSymbol: '🎤',
    description: ['Караоке'],
    type: ['KARAOKE'],
    spanText: 'Хочу в караоке',
    fullText:
      '- Микрофон, сцена и вы – звезда вечера. Лучшие караоке-бары, где можно исполнить любимые хиты и зажечь толпу. Пой так, как будто тебя никто не слышит (но все слышат и аплодируют',
    soloFilter: [{ title: 'Караоке', type: 'KARAOKE' }],
  },
  {
    title: 'Танцевать',
    itemSymbol: '💃',
    description: ['Ночные клубы', 'Тематические вечеринки'],
    type: ['NIGHT_CLUB'],
    spanText: 'Хочу танцевать до утра',
    fullText:
      '- Ночные клубы и тематические вечеринки, где ноги сами пускаются в пляс. От зажигательных латинских ритмов до электронных битов – выбирай своё идеальное место для ночных тусовок.',
    soloFilter: [{ title: 'Ночные клубы', type: 'NIGHT_CLUB' }],
  },
  {
    title: 'Узнавать и исследовать',
    itemSymbol: '🏛️',
    description: ['Музеи', 'Экскурсии', 'Выставки', 'Театры'],
    type: ['MUSEUM', 'EXCURSION', 'EXHIBITION', 'THEATER'],
    spanText: 'Хочу открывать для себя новое',
    fullText:
      '- Экскурсии, музеи, театры, выставки и тайные уголки города. Места, которые стоит увидеть хотя бы однажды, и маршруты, по которым ходят только местные. Исследуй мир и пополняй свою копилку впечатлений!',
    soloFilter: [
      { title: 'Все', type: [] },
      { title: 'Музеи', type: 'MUSEUM' },
      { title: 'Экскурсии', type: 'EXCURSION' },
      { title: 'Выставки', type: 'EXHIBITION' },
      { title: 'Театры', type: 'THEATER' },
    ],
  },
  {
    title: 'Семьей',
    itemSymbol: '👪',
    description: ['Детские мероприятия', 'Парки развлечения', 'Аквапарки'],
    type: ['ACTIVITY_FOR_CHILDREN', 'AMUSEMENT_PARK', 'WATER_PARK'],
    spanText: 'Хочу пойти с детьми',
    fullText:
      '- Парки, аттракционы и места, где детям будет интересно и весело. Локации, где можно провести время всей семьей или с друзьями.',
    soloFilter: [
      { title: 'Все', type: [] },
      { title: 'Детские мероприятия', type: 'ACTIVITY_FOR_CHILDREN' },
      { title: 'Парки развлечения', type: 'AMUSEMENT_PARK' },
      { title: 'Аквапарки', type: 'WATER_PARK' },
    ],
  },
  {
    title: 'Шоппинг',
    itemSymbol: '🛍️',
    description: ['Бутики'],
    type: ['SHOPPING'],
    soloFilter: [{ title: 'Бутики', type: 'SHOPPING' }],
  },
  {
    title: 'Развлечься',
    itemSymbol: '🎬',
    description: ['Кино', 'Концерты', 'Спортивные мероприятия', 'Квесты'],
    type: ['MOVIE', 'CONCERT', 'SPORT_EVENT', 'THEME_PARTY'],
    spanText: 'Хочу развлечься, а на утро не болеть',
    fullText:
      '- Кино, концерты, спортивные мероприятия и квесты. Где провести вечер, чтобы зарядиться позитивом и энергией на всю неделю вперед. Развлекайся по полной!',
    soloFilter: [
      { title: 'Все', type: [] },
      { title: 'Кино', type: 'MOVIE' },
      { title: 'Концерты', type: 'CONCERT' },
      { title: 'Спортивные мероприятия', type: 'SPORT_EVENT' },
      { title: 'Квесты', type: 'THEME_PARTY' },
    ],
  },
  {
    title: 'Отдохнуть',
    itemSymbol: <RestIcon />,
    description: ['Отели', 'Спа и велнес центры', 'Ретриты'],
    type: ['HOTEL', 'WELLNESS_CENTER', 'RETREAT'],
    spanText: 'Хочу отдохнуть и расслабиться',
    fullText:
      '- Отели, СПА, велнес-центры и ретриты, где можно забыть о суете и полностью расслабиться. Идеальные локации для тех, кто ищет покой и гармонию. Наслаждайся моментом!',
    soloFilter: [
      { title: 'Все', type: [] },
      { title: 'Отели', type: 'HOTEL' },
      { title: 'Спа и велнес центры', type: 'WELLNESS_CENTER' },
      { title: 'Ретриты', type: 'RETREAT' },
    ],
  },
];
