import React from 'react'
import styles from './style/layout.less'
import { Link } from 'dva/router'
import { Icon } from 'antd'
const Footer = (props)=> {
  return(
    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <ul>
          <li>
            <p>建站初衷</p>
            <p>此站旨在记录我成长过程，分享我在前端学习路上的点点滴滴，也希望借此结交更多前辈好友,愿与你共同分享，一起进步！</p>
          </li>
          <li className={styles.link}>
            <p>相关链接</p>
            <ul>
              <li><Link to={{ pathname: '/artcle' }}><Icon type="edit" />博文</Link></li>
              <li><Link to={{ pathname: '/resource' }}><Icon type="like-o" />资源</Link></li>
              <li><Link to={{ pathname: '/message' }}><Icon type="message" />留言</Link></li>
              <li><Link to={{ pathname: '/project' }}><Icon type="heart-o" />项目</Link></li>
              <li><Link to={{ pathname: '/link' }}><Icon type="link" />友链</Link></li>
            </ul>
          </li>
          <li className={styles.about}>
            <p>关于我</p>
            <ul>
              <li><a href="http://github.com/zhouyingkai1" target='_blank'><Icon type='github'/></a></li>
            </ul>
            <div className={styles.linkAbout}>
              <Link to={{ pathname: '/about' }}>关于此站</Link>
              {/*<Link to={{ pathname: '/link' }}>关于此站</Link>*/}
            </div>
          </li>
        </ul>
        <div className={styles.desc}>
          <p>design + code by @周莹凯,React + PHP + MySQL + Ant Design</p>
          <p>感谢 <a href="http://www.timeface.cn" target='_blank'>时光流影 </a>小伙伴的帮助</p>
        </div>
      </div>
    </div>
  )
}
export default Footer