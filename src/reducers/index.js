import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers } from 'redux-immutable';
import loginReducer from './login';
import globalReducer from './global';

export default history =>
  combineReducers({
    router: connectRouter(history),
    globalReducer,
    loginReducer
    // ,other reducer...
  });
