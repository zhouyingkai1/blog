import React from 'react'
import MarkdownComponent from 'react-remarkable'
import styles from './style/markdown.less'
import './style/test.less'
class Markdown extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.renderMarkdown()
  }
  renderMarkdown() {
    const codeArr = Array.from(document.querySelectorAll('pre code'))
    codeArr.forEach(function (block) {
      hljs.highlightBlock(block);
    });
  }
  componentWillUpdate() {
    this.renderMarkdown()
  }
  render() {
    return (
      <div className={styles.markdown + ' ' + 'markdownReset'}>
        <MarkdownComponent source={this.props.content} />
      </div>
    )
  }

}
export default Markdown