import React, { Component } from 'react';

class ReactLazyLoad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [],
      mutationObserver: undefined,
      props: {}
    }
    this.imgRender = this.imgRender.bind(this)
  }

  componentDidMount() {
    this.setState({ props: this.props }, () => this.init())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.imgRender)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ props: nextProps }, () => this.init())
  }

  init() {
    let { mutationObserver } = this.state
    let { fatherRef } = this.state.props
    let fatherNode = this.refs[fatherRef]
    mutationObserver && mutationObserver.disconnect && typeof mutationObserver.disconnect === 'function' && mutationObserver.disconnect()
    mutationObserver = new MutationObserver(() => this.startRenderImg())
    this.setState({ mutationObserver }, () => {
      mutationObserver.observe(fatherNode, { childList: true, attributes: true, characterData: true })
      this.startRenderImg()
    })
  }

  //开始进行图片加载
  startRenderImg() {
    window.removeEventListener('scroll', this.imgRender)
    let { fatherRef } = this.state.props
    let fatherNode = this.refs[fatherRef]
    let childrenNodes = fatherNode && fatherNode.childNodes
    //通过原生操作获取所有的子节点中具有{link}属性的标签
    this.setState({ imgList: this.getImgTag(childrenNodes) }, () => {
      //初始化渲染图片
      this.imgRender()
      //添加滚动监听
      this.addScroll()
    })
  }

  //添加滚动监听
  addScroll() {
    let { fatherRef } = this.state.props
    if (fatherRef) {
      this.refs[fatherRef].addEventListener('scroll', this.imgRender)
    } else {
      window.addEventListener('scroll', this.imgRender)
    }
  }

  //设置imgList
  getImgTag(childrenNodes, imgList = []) {
    let { link } = this.state.props
    if (childrenNodes && childrenNodes.length > 0) {
      for (let i = 0; i < childrenNodes.length; i++) {
        //只要是包含了{link}标签的元素 则放在渲染队列中
        if (typeof childrenNodes[i].getAttribute === 'function' && childrenNodes[i].getAttribute(link)) {
          imgList.push(childrenNodes[i])
        }
        //递归当前元素子元素
        if (childrenNodes[i].childNodes && childrenNodes[i].childNodes.length > 0) {
          this.getImgTag(childrenNodes[i].childNodes, imgList)
        }
      }
    }
    //返回了具有所有{link}标签的dom节点数组
    return imgList
  }

  //图片是否符合加载条件
  isImgLoad(node) {
    //图片距离顶部的距离 <= 浏览器可视化的高度，说明需要进行虚拟src与真实src的替换了
    let bound = node.getBoundingClientRect()
    let clientHeight = window.innerHeight
    return bound.top <= clientHeight
  }

  //每一个图片的加载
  imgLoad(index, node) {
    let { imgList } = this.state
    let { link } = this.state.props
    //获取之前设置好的{link}并且赋值给相应元素
    if (node.tagName.toLowerCase() === 'img') {
      //如果是img标签 则赋值给src
      node.src = node.getAttribute(link)
    } else {
      //其余状况赋值给背景图
      node.style.backgroundImage = `url(${node.getAttribute(link)})`
    }
    //已加载了该图片，在资源数组中就删除该dom节点
    imgList.splice(index, 1)
    this.setState({ imgList })
  }

  //图片加载
  imgRender() {
    let { imgList } = this.state
    //因为加载后则删除已加载的元素，逆向遍历方便一些
    for (let i = imgList.length - 1; i > -1; i--) {
      this.isImgLoad(imgList[i]) && this.imgLoad(i, imgList[i])
    }
  }

  render() {
    let { fatherRef, children, style, className } = this.state.props
    return (
      <div ref={fatherRef} className={className} style={style}>
        {children}
      </div>
    )
  }
}

ReactLazyLoad.defaultProps = {
  fatherRef: 'fatherRef',
  className: '',
  style: {},
  link: 'data-original'
}

export default ReactLazyLoad
