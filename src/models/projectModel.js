export default{
  namespace: 'project',
  state: {
    projectLists: [
      {
        id: 1,
        title: '718明星粉丝节',
        desc: '718明星粉丝节',
        img: 'http://img1.timeface.cn/story/32445fd862d458cbdf2cb485016babdd.jpg',
        url: 'http://www.apgmart.com',
        detail: '718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节'
      },
      {
        id: 2,
        title: '718明星粉丝节',
        desc: '718明星粉丝节',
        img: 'http://img1.timeface.cn/story/32445fd862d458cbdf2cb485016babdd.jpg',
        url: 'http://www.apgmart.com',
        detail: '718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节'
      },
      {
        id: 3,
        title: '718明星粉丝节',
        desc: '718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节',
        img: '//dn-lay.qbox.me/labs/lofox.jpg?imageView/1/w/400/h/400/q/85',
        url: 'http://www.apgmart.com',
        detail: '718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节'
      },
      {
        id: 4,
        title: '718明星粉丝节',
        desc: '718明星粉丝节',
        img: 'http://img1.timeface.cn/story/32445fd862d458cbdf2cb485016babdd.jpg',
        url: 'http://www.apgmart.com',
        detail: '718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节'
      },{
        id: 5,
        title: '718明星粉丝节',
        desc: '718明星粉丝节',
        img: '//dn-lay.qbox.me/labs/lofox.jpg?imageView/1/w/400/h/400/q/85',
        url: 'http://www.apgmart.com',
        detail: '718明星粉丝节71ddddddddddddddddddddddddddddddddddddddddddddd8明星ddd粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节718明星粉丝节'
      }
    ],
  },
  effects: {

  },
  reducers: {
    updateState(state,{payload}){
      return { ...state, ...payload}
    }
  }
}