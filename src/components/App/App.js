import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import routeConfig from '../../utils/routeConfig';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './App.css';

function App({ history }) {
  return (
    <div className="app">
      <ErrorBoundary>
        <Router history={history}>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Switch>
              {Object.keys(routeConfig).map((routeKey) => {
                const { component, path, isExact } = routeConfig[routeKey];
                return <Route path={path} component={component} key={routeKey} exact={isExact} />;
              })}
            </Switch>
          </Suspense>
        </Router>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

App.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
export default App;
