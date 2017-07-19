import React from 'react'
import styles from './style/layout.less'
import { Link } from 'dva/router'
const Nav = (props)=> {
  return(
    <div className={styles.nav}>
      <ul>
        <li className={styles.act}><Link>首页</Link></li>
        <li><Link>博文</Link></li>
        <li><Link>项目</Link></li>
        <li><Link>资源</Link></li>
        <li><Link>留言</Link></li>
        <li><Link>友链</Link></li>
      </ul>
    </div>
  )
}
export default Nav