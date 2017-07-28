import request from '../utils/request';

/*获取侧边 标签列表*/
export function getAvatarLists(params) {
  return request('/common/getAvatarLists.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
