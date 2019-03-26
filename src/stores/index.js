import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createBrowserHistory } from 'history';
import rootSaga from '../sagas';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

export default function() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  // const Store = createStore(Reducer, applyMiddleware(saga));

  const initialState = Map({});

  const store = createStore(createRootReducer(history), initialState, composedEnhancers);

  sagaMiddleware.run(rootSaga);
  return store;
}
