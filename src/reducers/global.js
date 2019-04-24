import { handleActions } from 'redux-actions';
import { API_CALL_START, API_CALL_END } from '../components/login/constants/index';

const initialState = {
  isApiCalling: false,
  version: '0.0.0'
};
const actions = {};
actions[API_CALL_START] = (state, action) => {
  console.info('global.js catch API_CALL_START event', action);
  // return state.set('userName', action.payload.userName);
  return state;
};
actions[API_CALL_END] = (state, action) => {
  console.info('global.js catch API_CALL_END event', action);
  // return state.set('userName', action.payload.userName);
  return state;
};

const reducer = handleActions(actions, initialState);

export default reducer;
