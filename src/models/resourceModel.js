export default{
  namespace: 'resource',
  state: {
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
    resources: [
      {
        id: 1,
        title: '瀑布流插件Masonry',
        url: 'https://masonry.desandro.com/',
        desc: '一款很好用的瀑布流插件,一款很好用的瀑布流插件,一款很好用的瀑布流插件,一款很好用的瀑布流插件,一款很好用的瀑布流插件,一款很好用的瀑布流插件',
        tags: [
          {
            id: 1,
            name: '插件',
          }
        ],
        createTime: '1499844708',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
      },
      {
        id: 2,
        title: '瀑布流插件Masonry',
        url: 'https://masonry.desandro.com/',
        desc: '一款很好用的瀑布流插件一款很好用的瀑布流插件,一款很好用的瀑布流插件,',
        tags: [
          {
            id: 1,
            name: '插件',
          }
        ],
        createTime: '1499844708',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
      },
      {
        id: 3,
        title: '瀑布流插件Masonry',
        url: 'https://masonry.desandro.com/',
        desc: '一款很好用的瀑布流插件',
        tags: [
          {
            id: 1,
            name: '插件',
          }
        ],
        createTime: '1499844708',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
      },
      {
        id: 4,
        title: '瀑布流插件Masonry',
        url: 'https://masonry.desandro.com/',
        desc: '一款很好用的瀑布流插件一款很好用的瀑布流插件,',
        tags: [
          {
            id: 1,
            name: '插件',
          }
        ],
        createTime: '1499844708',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
      },
      {
        id: 5,
        title: '瀑布流插件Masonry',
        url: 'https://masonry.desandro.com/',
        desc: '一款很好用的瀑布流插件一款很好用的瀑布流插件,一款很好用的瀑布流插件,一款很好用的瀑布流插件,',
        tags: [
          {
            id: 1,
            name: '插件',
          }
        ],
        createTime: '1499844708',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
      },
      {
        id: 6,
        title: '瀑布流插件Masonry',
        url: 'https://masonry.desandro.com/',
        desc: '一款很好用的瀑布流插件',
        tags: [
          {
            id: 1,
            name: '插件',
          }
        ],
        createTime: '1499844708',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
      },
      {
        id: 7,
        title: '瀑布流插件Masonry',
        url: 'https://masonry.desandro.com/',
        desc: '一款很好用的瀑布流插件',
        tags: [
          {
            id: 1,
            name: '插件',
          }
        ],
        createTime: '1499844708',
        img: 'http://ossweb-img.qq.com/images/lol/v1/banner/pic-inner-v20.jpg'
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