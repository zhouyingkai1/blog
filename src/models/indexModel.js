export default{
  namespace: 'main',
  state: {
    main: true
  },
  effects: {

  },
  reducers: {
    updateState(state,{payload}){
      return { ...state, ...payload}
    }
  }
}