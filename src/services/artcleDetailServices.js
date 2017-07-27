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