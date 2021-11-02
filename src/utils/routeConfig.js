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
  tv: {
    component: loadable(() => import('../containers/Home/Home')),
    ...routes.tv,
  },
  movie: { component: loadable(() => import('../containers/Home/Home')), ...routes.movie },
  info: {
    component: loadable(() => import('../containers/Info/Info')),
    ...routes.info,
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
