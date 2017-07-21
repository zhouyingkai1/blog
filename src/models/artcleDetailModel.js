export default{
  namespace: 'detail',
  state: {
    artcleDetail:{
      id: 1,
      title:'测试标题',
      tags:[
        {
          id:10,
          title:'前端',
          url:'frontend'
        }
      ],
      createTime: 1488782302,
      desc:'描述',
      img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
    },
    comment:{
      data:[
        {
          comment: '测试评论',
          avator: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg',
          userName: 'zyk',
          createTime: 1488782302,
        }
      ],
    },
    aboutLists:[
      {
        title:'相关链接',
        id: 2,
      },
    ],
  },
  effects: {

  },
  reducers: {
    
  }
}