import React from 'react'
import styles from './style/resourceMain.less'
import 'jquery'
import '../../lib/masonry'
import computeTime from '../../utils/computeTime'
class ResourceMain extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    
  }
  render() {
    const resources = this.props.resources || []
    return(
      <div className={styles.mainBox}>
        {
          resources.map((item, index)=> {
            return(
              <div key={ index } className={styles.resourceItem}>
                <div className={styles.img}>
                  <img src={item.img} alt=""/>
                </div>
                <h1>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.itemFooter}>
                  <div className={styles.tags}>
                    {
                      item.tags.map((tag, i)=>{
                        return <i key={i}>{tag.name}</i>
                      })
                    }
                  </div>
                  <div className={styles.time}>
                    {computeTime(item.createTime)}
                  </div>
                </div>
              </div>
            )
          })
        }  
      </div>
    )
  }
}
export default ResourceMain