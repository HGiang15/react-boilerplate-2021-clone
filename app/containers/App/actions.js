import { ROUTER_LOGIN } from 'utils/constants';
import { handleLogout } from 'utils/helpers';

import {
  DEFAULT_ACTION,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CLEAR_ALL_NOTIFY_STATUS,
  CLEAR_COMMON_STATE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function clearAllNotifyStatus() {
  return {
    type: CLEAR_ALL_NOTIFY_STATUS,
  };
}

export function clearCommonData() {
  return {
    type: CLEAR_COMMON_STATE,
  };
}

export function logout(data) {
  return {
    type: LOGOUT_PENDING,
    data,
  };
}

export function logoutSuccess(respond) {
  handleLogout(ROUTER_LOGIN);
  return {
    type: LOGOUT_SUCCESS,
    respond,
  };
}

export function logoutError(error) {
  handleLogout(ROUTER_LOGIN);
  return {
    type: LOGOUT_ERROR,
    error,
  };
}
