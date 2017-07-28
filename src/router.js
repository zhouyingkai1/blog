import React from 'react';
import { routerRedux } from 'dva/router'
import { Router, browserHistory } from 'dva/router';

export default function ({ history, app }) {
  const routes = [
    {
      name: 'index',
      path: '/',
      component: require('./routes/index/Index'),
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          app.model(require('./models/homeModel'))
          cb(null, require('./routes/home/Home'))
        }, 'home')
      },
      childRoutes: [
        {
          name: 'home',
          path: 'home',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/homeModel')),
              cb(null, require('./routes/home/Home'))
            }, 'home')
          }
        },
        {
          name: 'artcle',
          path: 'artcle',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/artcleModel')),
              cb(null, require('./routes/artcle/Artcle'))
            }, 'artcle')
          }
        },
        {
          name: 'detail',
          path: 'detail',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/artcleDetailModel')),
              cb(null, require('./routes/artcleDetail/ArtcleDetail'))
            }, 'detail')
          }
        },
        {
          name: 'project',
          path: 'project',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/projectModel')),
              cb(null, require('./routes/project/Project'))
            }, 'project')
          }
        },
        {
          name: 'resource',
          path: 'resource',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/resourceModel')),
              cb(null, require('./routes/resource/Resource'))
            }, 'resource')
          }
        },
        {
          name: 'link',
          path: 'link',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/linkModel')),
              cb(null, require('./routes/link/Link'))
            }, 'link')
          }
        },
        {
          name: 'message',
          path: 'message',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/messageModel')),
              cb(null, require('./routes/message/Message'))
            }, 'message')
          }
        },
        {
          name: 'about',
          path: 'about',
          getComponent({},cb){
            require.ensure([], require => {
              app.model(require('./models/aboutModel')),
              cb(null, require('./routes/about/About'))
            }, 'about')
          }
        },
      ]
    }
  ]
  //监听路由变化
  browserHistory.listen(location => {
    if(location.pathname === '/'){
      app._store.dispatch(routerRedux.replace('/artcle'))
    }
  })
  return (
    <Router history={history} routes={routes}></Router>
  );
}