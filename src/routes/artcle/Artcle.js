import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/artcle.less'
import { ArtcleItem } from '../../components'
const Artcle = (props)=> {
  const { artcleList, dispatch } = props.artcle
  const artcleItemProps = {
    artcleList,
    dispatch
  }
  return(
    <div className={styles.artcle}>
      <div className={styles.right}>
        <div style={{float: 'left'}}>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
      </div>
      <div className={styles.left}>
        <ArtcleItem {...artcleItemProps} />
      </div>
      
    </div>
  )
}
const mapStateToProps = artcle => artcle
export default connect(mapStateToProps)(Artcle)