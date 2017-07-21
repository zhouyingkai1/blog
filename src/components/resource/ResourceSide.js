import React from 'react'
import styles from './style/aside.less'
import { Button, Message, Icon } from 'antd'
import { tag } from '../../utils/icons'

const ResourceSide = (props)=> {
  const { tagLists, dispatch } = props
  return(
    <div className={styles.aside}>
      <div className={styles.desc}>
        <div className={styles.container}>
          <p><Icon type="notification" />声明</p>
          <div className={styles.detail}>
            <p>这里都是我在成长的道路上觉得不错的东西。或是网站，或是某个功能的插件，或是一篇大牛的文章。</p>
            <p>好的东西我都会分享在这里，不做任何商业或盈利用途，只供学习使用，如有侵权，请联系我立即删除，谢谢！</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <p><u dangerouslySetInnerHTML={{__html: tag('#1cbaa3',19,18)}}></u>标签列表</p>
        <div className={styles.tag}>
          <ul>
            {
              tagLists.map((item,index)=> {
                return <li key={index}>{item.name}</li> 
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ResourceSide