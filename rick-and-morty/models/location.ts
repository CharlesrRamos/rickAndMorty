export type Locations = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Location[];
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
