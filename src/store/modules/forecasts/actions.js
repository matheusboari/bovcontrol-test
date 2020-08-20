export function updateForecastsRequest(data) {
  return {
    type: '@user/UPDATE_FORECASTS_REQUEST',
    payload: { data },
  };
}

export function updateForecastsSuccess(forecasts) {
  return {
    type: '@user/UPDATE_FORECASTS_SUCCESS',
    payload: { forecasts },
  };
}

export function updateForecastsFailure() {
  return {
    type: '@user/UPDATE_FORECASTS_FAILURE',
  };
}
