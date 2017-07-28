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
     {/*<p>如果说时间是一条河流，许多人大学毕业后就上岸了。</p>
     <p>但是有一类人，却永远上不了岸，他们犹如大海中被诅咒的海盗，只有不停的探索，才能免于厄运，寻得宝藏。</p>
     <p>他们就是前端。</p>
     <p>流水不腐，阳光不锈，知识永远在更新迭代。工作期间，一直忙碌于学， 却不曾沉淀。</p>
     <p>本质是在不断地否定过去，却不能驻足当下，安身立命。</p>
     <p>开出了花，总要结果。</p>
     <p>搭建此站的目的，就是希望把所学知识，凝聚成可观可感的现实。</p>
     <p>就算不能盖出摩天大楼，也要盖一座古堡，愉悦自己，结交同行。在这座古堡里，一群海盗志趣相投，共同进步，征服星辰大海。</p>*/}
     
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