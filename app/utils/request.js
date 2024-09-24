import axios from 'axios';
import history from 'utils/history';
import { ROOT_URI, API_TIMEOUT, ROUTER_LOGIN } from './constants';

const instance = axios.create({
  baseURL: ROOT_URI,
  timeout: API_TIMEOUT,
});

const sendRequest = ({ url, method, params, data, getRespondHeader }) =>
  instance({
    url,
    method,
    params,
    data,
    headers: {
      uid: localStorage.getItem('uid') || '',
      client: localStorage.getItem('client') || '',
      'access-token': localStorage.getItem('access-token') || '',
    },
  })
    .then(response => {
      if (!response.data.error || response.data.error === 0) {
        return handleSuccess(response, getRespondHeader);
      }
      return handleError(response);
    })
    .catch(error => handleError(error));

export const get = ({ url, params, getRespondHeader }) =>
  sendRequest({ url, params, getRespondHeader, method: 'GET' });

export const post = ({ url, params, data, getRespondHeader }) =>
  sendRequest({ url, params, data, getRespondHeader, method: 'POST' });

export const put = ({ url, params, data, getRespondHeader }) =>
  sendRequest({ url, params, data, getRespondHeader, method: 'PUT' });

export const deleteData = ({ url, params, data, getRespondHeader }) =>
  sendRequest({ url, params, data, getRespondHeader, method: 'DELETE' });

const handleSuccess = (response, getRespondHeader) => {
  if (
    response.headers.uid &&
    response.headers.client &&
    response.headers['access-token']
  ) {
    localStorage.setItem('uid', `${response.headers.uid}`);
    localStorage.setItem('client', `${response.headers.client}`);
    localStorage.setItem('access-token', `${response.headers['access-token']}`);
  }

  if (getRespondHeader) {
    const respond = {
      totalCount: +response.headers['x-total'],
      data: response.data,
    };
    return Promise.resolve(respond);
  }
  return Promise.resolve(response && response.data);
};

const handleError = error => {
  if (error.response) {
    if (error.response.status === 401) {
      history.push(ROUTER_LOGIN);
    }
    return Promise.reject(
      error.response.data.errors || error.response.data.error,
    );
  }

  return Promise.reject(error);
};
