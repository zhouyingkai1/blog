import * as artcleDetailServices from '../services/artcleDetailServices'
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
    avatarList: [
      'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg',
      'http://img1.timeface.cn/album/avator/e9912620fd56e48fb37695145c9e82d7.jpg',
      'http://img1.timeface.cn/avatar/c17bcaa3eda6ad86afa9bd089c54826d.jpg',
      'http://img1.timeface.cn/uploads/avator/41750ee13848062e0fc54ecaab062e43.png',
      'http://img1.timeface.cn/uploads/avator/default.png',
    ],
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
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}