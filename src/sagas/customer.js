import { put, takeLatest, all, delay } from 'redux-saga/effects';
import produce from 'immer';

function* asyncFetchCustomers() {
  yield put({ type: 'API_START_CALLING' });
  yield delay(340);
  const testData = [];
  const loadedCustomers = produce(testData, draft => {
    draft.length = 0;
    draft.push(window.fetch('http://northwind.servicestack.net/customers.json').json());
  });
  yield put({ type: 'SET_CUMSTOMERS', data: loadedCustomers });
  yield put({ type: 'API_END_CALLING' });
}

export default function* customerSagas() {
  yield all([
    yield takeLatest('GET_CUMSTOMERS', asyncFetchCustomers)
    // 其他的api可以繼續定義在此
  ]);
}
