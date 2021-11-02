export default {
  home: {
    path: '/',
    isExact: true,
  },
  search: {
    path: '/search',
    isExact: true,
  },
  tv: {
    path: '/tv',
    isExact: true,
  },
  movie: {
    path: '/movie',
    isExact: true,
  },
  genre: {
    path: '/genre/:name',
    isExact: true,
  },
  info: {
    path: '/:type/:id',
    isExact: true,
  },
};
