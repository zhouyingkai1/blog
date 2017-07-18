import React, { component } from 'react'
import { connect } from 'dva'
import { Header, Nav, Footer } from '../../components'
import '../../components/layout/style/common.less'

const Index = (props)=> {
  return(
    <div>
      <Header />
      <Nav />
      <div>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}
const mapStateToProps = main => main
export default connect(mapStateToProps)(Index)