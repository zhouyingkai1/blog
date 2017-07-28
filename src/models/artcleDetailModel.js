import * as artcleDetailServices from '../services/artcleDetailServices'
import { getAvatarLists } from '../services/commonServices'

import { Message } from 'antd'
export default {
  namespace: 'detail',
  state: {
    artcleDetail: {},
    comment: [],
    pagination: {
      current: 1,
      total: 0,
      pageSize: 10
    },
    aboutLists: [],
    avatarList: [],
    artcleId: ''
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname == '/detail') {
          const artcleId = location.query.id
          dispatch({
            type: 'getArtcleDetail',
            payload: {
              id: artcleId
            }
          })
          dispatch({
            type: 'updateState',
            payload: {
              artcleId: artcleId
            }
          })
          dispatch({
            type: 'getArtcleComment',
            payload: {
              artcleId: artcleId,
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
    *getArtcleDetail({ payload }, { call, put }) {
      const result = yield call(artcleDetailServices.getArtcleDetail, {
        artcleId: payload.id
      })
      if (result.code === '000') {
        yield put({
          type: 'updateState',
          payload: {
            artcleDetail: result.data
          }
        })
        yield put({
          type: 'getHotAbout',
          payload: {
            queryTag: result.data&&result.data.tag,
            artcleId: payload.id
          }
        })
      }else{
        Message.error('文章不存在')  
      }
    },
    *submitComment({ payload }, { call, put, select }) {
      const result = yield call(artcleDetailServices.submitComment, payload)
      const pagination = yield select(state=>state.detail.pagination)
      if (result.code === '000') {
        yield put({
          type: 'getArtcleComment',
          payload: {
            page: pagination.current,
            pageSize: pagination.pageSize,
            artcleId: payload.artcleId
          }
        })
      }
    },
    *getHotAbout({ payload }, { call, put, select }) {
      const result = yield call(artcleDetailServices.getHotAbout, payload)
      if (result.code === '000') {
        yield put({
          type: 'updateState',
          payload: {
            aboutLists: result.data,
          }
        })
      }
    },
    *getArtcleComment({ payload }, { call, put }) {
      const result = yield call(artcleDetailServices.getArtcleComment, {
        page: payload.page,
        pageSize: payload.pageSize,
        artcleId: payload.artcleId
      })
      if (result.code === '000') {
        yield put({
          type: 'updateState',
          payload: {
            comment: result.data,
            pagination: {
              current: payload.page,
              pageSize: payload.pageSize,
              total: Number(result.total)
            }
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
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}