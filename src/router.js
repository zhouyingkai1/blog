import React from 'react';
import { Router, browserHistory } from 'dva/router';

export default function ({ history, app }) {
  const routes = [
    {
      name: 'index',
      path: '/',
      component: require('./routes/IndexPage'),
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          app.model(require('./models/example'))
          cb(null, require('./routes/IndexPage'))
        }, 'home')
      }
    }
  ]
  //监听路由变化
  browserHistory.listen(location => {
    console.log('路由变化')
  })
  return (
    <Router history={history} routes={routes}></Router>
  );
}