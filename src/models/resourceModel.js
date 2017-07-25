import * as resourceServices from '../services/resourceServices'

export default{
  namespace: 'resource',
  state: {
    tagLists: [
      {
        id: 1,
        name: 'javascript'
      },
      {
        id: 2,
        name: 'php'
      },
      {
        id: 3,
        name: 'react'
      },
      {
        id: 4,
        name: 'mysql'
      },
    ],
    resources: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname == '/resource'){
          dispatch({
            type: 'getResources'
          })
        }
      })
    }
  },
  effects: {
    *getResources({ payload }, { call, put }) {
      const result = yield call(resourceServices.getResources,{page: '1'})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            resources: result.data
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