import request from '../utils/request';

/*评论文章*/
export function submitComment(params) {
  return request('/artcleDetail/submitComment.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
/*通过文章id查询详情*/
export function getArtcleDetail(params) {
  return request('/artcleDetail/getArtcleDetail.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
/*通过文章id查询评论列表*/
export function getArtcleComment(params) {
  return request('/artcleDetail/getArtcleComment.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
/*通过文章标签查询相关热门文章*/
export function getHotAbout(params) {
  return request('/artcleDetail/getHotAbout.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}