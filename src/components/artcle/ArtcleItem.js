import React, { Component, PropTypes } from 'react';
import { Message, Icon } from 'antd';
import { Link, routerRedux } from 'dva/router'
import styles from './style/artcleItem.less'
import kits from '../../utils/kits'
import computeTime from '../../utils/computeTime'
const ArtcleItem = ({ dispatch, artcleList,  }) => {
  const item = artcleList.map((item, index) => {
    const goDetail = (event, id) => {
      dispatch(
        routerRedux.push({
          pathname: '/detail',
          query: {
            id: id
          }
        })
      )
    }
    return (
      <div key={index} className={styles.item} >
        <div className={styles.shortImg} style={{ backgroundImage: 'url(' + item.img + ') ' }}>
        <Link to={{pathname: '/detail', query: { id: item.id}}} style={{ display: 'block', position: 'relative', zIndex: '3', height: '100%' }}></Link>
        </div>
        <div className={styles.itemMain} id={'div' + index} >
          <h2 title={item.title}><Link to={{pathname: '/detail', query: { id: item.id}}}>{item.title}</Link></h2>
          <p onClick={(event) => goDetail(event, item.id)} className={styles.desc}>{item.artcleDesc}</p>
          <div className={styles.time}>{ computeTime(item.createTime) }发布</div>
          <div className={styles.infoBox}>
            <div className={styles.itemLeft}>
              <div className={styles.mess} >
                <Link to={{pathname: '/detail', query: { id: item.id}}}>
                  <Icon type="message" />
                  <span>{item.comment > 0 ? item.comment : ''}</span>
                </Link>
              </div>
            </div>
            <div className={styles.itemRight}>
              <div className={styles.tags}>
                <Icon type="tags-o" />
                <u key={index}>{item.tag}</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className={styles.itemList}>
      {item}
    </div>
  )
};
export default ArtcleItem;