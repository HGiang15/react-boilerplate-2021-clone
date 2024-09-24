import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CLEAR_ALL_NOTIFY_STATUS,
  CLEAR_COMMON_STATE,
} from './constants';

const initialNotifiesStatus = {};

export const initialState = {
  loading: false,
  shouldReloadPage: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CLEAR_COMMON_STATE:
        return { ...initialState };
      case CLEAR_ALL_NOTIFY_STATUS:
        return {
          ...state,
          ...initialNotifiesStatus,
        };
      case LOGOUT_PENDING:
        return { ...state, loading: true };
      case LOGOUT_SUCCESS:
        return {
          ...initialState,
        };
      case LOGOUT_ERROR:
        return { ...state, loading: false };
      case DEFAULT_ACTION:
        break;
    }
  });

export default appReducer;
