import React from 'react'
import styles from './style/aside.less'
import Categray from './Categray'
import TagLists from './TagLists'
import HotLists from './HotLists'
const AsideMenu = (props)=> {
  const { tagLists, hotLists, dispatch } = props
  const tagProps = {
    tagLists,
    dispatch,
  }
  const hotProps = {
    dispatch,
    hotLists
  }
  return(
    <div className={styles.aside}>
      <div className={styles.categroy}>
        <Categray />
      </div>
      <div className={styles.tagLists}>
        <TagLists {...tagProps}/>
      </div>
      <div className={styles.hotLists}>
        <HotLists {...hotProps}/>
      </div>
    </div>
  )
}
export default AsideMenu