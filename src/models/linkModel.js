export default{
  namespace: 'link',
  state: {
    linkLists: [
      {
        id: 1,
        name: '小东西',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        desc: '一句话介绍一下',
        url: 'http://timeface.cn'
      },
      {
        id: 2,
        name: '小东西',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        desc: '一句话介绍一下'
      },
      {
        id: 3,
        name: '小东西',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        desc: '一句话介绍一下'
      },
      {
        id: 4,
        name: '小东西',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        desc: '一句话介绍一下'
      },
      {
        id: 5,
        name: '小东西',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        desc: '一句话介绍一下'
      },
      {
        id: 6,
        name: '小东西',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        desc: '一句话介绍一下'
      },
    ]
  },
  effects: {

  },
  reducers: {
    updateState(state,{payload}){
      return { ...state, ...payload}
    }
  }
}