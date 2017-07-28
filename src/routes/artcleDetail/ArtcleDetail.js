/*
文章详情页          
*/
import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './style/artcleDetail.less'
import { Login } from '../../components'
import { routerRedux } from 'dva/router'
import { Icon, Button, Input, Message, Pagination } from 'antd'
import kits from '../../utils/kits'
import { Link } from 'dva/router'
import computerTime from '../../utils/computeTime'
import { ArtcleMarkdown } from '../../components'
// import './style/mackdown.css'
const ArtcleDetail = (props) => {
  const { artcleDetail, comment, aboutLists, artcleId, avatarList, pagination } = props.detail

  //循环评论列表
  const commentItem = comment.map((item, index) => {
    return (
      <div key={index} className={styles.commentItem}>
        <h5><img src={item.avatar} alt="" />{index + 1}楼</h5>
        {/*<p className={style.txt} dangerouslySetInnerHTML={{__html: props.detail.comment && props.detail.comment.}}></p>*/}
        <p className={styles.txt}>{item.comment}
          {item.pic ? <img src={item.pic} alt="" /> : null}
        </p>
        <h2>{computerTime(item.createTime)}发布</h2>
      </div>
    )
  })
  const submitComment = () => {
    let commentInput = document.querySelector('#commentInput');
    const randomNum =  parseInt(Math.random()*avatarList.length)
    console.log(randomNum,'randomNum')
    if (commentInput.value) {
      props.dispatch({
        type: 'detail/submitComment',
        payload: {
          message: commentInput.value,
          artcleId: artcleId,
          avatar: avatarList[randomNum]&&avatarList[randomNum].link
        }
      })
      commentInput.value = ''
    }
  }
    // 分享
    const handleShare = (type) => {
      const thisUrl = location.href
      // const thisUrl = 'timeface.cn/event'
      let url
      if (type == 0) {
        url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(thisUrl + '?title=' + artcleDetail.title) + '&pics=' + artcleDetail.img;
      } else {
        url = 'http://v.t.sina.com.cn/share/share.php?appkey=2889481671&title=' + encodeURIComponent(thisUrl + '?title=' + artcleDetail.title) + '&pic=' + artcleDetail.img
      }
      window.open(url)
    }
    // 评论换页
    const changePage = (page)=> {
      props.dispatch({
        type: 'detail/getArtcleComment',
        payload: {
          page: page,
          pageSize: pagination.pageSize,
          artcleId: artcleId
        }
      })
    }
    return (
      <div>
        <div className={styles.detail}>
          <div className={styles.top}>
            <div className={styles.topBg} style={{ backgroundImage: 'url(' + artcleDetail.img + ')' }}></div>
            <div className={styles.topMain}>
              <h2><a href={artcleDetail.url} target='_blank'>{artcleDetail.title}</a></h2>
              <div className={styles.info}>
                <a href='#comment'>评论</a>
              </div>
            </div>
          </div>
          {/*主体*/}
          <div className={styles.main}>

            <div className={styles.comment}>
              <div className={styles.markdown}>
                <ArtcleMarkdown content={artcleDetail.content} />
              </div>

              <div className={styles.commentMain}>
                <div className={styles.input}>
                  <div className={styles.position} id='comment' ></div>
                  <p><img src={'http://gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg'} alt="" /></p>
                  <Input type="textarea" id='commentInput' placeholder='say what are you want to say' autosize={true} />
                  <div className={styles.subBtn} >
                    {/*<i>知道你有很多想说</i>*/}
                    <Button size='large' onClick={() => submitComment()} type='primary'>评论</Button>
                  </div>
                </div>

                <div className={styles.commentBox}>
                  <h3>{pagination.total > 0 ? pagination.total + '条评论' : '暂无评论'}</h3>
                  {commentItem}
                  {pagination.total != 0 ?
                    <Pagination current={pagination.current} onChange={changePage} pageSize={pagination.pageSize} total={pagination.total} className='pagination' />
                    : <i>快来抢沙发吧！</i>
                  }
                </div>
              </div>
            </div>
            <div className={styles.aside}>
              <div className={styles.share}>
                <p>感觉还不错~ 分享到...</p>
                <i onClick={() => handleShare(0)}>空间</i>
                <i onClick={() => handleShare(1)}>微博</i>
              </div>
              <div className={styles.tag}>
                <p>分类</p>
                {/*{
                  artcleDetail.tags.map((item,index)=>{
                   return(
                      <Link to={{pathname: '/artcle', query: {tag: item.id}}} key={index}>{item.title}</Link>
                    )
                  })
                }*/}
                <h2>{artcleDetail.tag}</h2>
              </div>
              <div className={styles.aboutArtcle}>
                <p>热门相关</p>
                {
                  aboutLists.length>0?
                  aboutLists.map((item, index) => {
                    return (
                      <div key={index} className={styles.aboutItem}>
                        <Link to={{ pathname: '/detail', query: { id: item.id } }} >{item.title}</Link>
                      </div>
                    )
                  })
                  :
                  <div className={styles.empty}>暂无</div>
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const mapStateToProps = detail => detail

  export default connect(mapStateToProps)(ArtcleDetail)