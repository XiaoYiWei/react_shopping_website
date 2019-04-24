import { createAction } from 'redux-actions';
import { SET_LOGIN_USER, API_CALL_START, API_CALL_END, LOGIN_FLOW } from '../constants/index';

export const setLoginUser = createAction(SET_LOGIN_USER, userData => ({ userData }));
export const startCallingApi = createAction(API_CALL_START);
export const endCallingApi = createAction(API_CALL_END);
export const startLoginFlow = createAction(LOGIN_FLOW, (userId, userPwd) => ({ userId, userPwd }));

export default { setLoginUser, startCallingApi, endCallingApi, startLoginFlow };
