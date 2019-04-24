import { fork } from 'redux-saga/effects';
import customerSagas from './customer';
import loginSagas from './loginSagas';

export default function*() {
  yield fork(customerSagas);
  yield fork(loginSagas);
  // yield fork(otherSagas);
}
