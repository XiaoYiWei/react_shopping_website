import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState, history) {
  const createStoreWithMiddleware = compose(
    // Redux Devtools
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  )(createStore);
  const store = createStoreWithMiddleware(rootReducer);
  //   if (module.hot) {
  //     // Enable Webpack hot module replacement for reducers
  //     module.hot.accept("./reducer", () => {
  //       const nextRootReducer = require("./reducer");
  //       store.replaceReducer(nextRootReducer);
  //     });
  //   }
  return store;
}
