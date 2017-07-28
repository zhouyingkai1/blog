import * as messageServices from '../services/messageServices'
import { Message } from 'antd'
export default{
  namespace: 'message',
  state: {
    pagination: {
      current: 1,
      total: 1,
      pageSize: 10
    },
    messageData: [],
    avatarList: [
      'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg',
      'http://img1.timeface.cn/album/avator/e9912620fd56e48fb37695145c9e82d7.jpg',
      'http://img1.timeface.cn/avatar/c17bcaa3eda6ad86afa9bd089c54826d.jpg',
      'http://img1.timeface.cn/uploads/avator/41750ee13848062e0fc54ecaab062e43.png',
      'http://img1.timeface.cn/uploads/avator/default.png',
    ],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname == '/message'){
          dispatch({ 
            type: 'getMessageLists',
            payload: {
              page: 1,
              pageSize: 10 
            }
          })
        }
      })
    }
  },
  effects: {
    *getMessageLists({ payload }, { call, put }) {
      const result = yield call(messageServices.getMessageLists,{
        page: payload.page,
        pageSize: payload.pageSize
      })
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            messageData: result.data,
            pagination: {
              current: payload.page,
              total: Number(result.total),
              pageSize: payload.pageSize
            }
          }
        })
      }
    },
    *submitMessage({ payload }, { call, put }) {
      const result = yield call(messageServices.submitMessage,payload)
      if(result.code === '000'){
        Message.success('留言成功')
        yield put({
          type: 'getMessageLists',
          payload: {
            page: 1,
            pageSize: 10
          }
        })
      }
    }
  },
  reducers: {
    updateState(state,{payload}){
      return { ...state, ...payload}
    }
  }
}