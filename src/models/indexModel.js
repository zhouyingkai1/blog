export default{
  namespace: 'main',
  state: {
  },
  effects: {

  },
  reducers: {
    updateState(state,{payload}){
      return { ...state, ...payload}
    }
  }
}