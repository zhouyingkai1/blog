import React from 'react'
import styles from './style/resourceMain.less'
// import 'jquery'
// import masonry from 'masonry-layout'
// import '../../lib/imageLoaded'
import Masonry from 'react-masonry-component';
import computeTime from '../../utils/computeTime'
class ResourceMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    const resources = this.props.resources || []
    var masonryOptions = {
      transitionDuration: 100
    };
    return (
      <div className={styles.mainBox} id='box'>
        <Masonry
          className={'my-gallery-class'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {
            resources.map((item, index) => {
              return (
                <div key={index} className={styles.resourceItem} onClick={() => window.open(item.url)}>
                  {
                    item.img ? <div className={styles.img}>
                      <img src={item.img} alt="" />
                    </div> : null
                  }
                  <h1>{item.title}</h1>
                  <p className={styles.desc}>{item.desc}</p>
                  <div className={styles.itemFooter}>
                    <div className={styles.tags}>
                      {
                        item.tags.map((tag, i) => {
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
        </Masonry>
      </div>
    )
  }
}
export default ResourceMain