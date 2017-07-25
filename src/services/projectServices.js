import request from '../utils/request';

/*获取友情链接列数据*/
export function getProject(params) {
  return request('/project/getProjectLists.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}