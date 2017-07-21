export default{
  namespace: 'home',
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