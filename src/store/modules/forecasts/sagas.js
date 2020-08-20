import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { OPENWEATHER_API_KEY } from 'react-native-dotenv';

import api from '~/services/api';

import { updateForecastsSuccess } from './actions';

export function* updateForecasts({ payload }) {
  try {
    const { latitude, longitude } = payload.data;

    const { data } = yield call(
      api.get,
      `onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${OPENWEATHER_API_KEY}`
    );

    yield put(updateForecastsSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Verifique os dados e tente novamente.'
    );
  }
}

export default all([
  takeLatest('@user/UPDATE_FORECASTS_REQUEST', updateForecasts),
]);
