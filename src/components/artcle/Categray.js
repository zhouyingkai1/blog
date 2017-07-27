import React from 'react'
import styles from './style/common.less'
import { categroy } from '../../utils/icons'

const Categray = ({ dispatch, categroy:categroyId, sideCategroy, tagName })=> {
  const changeCategroy = (id)=> {
    dispatch({
      type: 'artcle/getArtcleLists',
      payload: {
        page: 1,
        pageSize: 10,
        tag: tagName,
        categroy: id
      }
    })
  }
  return(
    <div className={styles.container}>
      <p><u dangerouslySetInnerHTML={{__html: categroy('#1cbaa3',19,18)}}></u>分类导航</p>
      <div className={styles.cate}>
        <ul>
          {
            sideCategroy.map((item, index)=>{
              return (
                <li key={index} onClick={()=>changeCategroy(item.id)} className={categroyId == item.id?styles.act: ''} >{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
export default Categray