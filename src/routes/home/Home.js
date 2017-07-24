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
    let canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      width = window.innerWidth,
      height = window.innerHeight,
      //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
      moon = new Moon(ctx, width, height),
      stars = new Stars(ctx, width, height, 200),
      meteors = [],
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
          <h1 className={styles.name}>周莹凯</h1>
          <p className={styles.desc}>这是一段很傻的描述</p>
          <div className={styles.link}>
            <a href='https://github.com/zhouyingkai1' target='_blank'>github</a>
            <Link to={{pathname: '/artcle'}}>进入博客</Link>
          </div>
        </div>
        
      </div>
    )
  }
}
const mapStateToProps = home => home
export default connect(mapStateToProps)(Home)