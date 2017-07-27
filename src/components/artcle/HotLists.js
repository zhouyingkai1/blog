import React from 'react'
import styles from './style/common.less'
import { hot } from '../../utils/icons'
import { Link } from 'dva/router'
const HotLists = (props)=> {
  const { hotLists } = props
  return(
    <div className={styles.container}>
      <p><u dangerouslySetInnerHTML={{__html: hot('#1cbaa3',19,18)}}></u>热门阅读</p>
      <div className={styles.hot}>
        <ul>
          {
            hotLists.map((item,index)=> {
              return <li key={index}><Link to={{pathname: '/detail', query: {id: item.id}}} title={item.title}>{item.title}</Link></li> 
            })
          }
        </ul>
      </div>
    </div>
  )
}
export default HotLists