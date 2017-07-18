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
        }
      ]
    }
  ]
  //监听路由变化
  browserHistory.listen(location => {
    if(location.pathname === '/'){
      app._store.dispatch(routerRedux.replace('/home'))
    }
  })
  return (
    <Router history={history} routes={routes}></Router>
  );
}