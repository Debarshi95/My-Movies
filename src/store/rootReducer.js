import { combineReducers } from 'redux';

import homeReducer from './reducers/homeReducer';

const rootReducer = (injectedReducers = {}) => {
  const combinedReducer = combineReducers({
    ...injectedReducers,
    // Default reducers
    home: homeReducer,
  });

  return combinedReducer;
};

export default rootReducer;
