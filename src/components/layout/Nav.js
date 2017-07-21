import React from 'react'
import styles from './style/layout.less'
import { Link, routerRedux } from 'dva/router'
const Nav = (props)=> {
  return(
    <div className={styles.nav}>
      <ul>
        <li className={location.pathname == '/home'? styles.act: ''}><Link to={{ pathname: '/home' }} >首页</Link></li>
        <li className={location.pathname == '/artcle' || location.pathname == '/detail'? styles.act: ''}><Link to={{ pathname: '/artcle' }}>博文</Link></li>
        <li className={location.pathname == '/project'? styles.act: ''}><Link to={{ pathname: '/project' }}>项目</Link></li>
        <li className={location.pathname == '/resource'? styles.act: ''}><Link to={{ pathname: '/resource' }}>资源</Link></li>
        <li className={location.pathname == '/message'? styles.act: ''}><Link to={{ pathname: '/message' }}>留言</Link></li>
        <li className={location.pathname == '/link'? styles.act: ''}><Link to={{ pathname: '/link' }}>友链</Link></li>
      </ul>
    </div>
  )
}
export default Nav