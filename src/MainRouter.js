import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import Page404 from "./screens/Page404";

const LazyHome = React.lazy(() => import("./screens/Home"));
const LazyItemInfo = React.lazy(() => import("./screens/ItemInfo"));
const LazyGenre = React.lazy(() => import("./screens/Genre"));
const LazySearchItem = React.lazy(() => import("./screens/SearchItem"));

function MainRouter() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={LazyHome} />
            <Route path={["/movie/:id", "/tv/:id"]} component={LazyItemInfo} />
            <Route path="/genre/:name" component={LazyGenre} />
            <Route path="/search" component={LazySearchItem} />
            <Route path="*" component={Page404} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default MainRouter;
