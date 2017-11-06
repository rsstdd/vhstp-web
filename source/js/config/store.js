import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'dev/logger';

import rootReducer from 'reducers';

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
export default () => {
  let store = null;
  let middleware = null;

  if (isProduction) {
    middleware = applyMiddleware(thunk);
  } else {
    middleware = applyMiddleware(thunk);
    // middleware = applyMiddleware(thunk, logger);
    if (!process.env.SERVER_RENDER && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      );
    }
  }

  store = createStore(
    rootReducer,
    middleware
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
