import { put, takeLatest, all, delay, call } from 'redux-saga/effects';
import { API_CALL_START, API_CALL_END, LOGIN_FLOW } from '../components/login/constants';
import { setLoginUser } from '../components/login/action';

function* asyncFetchUser(action) {
  const { userId } = action.payload;
  yield put({ type: API_CALL_START });
  yield delay(340);

  const response = yield call(fetch, 'http://northwind.servicestack.net/customers.json');
  const jsonData = yield call([response, 'json']);

  const fetchedUser = jsonData.Customers.find(x => x.Id === userId);
  if (fetchedUser !== undefined) {
    yield put({ type: 'USER_FETCHED', userData: fetchedUser });
    yield put(setLoginUser(fetchedUser));
  } else {
    yield put({ type: 'User_Not_Fetched' });
  }
  yield put({ type: API_CALL_END });
}

export default function* userSagas() {
  yield all([
    yield takeLatest(LOGIN_FLOW, asyncFetchUser)
    // 其他的api可以繼續定義在此
  ]);
}
