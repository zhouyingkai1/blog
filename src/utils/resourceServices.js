import request from '../utils/request';

/*获取资源*/
export function getResources(params) {
  return request('/resources/getResources.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}