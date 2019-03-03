import Immutable from 'immutable';

import { handleActions } from 'redux-actions';
import { SET_USER_NAME } from './../constants/index';

const initialState = Immutable.Map({
  userName: undefined
});
const actions = {};
actions[SET_USER_NAME] = (state: Immutable.Map<string, any>, action) => {
  return state.set('userName', action.payload.userName);
};

const reducer = handleActions(actions, initialState);

export default reducer;
