import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/projectItem.less'
import { look } from '../../utils/icons'
import { Modal } from 'antd'
const ProjectItem = (props)=> {
  const { projectLists, dispatch, modalVisible, currentItem } = props
  // 打开一个详情
  const openModal = (item)=> {
    Modal.info({
    title:  item.title,
    content: (
      <div className={ styles.modalBox}>
        <div className={styles.modalImg}>
          <img src={item.img} alt={item.title}/>
        </div>
        <p>
          {item.detail}
        </p>
      </div>
    ),
    okText: '前往',
    maskClosable: true,
    onOk() {
      window.open(item.url)
    },
  });
  }
  const hideModal = ()=> {
    dispatch({
      type: 'project/updateState',
      payload:{
        currentItem: {},
        modalVisible: false
      }
    })
  }
  return(
    <div className={styles.itemBox}>
      {
        projectLists.map(( item, index ) => {
          return (
            <div key={index} className={styles.projectItem} onClick={()=> openModal(item)}>
              <div className={styles.lookNum}><u dangerouslySetInnerHTML={{__html: look('#1cbaa3',19,18)}}></u><i>36</i></div>
              <div className={styles.img} style={{ backgroundImage: 'url(' + item.img + ') ' }}></div>
              <div className={styles.desc}>
                <h1>{ item.title }</h1>
                <p>{ item.desc }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default ProjectItem