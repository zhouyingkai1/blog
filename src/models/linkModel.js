import * as linkServices from '../services/linkServices'
export default{
  namespace: 'link',
  state: {
    linkLists: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname == '/link'){
          dispatch({
            type: 'getArtcleTags'
          })
        }
      })
    }
  },
  effects: {
    *getArtcleTags({ payload }, { call, put }) {
      const result = yield call(linkServices.getLinkLists,{page: '1'})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            linkLists: result.data
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