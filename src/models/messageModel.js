export default{
  namespace: 'message',
  state: {
    pagination: {
      current: 1,
      total: 10,
    },
    messageData: [
      {
        id: 1,
        content: '测试一下评论',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        createTime: '1499844708',
        nickName: '周莹凯'
      },
      {
        id: 2,
        content: '测试一下评论',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        createTime: '1499844708',
        nickName: '周莹凯'
      },
      {
        id: 3,
        content: '测试一下评论',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        createTime: '1499844708',
        nickName: '周莹凯'
      },
      {
        id: 4,
        content: '测试一下长长的评论测试一下长长下长长的评论测试一下长长的评论测试下长长的评论测试一下长长的评论测试的评论测试一下长长的评论测试一下长长的评论测试一下长长的评论测试一下长长的评论测试一下长长的评论测试一下长长的评论测试一下长长的评论',
        avatar: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        createTime: '1499844708',
        nickName: '周莹凯'
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