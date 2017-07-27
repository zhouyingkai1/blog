import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/artcle.less'
import { ArtcleItem, AsideMenu } from '../../components'
import { Message, Pagination, Spin } from 'antd';

const Artcle = (props)=> {
  const { artcleList, tagLists, hotLists, pagination, categroy, tagName, sideCategroy, isLoading } = props.artcle
  const { dispatch } = props
  const artcleItemProps = {
    artcleList,
    dispatch,
  }
  const asideProps = {
    dispatch,
    tagLists,
    hotLists,
    categroy,
    sideCategroy, 
    tagName 
  }
  //换页
  const changePage = (page)=>{
    dispatch({
      type: 'artcle/getArtcleLists',
      payload: {
        page: page,
        pageSize: pagination.pageSize,
        categroy: categroy,
        tagName: tagName
      }
    })
    scrollTo(0,0)
  }
  return(
    <div className={styles.artcle}>
      <div className={styles.right}>
        <AsideMenu {...asideProps}/>
      </div>
      <div className={styles.left}>
        {
          artcleList.length>0?
            <div>
              <Spin spinning={isLoading} delay={0} >
                <ArtcleItem {...artcleItemProps} />
                <Pagination current={pagination.current} onChange={changePage} pageSize={pagination.pageSize} total={pagination.total} className='pagination' />
              </Spin>
            </div>
            :
            <div className={styles.empty}>
              暂无相关文章
            </div>
        }
      </div>
    </div>
  )
}
const mapStateToProps = artcle => artcle
export default connect(mapStateToProps)(Artcle)