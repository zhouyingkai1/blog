import * as projectServices from '../services/projectServices'

export default{
  namespace: 'project',
  state: {
    projectLists: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname == '/project'){
          dispatch({
            type: 'getProjectLists'
          })
        }
      })
    }
  },
  effects: {
    *getProjectLists({ payload }, { call, put }) {
      const result = yield call(projectServices.getProject,{page: '1'})
      if(result.code === '000'){
        yield put({
          type: 'updateState',
          payload: {
            projectLists: result.data
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