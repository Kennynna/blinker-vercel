type CollectionsFilters = {
  id: string;
  name: string;
  description: string;
  icon: Icon;
};

type CategoryFilters = {
  id: string;
  name: string;
  description: string;
  place: boolean;
  icon: Icon;
};

interface Icon {
  id: string;
  uri: string;
}
