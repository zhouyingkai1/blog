import React from 'react'
import { connect } from 'dva'
import { Header, Nav, Footer } from '../../components'
import '../../components/layout/style/common.less'
import { backTop } from '../../utils/icons'
import ScrollToTop from 'react-scroll-up';
import NProgress from 'nprogress'

let lastHref
const Index = (props)=> {
  const href = window.location.href
  if (lastHref !== href) {
    NProgress.start()
    if (!props.loading.global) {
      NProgress.done()
      lastHref = href
    }
    scrollTo(0,0)
  }


  const { children } = props
  if (['/home'].indexOf(location.pathname) > -1) {
    return <div>{ children }</div>
  }
  return(
    <div>
      <Header />
      <Nav />
      <div style={{minHeight: '330px'}}>
        { children }
      </div>
      <Footer/>
      <ScrollToTop showUnder={380} >
        <div className='backTop'><u dangerouslySetInnerHTML={{__html: backTop('#1cbaa3',90,70)}}></u></div>
      </ScrollToTop>
    </div>
  )
}
const mapStateToProps = main => main
export default connect(mapStateToProps)(Index)