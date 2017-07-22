import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/link.less'

const Link = (props)=> {
  const { } = props.link
  return(
    <div className={styles.link+ ' ' + 'moveIn'}>
      link
    </div>
  )
}
const mapStateToProps = link => link
export default connect(mapStateToProps)(Link)