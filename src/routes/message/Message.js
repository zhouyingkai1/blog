import React, { Component } from 'react'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Pagination } from 'antd';
import styles from './style/message.less'
import computeTime from '../../utils/computeTime'
const FormItem = Form.Item;
const Mewssage = (props)=> {
  const { getFieldDecorator, validateFields, resetFields} = props.form
  const { messageData, pagination, avatarList } = props.message
  //评论翻页
  const changePage = (page)=> {
    props.dispatch({
      type: 'message/getMessageLists',
      payload: {
        page: page,
        pageSize: pagination.pageSize
      }
    })
    scrollTo(0,275)
  }
  //submitMessage
  const submitMessage = ()=> {
    validateFields((err, values) => {
      if(!!err){
        return err
      }
      const randomNum =  parseInt(Math.random()*avatarList.length)
      props.dispatch({
        type: 'message/submitMessage',
        payload: {
          nickName: values.nickName,
          content: values.content,
          avatar: avatarList[randomNum]&&avatarList[randomNum].link
        }
      })
      resetFields()
    })
  }
  return(
    <div className={styles.message}>
      <div className={styles.top}>
        <div className={styles.input}>
          <h1><Icon type="smile-o" />留言鼓励或提一下意见吧</h1>
          <Form>
            <FormItem>
              {getFieldDecorator('nickName', {
                rules: [{ whitespace: true, required: true, message: '请输入昵称'}],
              })(<Input addonBefore='昵称' placeholder='请输入昵称'/>)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('content', {
                rules: [{ whitespace: true, required: true, message: '请输入留言'}],
              })(<Input type='textarea' style={{ resize: 'none'}} autosize={{ minRows: 2, maxRows: 3 }} placeholder='请输入留言'/>)}
            </FormItem>
          </Form>
          <Button className={styles.button} type='primary' onClick={submitMessage}><Icon type="edit" />提交留言</Button>
        </div>
        <div className={styles.about}>
          <h1><Icon type="user" />关于我</h1>
          <p>95年双子男，热爱前端</p>
          <p>希望借此结交更多前辈好友</p>
          <p>共同进步，沉淀自己</p>
        </div>
      </div>
      
      <div className={styles.messageList}>
        {
          messageData.map((item, index)=>{
            return (
              <div key={item.id} className={styles.messageItem}>
                <div className={styles.info}>
                  <h1><img src={item.avatar} alt=""/></h1>
                  <div className={styles.right}>
                    <h2>{item.nickName}</h2>
                    <h3>{computeTime(item.createTime)}</h3>
                  </div>
                  <p className={styles.content}>{item.content}</p>
                </div>
              </div>
            )
          })
        }
        <Pagination current={pagination.current} onChange={changePage} pageSize={pagination.pageSize} total={pagination.total} className='pagination' />
      </div>
    </div>
  )
}
const mapStateToProps = message => message
export default connect(mapStateToProps)(Form.create()(Mewssage))