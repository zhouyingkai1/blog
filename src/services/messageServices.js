import request from '../utils/request';

/*获取留言数据*/
export function getMessageLists(params) {
  return request('/message/getMessageLists.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
/*提交留言*/
export function submitMessage(params) {
  return request('/message/submitMessage.php', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}