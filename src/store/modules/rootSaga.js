import { all } from 'redux-saga/effects';

import forecasts from './forecasts/sagas';

export default function* rootSaga() {
  return yield all([forecasts]);
}
