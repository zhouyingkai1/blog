import * as messageServices from '../services/messageServices'
import { getAvatarLists } from '../services/commonServices'
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
    avatarList: [],
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
          dispatch({ 
            type: 'getAvatarLists',
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
    },
    *getAvatarLists({ payload }, { call, put }) {
      const result = yield call(getAvatarLists,{})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            avatarList: result.data
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