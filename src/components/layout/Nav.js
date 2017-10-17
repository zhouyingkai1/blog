import React from 'react'
import styles from './style/layout.less'
import { Link, routerRedux } from 'dva/router'
import { Icon } from 'antd'
const Nav = (props)=> {
  return(
    <div className={styles.nav}>
      <ul>
        <li className={/home/.test(location.hash)? styles.act: ''}><Link to={{ pathname: '/home' }} ><Icon type="home" />首页</Link></li>
        <li className={/(artcle|detail)/.test(location.hash) ? styles.act: ''}><Link to={{ pathname: '/artcle' }}><Icon type="edit" />博文</Link></li>
        <li className={/resource/.test(location.hash)? styles.act: ''}><Link to={{ pathname: '/resource' }}><Icon type="like-o" />资源</Link></li>
        <li className={/message/.test(location.hash)? styles.act: ''}><Link to={{ pathname: '/message' }}><Icon type="message" />留言</Link></li>
        <li className={/project/.test(location.hash)? styles.act: ''}><Link to={{ pathname: '/project' }}><Icon type="heart-o" />项目</Link></li>
        <li className={/link/.test(location.hash)? styles.act: ''}><Link to={{ pathname: '/link' }}><Icon type="link" />友链</Link></li>
      </ul>
    </div>
  )
}
export default Nav