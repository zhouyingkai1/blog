import React, { Component, PropTypes } from 'react';
import { Message, Icon } from 'antd';
import { Link } from 'dva/router'
import { routerRedux } from 'dva/router';
import styles from './style/artcleItem.less'
import kits from '../../utils/kits'
import computeTime from '../../utils/computeTime'
const ArtcleItem = ({ dispatch, artcleList, clickHeart }) => {
  const item = artcleList.map((item, index) => {
    const goDetail = (event, id) => {
      if (/div/.test(event.target.id)) {
        window.open('/#/detail?id=' + id)
      }
    }
    return (
      <div key={index} className={styles.item} >
        <div className={styles.shortImg} style={{ backgroundImage: 'url(' + item.img + ') ' }}>
          <a target='_blank' href={item.url} style={{ display: 'block', position: 'relative', zIndex: '3', height: '100%' }}></a>
        </div>
        <div className={styles.itemMain} id={'div' + index} onClick={(event) => goDetail(event, item.id)}>
          <h2><a target='_blank' href={item.url}>{item.title}</a></h2>
          <p className={styles.desc}>{item.artcleDesc}</p>
          <div className={styles.time}>{ computeTime(item.createTime) }发布</div>
          <div className={styles.infoBox}>
            <div className={styles.itemLeft}>
              <div className={styles.mess} >
                <a target='_blank' href={'/#/detail?id=' + item.id}>
                  <Icon type="message" />
                  <span>{item.comment > 0 ? item.comment : ''}</span>
                </a>
              </div>
            </div>
            <div className={styles.itemRight}>
              <div className={styles.tags}>
                <Icon type="tags-o" />
                {item.tags.map((tag, index) => {
                  return (
                    <u key={index}>{tag.title}</u>
                  )
                })}
              </div>
              <div className={styles.avotar}>
                <a href={'/#/user/' + item.userId} target='_blank'><img src={item.user.avator} alt="" /></a>
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