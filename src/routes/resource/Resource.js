import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/resource.less'
import { ResourceSide, ResourceMain } from '../../components'

const Resource = (props)=> {
  const { tagLists, resources } = props.resource
  const sideProps = {
    tagLists,
    dispatch: props.dispatch
  }
  const mainProps = {
    resources,
    dispatch: props.dispatch
  }
  return(
    <div className={styles.resource}>
      <div className={styles.left}>
        <ResourceMain {...mainProps}/>
      </div>
      <div className={styles.right}>
        <ResourceSide {...sideProps} />
      </div>
    </div>
  )
}
const mapStateToProps = resource => resource
export default connect(mapStateToProps)(Resource)