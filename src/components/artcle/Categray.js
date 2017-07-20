import React from 'react'
import styles from './style/common.less'
import { Button, Message } from 'antd'
import { categroy } from '../../utils/icons'

const Categray = (props)=> {
  return(
    <div className={styles.container}>
      <p><u dangerouslySetInnerHTML={{__html: categroy('#1cbaa3',19,18)}}></u>分类导航</p>
      <div className={styles.cate}>
        <ul>
          <li >全部内容</li>
          <li>心情随笔</li>
          <li className={styles.act}>前端相关</li>
        </ul>
      </div>
    </div>
  )
}
export default Categray