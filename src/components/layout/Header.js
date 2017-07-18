import React from 'react'
import styles from './style/layout.less'
import { Button } from 'antd'
const Header = (props)=> {
  return(
    <div className={styles.header}>
      <Button type='primary'>ddddddd</Button>
      <div className={styles.avatar}><img src={require('../../assets/yay.jpg')} alt=""/></div>  
      <div className="title">时光流影</div>
      <div className="descript">时光易逝，唯流影恒寸</div>
      <div className="descript">不忘初心</div>
    </div>
  )
}
export default Header