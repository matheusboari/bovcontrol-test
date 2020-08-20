import produce from 'immer';

const INITIAL_STATE = {
  daily: null,
  current: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/UPDATE_FORECASTS_SUCCESS': {
        draft.daily = action.payload.forecasts.daily;
        draft.current = action.payload.forecasts.current;
        break;
      }
      default:
    }
  });
}
