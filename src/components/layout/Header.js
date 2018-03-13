import React from 'react'
import styles from './style/layout.less'
import { Button, Message } from 'antd'
const Header = (props)=> {
  return(
    <div className={styles.header}>
      <div className={styles.avatar}><img src={require('../../assets/avatar.jpg')} alt=""/></div>  
      <div className={styles.title}>allenZhou</div>
      <div className={styles.line}></div>
      <div className={styles.descript}>不忘初心，努力向前</div>
      <div className={styles.descript}>在喧杂中沉淀下来，成长自己</div>
    </div>
  )
}
export default Header 