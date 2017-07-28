export default{
  namespace: 'about',
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