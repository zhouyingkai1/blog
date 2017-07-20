import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/artcle.less'
import { ArtcleItem, AsideMenu } from '../../components'
import { Message, Pagination } from 'antd';

const Artcle = (props)=> {
  const { artcleList, tagLists, hotLists, pagination } = props.artcle
  const { dispatch } = props
  const artcleItemProps = {
    artcleList,
    dispatch
  }
  const asideProps = {
    dispatch,
    tagLists,
    hotLists
  }
  //换页
  const changePage = (page)=>{

  }
  return(
    <div className={styles.artcle}>
      <div className={styles.right}>
        <AsideMenu {...asideProps}/>
      </div>
      <div className={styles.left}>
        <ArtcleItem {...artcleItemProps} />
      </div>
      <Pagination current={pagination.current} onChange={changePage} pageSize={10} total={pagination.total} className='pagination' />
    </div>
  )
}
const mapStateToProps = artcle => artcle
export default connect(mapStateToProps)(Artcle)