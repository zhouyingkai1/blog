import request from '../utils/request';

/*获取侧边 标签列表*/
export function getArtcleTags(params) {
  return request('/artcle/getArtcleTags.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

/*查询文章列表*/
export function getArtcleLists(params) {
  return request('/artcle/getArtcleLists.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
/*获取热门文章列表*/
export function getHotArtcle(params) {
  return request('/artcle/getHotArtcle.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
