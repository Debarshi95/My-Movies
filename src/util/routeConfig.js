import loadable from './loadable';
import routes from './routes';

export default {
  home: {
    component: loadable(() => import('../containers/Home/Home')),
    ...routes.home,
  },
  genre: {
    component: loadable(() => import('../containers/Genre/Genre')),
    ...routes.genre,
  },
  movieInfo: {
    component: loadable(() => import('../containers/MovieInfo/MovieInfo')),
    ...routes.movieInfo,
  },
  showInfo: {
    component: loadable(() => import('../containers/MovieInfo/MovieInfo')),
    ...routes.showInfo,
  },
  search: {
    component: loadable(() => import('../containers/Search/Search')),
    ...routes.search,
  },
  notFound: {
    component: loadable(() => import('../containers/NotFound/NotFound')),
    path: '/',
  },
};
