import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers } from 'redux-immutable';
import loginReducer from './login';

export default history =>
  combineReducers({
    router: connectRouter(history),
    loginReducer
    // ,other reducer...
  });
