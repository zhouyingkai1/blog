import React from 'react'
import styles from './style/layout.less'
import { Button, Message } from 'antd'
const Header = (props)=> {
  return(
    <div className={styles.header}>
      <div className={styles.avatar}><img src={require('../../assets/yay.jpg')} alt=""/></div>  
      <div className={styles.title}>时光流影</div>
      <div className={styles.line}></div>
      <div className={styles.descript}>时光易逝，唯流影恒存</div>
      <div className={styles.descript}>不忘初心</div>
    </div>
  )
}
export default Header