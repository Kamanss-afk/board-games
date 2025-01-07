import { Category, Game } from '../model/types';

export const gameList: Game[] =  [
  {
    name: 'Azul',
    id: '1',
    label: 'Top',
    category: 'Puzzle',
    image: 'https://drive.google.com/uc?id=1I8w8CQ4OhHdssvEVQ1qmFrKwbPVqvD5O',
  },
  {
    name: 'After Us',
    id: '2',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1Fq0Sv-62tG7PNllI0BTGi9HxZo71tJ9b',
  },
  {
    name: 'Can\'t Stop',
    id: '3',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1TGSlwL4crut4Jv9QWEpXuORcMpi92gw0',
  },
  {
    name: 'Captain Flip',
    id: '4',
    label: 'Top',
    category: 'Puzzle',
    image: 'https://drive.google.com/uc?id=1cWROYsfX_q4SqEhq3Rh-mWZEAQlFHGDw',
  },
  {
    name: 'Gin Rummy',
    id: '5',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1OkfvK43CPCuJrVtegA7uWndcyMNq6MZo',
  },
  {
    name: 'Happy City',
    id: '6',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1xJXOJr93th3XRsq_110hfx8GaW_hEPDy',
  },
  {
    name: 'Hugo',
    id: '7',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1ZbJEGTIhCuoLkJeGXltSfOc8EI59xM51',
  },
  {
    name: 'L.A.M.A',
    id: '8',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1SNecsy6ym_PNSoDDd75N2OkT2bFWsKQm',
  },
  {
    name: 'Lost Seas',
    id: '9',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1JP3qv9jxuMh764ljaerfXRt9OtSI3PgE',
  },
  {
    name: 'Lucky Numbers',
    id: '10',
    label: 'Top',
    category: 'Puzzle',
    image: 'https://drive.google.com/uc?id=1XKMrtEkzciJ-oLtxlyfld0X0t0nNzCB6',
  },
  {
    name: 'Mini Rogue',
    id: '11',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=12NpxyOpytPWC4gVbIC43sB36drJVP7BL',
  },
  {
    name: 'My City',
    id: '12',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1zuKOlz7D0rVUjWLIK_OJjXo-2-XdFmlI',
  },
  {
    name: 'No Thanks!',
    id: '13',
    label: 'Top',
    category: 'Action',
    image: 'https://drive.google.com/uc?id=17BJAGVVwKCVYRDEzUtPu6Zbq9Ffy1zee',
  },
  {
    name: 'Perfect Words',
    id: '14',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1L4v8qUmfccc0SSY21Rspaa5-2vvjM5Is',
  },
  {
    name: 'Survive Island',
    id: '15',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=11JE9-PNQsupdbrnEpSjTIMVGby0q68V7',
  },
  {
    name: 'Ticket To Ride',
    id: '16',
    label: 'Top',
    category: 'Action',
    image: 'https://drive.google.com/uc?id=1EX82G3srIXDssT2mVY3SzXOqJYUTxpeV',
  },
  {
    name: 'War Chest',
    id: '17',
    label: 'Top',
    category: 'Casual',
    image: 'https://drive.google.com/uc?id=1i30BmRi2cgwHFSOFrozvS13WZQh4XwTi',
  },
];

const totalGames = gameList.length;

export const categoryList: Record<string, Record<string, Category>> = {
  en: {
    top: {
      id: 'top',
      title: 'Top Games',
      totalGames,
    },
    new: {
      id: 'new',
      title: 'New Games',
      totalGames,
    },
    all: {
      id: 'all',
      title: 'All Games',
      totalGames,
    },
    live: {
      id: 'live',
      title: 'Live Games',
      totalGames,
    },
  },
  ru: {
    top: {
      id: 'top',
      title: 'Популярные Игры',
      totalGames,
    },
    new: {
      id: 'new',
      title: 'Новые Игры',
      totalGames,
    },
    all: {
      id: 'all',
      title: 'Все Игры',
      totalGames,
    },
    live: {
      id: 'live',
      title: 'Онлайн Игры',
      totalGames,
    },
  },
};