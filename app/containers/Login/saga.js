import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { loginSuccess, loginError } from './actions';
import { LOGIN_PENDING } from './constants';

export function* login(action) {
  const { data } = action;

  const clonedData = { ...data };

  delete clonedData.accountRole;
  const payload = {
    url: '/auth/sign_in',
    params: null,
    data: clonedData,
  };

  try {
    const respond = yield call(Api.post, payload);
    yield put(loginSuccess(respond));
  } catch (err) {
    if ((err && err[0]) === 'Invalid login credentials. Please try again.') {
      try {
        const newRespond = yield call(Api.post, {
          ...payload,
          url: '/admin_auth/sign_in',
        });
        yield put(loginSuccess(newRespond));
      } catch (error) {
        yield put(loginError(error));
      }
    } else {
      yield put(loginError(err));
    }
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_PENDING, login);
}
