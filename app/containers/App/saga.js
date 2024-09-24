/* eslint-disable prefer-destructuring */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { detechCurrentUserRole } from 'utils/helpers';
import { logoutSuccess, logoutError } from './actions';
import { LOGOUT_PENDING } from './constants';

export function* logout(action) {
  const { data } = action;

  let url = '/auth/sign_out';

  if (detechCurrentUserRole(['super', 'master'])) {
    url = '/admin_auth/sign_out';
  }
  const payload = {
    url,
    data,
  };
  try {
    const respond = yield call(Api.deleteData, payload);
    yield put(logoutSuccess(respond));
  } catch (err) {
    yield put(logoutError(err));
  }
}

export default function* watchAll() {
  yield all([takeLatest(LOGOUT_PENDING, logout)]);
}
