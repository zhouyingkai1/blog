import React from 'react'
import styles from './style/common.less'
import { tag } from '../../utils/icons'
import 'jquery'
import '../../lib/canvasCloud'
class TagLists extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    this.drawTags()
  }
  drawTags() {
    try {
      var i, et = document.getElementById('tags').childNodes;
      for (i in et) {
          et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
              e.preventDefault();
              console.log(e.target.innerText, 'eee')
          });
          et[i].nodeName == 'A' && et[i].addEventListener('mouseover', function(e) {
              e.preventDefault();
              console.log(e.target.innerText, 'eee')
          });
      }
      TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#222',
          outlineColour: '#fff',
          reverse: true,
          depth: 0.8,
          dragControl: true,
          decel: 0.95,
          maxSpeed: 0.03,
          initial: [-0.2, 0]
      });
    } catch (e) {
        
    }
  }
  componentWillUpdate(a) {
    this.drawTags()
  }
  render() {
    const tagLists = this.props.tagLists || []
    return(
      <div className={styles.container}>
        <p><u dangerouslySetInnerHTML={{__html: tag('#1cbaa3',19,18)}}></u>标签墙</p>
        <canvas width="240" height="200" id="myCanvas"></canvas>
        <div id="tags">
          {
            tagLists.map((item,index)=> {
              return (
                <a key={index} href="#">{item.name}</a>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default TagLists