import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/about.less'
import { Icon } from 'antd'
const About = (props)=> {

  return (
    <div className={styles.about}>
      <h3><Icon type="flag" />关于此站</h3>
      <p>
        前端发展如此之快，每天都会抽出很多时间忙于学习，很忙并且很茫然，自己到底学了些什么。
      </p>      
      <p>
        当记得起自己在学什么的时候，却发现原来真的只是浮于表面。
      </p>
      <p>于是，搭建此站，记录自己的点滴成长，并希望借此沉淀。</p>
      <h3><Icon type="user" />关于自己</h3>
      <p>95年双子男，热爱前端，热爱学习去填充自己</p>
      <h3><Icon type="home" />代码及框架</h3>
      <div style={{paddingLeft: '18px'}}>
        <h4>一、前端页面</h4>  
        <p>基于单页 + 浅响应式设计，为了增加开发速度，使用了ant.design组件</p>
        <ul>
          <li>整体框架使用了<a href="https://github.com/dvajs/dva" target='_blank'>dva</a>一个基于 redux、redux-saga 和 react-router@2.x 的轻量级前端框架</li>
          <li>UI使用了<a href="https://ant.design/index-cn" target='_blank'>ANT DESIGN</a></li>
        </ul>
        <h4>二、接口开发</h4>
        <ul>
          <li>使用的是PHP + MySQL</li>
        </ul>
        <h4>三、后台管理页面</h4>
        <ul>
          <li>正在开发中，预计使用vue + elementUI</li>
        </ul>
      </div>
    </div>
  )
}
const mapStateToProps = about => about
export default connect(mapStateToProps)(About)