export type Game = {
  id: string;
  name: string;
  image: string;
  label: string;
  category: string;
}

export type Category = {
  id: string;
  title: string;
  totalGames: number;
}