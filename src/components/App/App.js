import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './App.css';
import TypeProvider from '../../providers/TypeProvider';
import routeConfig from '../../utils/routeConfig';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

function App() {
  return (
    <TypeProvider>
      <div className="app">
        <Router>
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
        </Router>
        <Footer />
      </div>
    </TypeProvider>
  );
}

export default App;
