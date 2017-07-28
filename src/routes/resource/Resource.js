import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/resource.less'
import { ResourceSide, ResourceMain } from '../../components'
import { Spin } from 'antd'

const Resource = (props)=> {
  const { tagLists, resources, queryTag, isLoading } = props.resource
  const sideProps = {
    tagLists,
    dispatch: props.dispatch,
    queryTag
  }
  const mainProps = {
    resources,
    dispatch: props.dispatch
  }
  return(
    <div className={styles.resource}>
      <div className={styles.left}>
        <Spin spinning={isLoading} delay={0} >
          <ResourceMain {...mainProps}/>
        </Spin>  
      </div>
      <div className={styles.right}>
        <ResourceSide {...sideProps} />
      </div>
    </div>
  )
}
const mapStateToProps = resource => resource
export default connect(mapStateToProps)(Resource)