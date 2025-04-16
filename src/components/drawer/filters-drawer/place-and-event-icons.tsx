import {
  Activity,
  ActivityForChildrenIcon,
  AmusementParkIcon,
  Another,
  BarIcon,
  BathSauna,
  BeachIcon,
  BeautySalon,
  ConcertIcon,
  Dance,
  ExcursionIcon,
  ExhibitionIcon,
  FastFood,
  Fitness,
  HotelIcon,
  InstaPlaceIcon,
  KaraokeIcon,
  Monuments,
  MovieIcon,
  MuseumIcon,
  NewYear,
  NightClub,
  QuestIcon,
  RestaurantIcon,
  RetreatIcon,
  ShoppingIcon,
  SportEventIcon,
  TheaterIcon,
  ThemePartyIcon,
  WaterParkIcon,
  WellnessCenterIcon,
  Windery,
} from '@/shared/icons/filters';

export const PlaceAndEventsIcons: React.FC<{ type: string | null }> = ({ type }) => {
  switch (type) {
    case 'RETREAT':
      return <RetreatIcon />;
    case 'CONCERT':
      return <ConcertIcon />;
    case 'SPORT_EVENT':
      return <SportEventIcon />;
    case 'EXCURSION':
      return <ExcursionIcon />;
    case 'EXHIBITION':
      return <ExhibitionIcon />;
    case 'ACTIVITY_FOR_CHILDREN':
      return <ActivityForChildrenIcon />;
    case 'THEATER':
      return <TheaterIcon />;
    case 'THEME_PARTY':
      return <ThemePartyIcon />;
    case 'ACTIVITY':
      return <Activity />;
    case 'QUEST':
      return <QuestIcon />;
    case 'DANCE':
      return <Dance />;
    case 'NEW_YEAR':
      return <NewYear />;
    case 'RESTAURANT':
      return <RestaurantIcon />;
    case 'FAST_FOOD':
      return <FastFood />;
    case 'BAR':
      return <BarIcon />;
    case 'HOTEL':
      return <HotelIcon />;
    case 'WELLNESS_CENTER':
      return <WellnessCenterIcon />;
    case 'MOVIE':
      return <MovieIcon />;
    case 'MUSEUM':
      return <MuseumIcon />;
    case 'AMUSEMENT_PARK':
      return <AmusementParkIcon />;
    case 'WATER_PARK':
      return <WaterParkIcon />;
    case 'KARAOKE':
      return <KaraokeIcon />;
    case 'NIGHT_CLUB':
      return <NightClub />;
    case 'BEAUTY_SALON':
      return <BeautySalon />;
    case 'BATH_SAUNA':
      return <BathSauna />;
    case 'WINERY':
      return <Windery />;
    case 'BEACH':
      return <BeachIcon />;
    case 'INSTA_PLACE':
      return <InstaPlaceIcon />;
    case 'SHOPPING':
      return <ShoppingIcon />;
    case 'ANOTHER':
      return <Another />;
    case 'MONUMENTS':
      return <Monuments />;
    case 'FITNESS':
      return <Fitness />;
    default:
      return null;
  }
};
