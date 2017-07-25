import request from '../utils/request';

/*获取友情链接列数据*/
export function getLinkLists(params) {
  return request('/friendLink/getLinkLists.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}