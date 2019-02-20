import { createAction} from 'redux-actions';
import { SET_USER_NAME } from './../constants/index'
const setUserName = createAction(SET_USER_NAME, (userName = 'wryyy') => ({ userName }));

export default { setUserName }