import * as artcleServices from '../services/artcleServices'
export default{
  namespace: 'artcle',
  state: {
    artcleList:[],
    pagination: {
      current: 1,
      total: 1,
      pageSize: 10
    },
    categroy: 0,
    tagName: '',
    isLoading: true,
    hotLists: [],
    tagLists: [],
    sideCategroy: [
      {
        id: 0,
        name: '全部分类'
      },
      {
        id: 1,
        name: '前端相关'
      },
      {
        id: 2,
        name: '心情随笔'
      },

    ],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname == '/artcle'){
          // dispatch({
          //   type: 'getArtcleTags'
          // })
          dispatch({
            type: 'getHotArtcle'
          })
          dispatch({
            type: 'getArtcleLists',
            payload: {
              page: 1,
              pageSize: 10,
              tagName: '',
              categroy: 0
            }
          })
        }
      })
    }
  },
  effects: {
    *getArtcleTags({ payload }, { call, put }) {
      const result = yield call(artcleServices.getArtcleTags,{page: '1'})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            tagLists: result.data,
          }
        })
      }
    },
    *getHotArtcle({ payload }, { call, put }) {
      const result = yield call(artcleServices.getHotArtcle,{})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            hotLists: result.data,
          }
        })
      }
    },
    *getArtcleLists({ payload }, { call, put }) {
      yield put({
        type: 'updateState',
        payload: {
          isLoading: true,
        }
      })
      const result = yield call(artcleServices.getArtcleLists,payload)
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            artcleList: result.data,
            pagination: {
              current: payload.page,
              total: Number(result.total),
              pageSize: payload.pageSize
            },
            tagName: payload.tagName,
            categroy: payload.categroy,
            isLoading: false
          }
        })
      }
    },
  },
  reducers: {
    updateState(state,{payload}){
      return { ...state, ...payload}
    }
  }
}