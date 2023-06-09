export type Characters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Character[];
};

export type Character = {
  id: 1;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
