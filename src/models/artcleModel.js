export default{
  namespace: 'artcle',
  state: {
    artcleList:[
      {
        artcleDesc: '周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动',
        comment: '10',
        createTime: '1499844708',
        id: '26',
        img: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        isLike: false,
        items: 1,
        like: 3,
        point: 14,
        status: 1,
        tags: [
          {
            id: 1,
            title: 'javascript',
            url: 'js'
          },
          {
            id: 2,
            title: 'php',
            url: 'php'
          }
        ],
        title: '测试一下标题',
      },
      {
        artcleDesc: '周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动',
        comment: '10',
        createTime: '1499844708',
        id: '28',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg',
        isLike: false,
        items: 1,
        like: 3,
        point: 14,
        status: 1,
        tags: [
          {
            id: 1,
            title: 'javascript',
            url: 'js'
          },
          {
            id: 2,
            title: 'php',
            url: 'php'
          },
        ],
        title: '测试一下标题',
      }
    ],
    pagination: {
      current: 1,
      total: 10,
    },
    hotLists: [
      {
        artcleDesc: '周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动',
        comment: '10',
        createTime: '1499844708',
        id: '26',
        img: 'http://static.timeface.cn/times/2d3248f3b4380e922db426ef78cdfca1.jpg',
        isLike: false,
        items: 1,
        like: 3,
        point: 14,
        status: 1,
        tags: [
          {
            id: 1,
            title: 'javascript',
            url: 'js'
          },
          {
            id: 2,
            title: 'php',
            url: 'php'
          }
        ],
        title: '移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动',
      },
      {
        artcleDesc: '周jQuery更新到了3.2.0，移除了很多过时的API，网路上也发起了《You dont need jQuery》 活动',
        comment: '10',
        createTime: '1499844708',
        id: '28',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg',
        isLike: false,
        items: 1,
        like: 3,
        point: 14,
        status: 1,
        tags: [
          {
            id: 1,
            title: 'javascript',
            url: 'js'
          },
          {
            id: 2,
            title: 'php',
            url: 'php'
          },
        ],
        title: '测试一下标题',
      }
    ],
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
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        
      })
    }
  },
  effects: {

  },
  reducers: {
    
  }
}