import produce from 'immer';
import { handleActions } from 'redux-actions';
import { SET_LOGIN_USER } from '../components/login/constants/index';

const initialState = {
  userName: undefined,
  userId: undefined,
  postalCode: undefined
};
const actions = {};
actions[SET_LOGIN_USER] = (state, action) => {
  return produce(state, draft => {
    draft.userName = action.payload.userData.ContactName;
    draft.userId = action.payload.userData.Id;
    draft.postalCode = action.payload.userData.PostalCode;
  });
};

const reducer = handleActions(actions, initialState);

export default reducer;
