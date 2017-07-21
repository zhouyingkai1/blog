import React, { component } from 'react'
import { connect } from 'dva'
import { Header, Nav, Footer } from '../../components'
import '../../components/layout/style/common.less'
import { backTop } from '../../utils/icons'
import ScrollToTop from 'react-scroll-up';

const Index = (props)=> {
  return(
    <div>
      <Header />
      <Nav />
      <div>
        {props.children}
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