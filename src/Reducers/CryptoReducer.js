import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from '../Utils/Constants';

const initicalState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
}

export default function(state = initicalState, action) {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      })
      break;
    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      })
      break;
    case FETCHING_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err,
      })
    default:
      return initicalState;
      break;
  }
}
