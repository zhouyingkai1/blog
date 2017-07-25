import fetch from 'dva/fetch';
import 'fetch-detector'
import 'fetch-ie8'
import kits from '../utils/kits'
require('es6-promise').polyfill();
import pathInterceptor from './pathInterceptor';
import tokenInterceptor from './tokenInterceptor';

function parseJSON(response) {
  return response.text().then(function(text) {
    return text ? JSON.parse(text) : {status: 200}
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function handleError(error) {
  if (error.response && error.response.status) {
    return{
      code: error.response && error.response.status,
      msg: error.response && error.response.body || '网络发生异常'
    };
  } else {
    return{code: 504, data: {code: 'timeout', msg: '请求超时'}};
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  url  = /http:\\/.test(url) ? url : pathInterceptor.request(url)
 return fetch(url, tokenInterceptor.request(options))
    .then(checkStatus)
    .then(!~'headHEAD'.indexOf(options.method)&&parseJSON)
    .then((data) => data)
    .catch((err) => handleError(err));
}
