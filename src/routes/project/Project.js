import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/project.less'
import { ProjectItem } from '../../components'
const Project = (props)=> {
  const { projectLists, } = props.project
  const itmeProps = {
    dispatch: props.dispatch,
    projectLists,
  }
  return(
    <div className={styles.project}>
      <ProjectItem {...itmeProps}/>
    </div>
  )
}
const mapStateToProps = project => project
export default connect(mapStateToProps)(Project)