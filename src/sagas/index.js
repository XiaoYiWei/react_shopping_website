import { fork } from 'redux-saga/effects';
import customerSagas from './customer';

export default function*() {
  yield fork(customerSagas);
  // yield fork(otherSagas);
}
