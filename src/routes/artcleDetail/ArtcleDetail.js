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
// import './style/mackdown.css'
const ArtcleDetail = (props)=>{
  const { artcleDetail, comment, aboutLists } = props.detail
  
  //循环评论列表
  const commentItem =comment.data.map((item,index)=>{
    return(
      <div key={index} className={styles.commentItem}>
        <h1><a href={'/#/user/' + item.userId} target="_blank"><img src={item.avator} alt=""/>{item.userName}</a></h1>
        {/*<p className={style.txt} dangerouslySetInnerHTML={{__html: props.detail.comment && props.detail.comment.}}></p>*/}
        <p className={styles.txt}>{item.comment}
          {item.pic?<img src={item.pic} alt=""/>: null}
        </p>
        <h4 className={item.isLike?styles.act:null} onClick={()=>handleLikeCom(item.id)}><Icon type="like" /><b>{item.likeCommentNum}</b></h4>
        <h2>{computerTime(item.createTime)}发布</h2>
      </div> 
    )
  })
  const submitComment = ()=>{
    let comment = document.querySelector('#comment');
    if(comment.value){
      if(kits.getCookies('ywj-uid')){
      props.dispatch({
        type:'detail/submitComment',
        payload:{
          comment: comment.value,
          userId: kits.getCookies('ywj-uid'),
          artcleId: kits.getHashStringArgs().id,
          pic: props.detail.commentPic
        }
      })
      comment.value = ''
      props.dispatch({
        type:'detail/updateState',
        payload:{
          commentPic: ''
        }
      })
      }
      }else{
        Message.error('请输入评论内容')
      }
    }
// 分享
    const handleShare = (type)=> {
      // const thisUrl = location.href
      const thisUrl = 'timeface.cn/event'
      let url
      if(type == 0){
        url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(thisUrl+'?title='+ artcleDetail.title )+'&pics=' + artcleDetail.img;
      }else{
        url = 'http://v.t.sina.com.cn/share/share.php?appkey=2889481671&title=' + encodeURIComponent(thisUrl+'?title='+ artcleDetail.title )+'&pic=' + artcleDetail.img
      }
      window.open(url)
    }
    return(
      <div>
        <div className={styles.detail}>
          <div className={styles.top}>
            <div className={styles.topBg} style={{backgroundImage:'url('+ artcleDetail.img +')'}}></div>
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
              <div className={styles.commentMain}>
                <div className={styles.input}>
                  <div className={styles.position} id='comment' ></div>
                  <p><img src={'http://gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg'} alt=""/></p>
                  <Input type="textarea" id='comment' placeholder='say what are you want to say' autosize={true}/>
                  <div className={styles.subBtn} >                   
                    <i>知道你有很多想说</i>
                    <Button size='large' onClick={()=>submitComment()} type='primary'>评论</Button>
                  </div>
                </div>

                <div className={styles.commentBox}>
                  <h3>{comment.data.length>0 ? comment.data.length + '条评论' : '暂无评论'}</h3>
                  {commentItem}
                  {comment.data.length != 0 ?
                    null
                    : <i>快来抢沙发吧！</i>
                  }
                </div>
              </div>
            </div>
            <div className={styles.aside}>
              <div className={styles.share}>
                <p>感觉还不错~ 分享到...</p>
                <i onClick={()=> handleShare(0)}>空间</i>
                <i onClick={()=> handleShare(1)}>微博</i>  
              </div>
              <div className={styles.tag}>
                <p>分类</p>
                {
                  artcleDetail.tags.map((item,index)=>{
                   return(
                      <Link to={{pathname: '/artcle', query: {tag: item.id}}} key={index}>{item.title}</Link>
                    )
                  })
                }
              </div>
              <div className={styles.aboutArtcle}>
                <p>热门相关</p>
                {
                  aboutLists.map((item,index)=>{
                   return(
                      <div key={index} className={styles.aboutItem}>
                        <Link to={{pathname: '/detail', query: {id: item.id}}} >{item.title}</Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
}
const mapStateToProps=detail=>detail

export default connect(mapStateToProps)(ArtcleDetail)