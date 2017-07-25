import request from '../utils/request';

/*获取侧边 标签列表*/
export function getArtcleTags(params) {
  return request('/artcle/getArtcleTags.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}