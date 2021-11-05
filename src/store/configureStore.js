import { createStore, compose, applyMiddleware } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  blacklist: ['router'],
  storage,
};

const persistedReducer = (injectedReducers) =>
  persistReducer(persistConfig, rootReducer(injectedReducers));

const configureStore = (initialState = {}) => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancers = [applyMiddleware(...middlewares)];
  const injectEnhancer = createInjectorsEnhancer({
    createReducer: persistedReducer,
    runSaga,
  });

  const store = createStore(
    persistedReducer(),
    initialState,
    composeEnhancers(...enhancers, injectEnhancer)
  );
  const persistor = persistStore(store);

  // Extensions
  store.runSaga = runSaga;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(persistedReducer(store.injectedReducers));
    });
  }

  return { store, persistor };
};

export default configureStore;
