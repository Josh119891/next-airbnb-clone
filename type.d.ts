export interface IExploreItem {
  img: string;
  location: string;
  distance: string;
}

export interface ICardData {
  img: string;
  title: string;
}

export interface ILargeCardData {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface ISearchData {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export interface ICard {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}
