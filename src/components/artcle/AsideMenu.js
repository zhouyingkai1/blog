import React from 'react'
import styles from './style/aside.less'
import Categray from './Categray'
import TagLists from './TagLists'
import HotLists from './HotLists'
const AsideMenu = (props)=> {
  const { tagLists, hotLists, dispatch, categroy, tagName, sideCategroy } = props
  const tagProps = {
    tagLists,
    dispatch,
    categroy
  }
  const hotProps = {
    dispatch,
    hotLists
  }
  const categroyProps = {
    dispatch,
    categroy,
    sideCategroy,
    tagName
  }
  return(
    <div className={styles.aside}>
      <div className={styles.categroy}>
        <Categray {...categroyProps}/>
      </div>
        {/*<div className={styles.tagLists}>
          <TagLists {...tagProps}/>
        </div>*/}
      <div className={styles.hotLists}>
        <HotLists {...hotProps}/>
      </div>
    </div>
  )
}
export default AsideMenu