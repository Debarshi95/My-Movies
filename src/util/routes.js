export default {
  home: {
    path: '/',
    isExact: true,
  },
  search: {
    path: '/search',
    isExact: true,
  },
  genre: {
    path: '/genre/:name',
    isExact: true,
  },
  movieInfo: {
    path: '/movie/:id',
    isExact: true,
  },
  showInfo: {
    path: '/tv/:id',
    isExact: true,
  },
};
