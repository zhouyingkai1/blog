import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/link.less'
import { Icon } from 'antd'
const Link = (props)=> {
  const { linkLists } = props.link
  return(
    <div className={styles.link}>
      <div className={styles.top}>
        <h1><Icon type="bulb" />关于友链</h1>
        <div className={styles.detail}>
          <p>希望借此结交更多前辈好友！</p>
          <p>欢迎交换友情链接，请给我邮件13625695226@163.com！</p>
          <p>同时也收集一些优秀的资源网站，让网页开发更加的简单有趣！</p>
        </div>
      </div>
      <div className={styles.list}>
        {
          linkLists.map((item, index) => {
            return (
              <div key={item.id} className={styles.item}>
                <a href={item.url} target='_blank'>
                  <h3 title={item.name}><img src={item.avatar} alt=""/>{item.name}</h3>
                  <p>{item.desc}</p>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
const mapStateToProps = link => link
export default connect(mapStateToProps)(Link)