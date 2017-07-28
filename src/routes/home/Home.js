import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style/home.less'
import { Stars, Moon } from '../../lib/Moon'
import { throttle } from '../../utils/kits'
import { Link } from 'dva/router'
class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.drawMoonBg()
    window.onresize=  throttle(this.drawMoonBg, 2500, true)
  }
  
  drawMoonBg (){
    // 是否生成月亮
    let isDrawMoon = true
    if(window.innerWidth<=414){
      isDrawMoon = false    
    }
    let canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      width = window.innerWidth,
      height = window.innerHeight,
      //实例化月亮和星星。
      moon = new Moon(ctx, width, height, isDrawMoon),
      stars = new Stars(ctx, width, height, 200),
      count = 0

    canvas.width = width
    canvas.height = height

    //每一帧动画生成函数
    const frame = () => {
      //每隔10帧星星闪烁一次，节省计算资源
      count++
      count % 10 == 0 && stars.blink()
      moon.draw()
      stars.draw()
      requestAnimationFrame(frame)
    }

    frame()
  }
  render() {
    return (
      <div className={styles.home}>
        <canvas id="canvas" className={styles.canvas}></canvas>
        <div className={styles.main}>
          <div className={styles.avatar}></div>
          {/*<h1 className={styles.name}>周莹凯 95年前端学习者</h1>*/}
          <p className={styles.desc}>
            星空浩瀚，而地球不过是其中渺小一颗，而人类相比于地球，又是如此之渺小
          </p>
          <p className={styles.desc}>
            唯有不断学习，绽放自己，像星星一样闪烁
          </p>
          <div className={styles.link}>
            <Link to={{pathname: '/about'}}>关于此站</Link>
            <Link to={{pathname: '/artcle'}}>进入博客</Link>
          </div>
        </div>
        
      </div>
    )
  }
}
const mapStateToProps = home => home
export default connect(mapStateToProps)(Home)