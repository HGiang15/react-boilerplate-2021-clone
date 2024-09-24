/*
 *
 * Login actions
 *
 */
import history from 'utils/history';
import { ROUTER_INDEX } from 'utils/constants';
import {
  DEFAULT_ACTION,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function login(data) {
  return {
    type: LOGIN_PENDING,
    data,
  };
}

export function loginSuccess(respond) {
  localStorage.setItem('user_info', JSON.stringify(respond.data));

  history.push(ROUTER_INDEX);

  return {
    type: LOGIN_SUCCESS,
    respond,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
