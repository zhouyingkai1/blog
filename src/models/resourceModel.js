import * as resourceServices from '../services/resourceServices'

export default{
  namespace: 'resource',
  state: {
    tagLists: [],
    resources: [],
    queryTag: '',
    isLoading: true
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname == '/resource'){
          dispatch({
            type: 'getResources',
            payload: {
              queryTag: ''
            }
          })
          dispatch({
            type: 'getResourceTags'
          })
        }
      })
    }
  },
  effects: {
    *getResources({ payload }, { call, put }) {
      const result = yield call(resourceServices.getResources,{queryTag: payload.queryTag})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            resources: result.data,
            queryTag: payload.queryTag,
            isLoading: false
          }
        })
      }
    },
    *getResourceTags({ payload }, { call, put }) {
      const result = yield call(resourceServices.getResourceTags,{})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            tagLists: result.data
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