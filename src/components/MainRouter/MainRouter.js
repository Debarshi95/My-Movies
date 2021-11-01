import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Loader from '../Loader/Loader';
import routeConfig from '../../util/routeConfig';

function MainRouter() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          {Object.keys(routeConfig).map((routeKey) => {
            const Component = routeConfig[routeKey].component;
            const pathname = routeConfig[routeKey].path;
            return (
              <Route
                path={pathname}
                component={Component}
                key={routeKey}
                exact={routeConfig[routeKey].isExact}
              />
            );
          })}
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

export default MainRouter;
