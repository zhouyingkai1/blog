import * as artcleDetailServices from '../services/artcleDetailServices'
import { Message } from 'antd'
export default {
  namespace: 'detail',
  state: {
    artcleDetail: {},
    comment: {
      data: [
        {
          comment: '测试评论',
          avator: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg',
          userName: 'zyk',
          createTime: 1488782302,
        }
      ],
    },
    aboutLists: [
      {
        title: '相关链接',
        id: 2,
      },
    ],
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
          dispatch({
            type: 'getArtcleDetail',
            payload: {
              id: location.query.id
            }
          })
          dispatch({
            type: 'updateState',
            payload: {
              artcleId: location.query.id
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
      }else{
        Message.error('文章不存在')  
      }
    },
    *submitComment({ payload }, { call, put }) {
      const result = yield call(artcleDetailServices.submitComment, payload)
      if (result.code === '000') {
        
      }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}