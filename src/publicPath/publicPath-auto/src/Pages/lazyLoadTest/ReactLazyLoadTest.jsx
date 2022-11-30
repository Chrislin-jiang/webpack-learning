/* *
 * @state
 *  imgSrc string 图片url地址
 *  imgList array 图片数组个数
 *  fatherId string 父节点单一标识
 *  link string 需要存储的原生标签名
 */
import React from 'react'
import ReactLazyLoad from './ReactLazyLoad'
import styles from './style.css'

class ReactLazyLoadTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: 'xxx',
      imgList: Array(10),
      fatherId: 'lazy-load-content',
      link: 'data-original'
    }
  }
  render() {
    let { imgSrc, imgList, fatherId, link } = this.state
    const imgArr = document.getElementsByTagName("img");
    return (
      // <div>111</div>
      <div>
        <ReactLazyLoad fatherRef={fatherId} style={{ width: '100%', height: '400px', overflow: 'auto', border: '1px solid #ddd' }}>
          {imgArr &&
            imgArr.length > 0 &&
            imgArr.map((item, index) => {
              let obj = { key: index, className: styles.img }
              obj[link] = imgSrc
              return React.createElement('div', obj)
            })}
          {imgArr &&
            imgArr.length > 0 &&
            imgArr.map((item, index) => {
              let obj = { key: index, className: styles.img }
              obj[link] = imgSrc
              return React.createElement('img', obj)
            })}
          <div>
            这是混淆视听的部分
            <div>
              <div>这还是混淆视听的部分</div>
              {imgArr &&
                imgArr.length > 0 &&
                imgArr.map((item, index) => {
                  let obj = { key: index, className: styles.img }
                  obj[link] = imgSrc
                  return React.createElement('img', obj)
                })}
            </div>
          </div>
        </ReactLazyLoad>
        <button
          onClick={() => {
            imgArr.push(undefined)
            this.setState({ imgArr })
          }}
        >
          添加
        </button>
      </div>
    )
  }
}

export default ReactLazyLoadTest
