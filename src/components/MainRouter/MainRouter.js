import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Loader from '../Loader/Loader';
import NotFound from '../../containers/NotFound/NotFound';

const LazyHome = React.lazy(() => import('../../containers/Home/Home'));
const LazyMovieInfo = React.lazy(() => import('../../containers/MovieInfo/MovieInfo'));
const LazyGenre = React.lazy(() => import('../../containers/Genre/Genre'));
const LazySearch = React.lazy(() => import('../../containers/Search/Search'));

function MainRouter() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route path={['/movie/:id', '/tv/:id']} component={LazyMovieInfo} />
          <Route path="/genre/:name" component={LazyGenre} />
          <Route path="/search" component={LazySearch} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

export default MainRouter;
