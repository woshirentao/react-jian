import React, { Component } from 'react'
import { 
  HomeWrapper, 
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Home extends Component {
  componentDidMount () {
    //请求数据
    this.props.changeHomeData()
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  handleScrollTop () {
    window.scrollTo(0, 0)
  }
    render () {
        return (
          <HomeWrapper>
            <HomeLeft>
              <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
              <Topic>Topic</Topic>
              <List></List>
            </HomeLeft>
            <HomeRight>
              <Recommend></Recommend>
              <Writer></Writer>
            </HomeRight>
            { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
          </HomeWrapper>
        )
    }
}
const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})
//此方法必须返回一个对象
const mapDiapatch = (dispatch) => ({
  //请求首页数据
  changeHomeData () {
    dispatch(actionCreator.getHomeData())
  },
  changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreator.toggleTopShow(true))
		}else {
			dispatch(actionCreator.toggleTopShow(false))
		}
	}
})
export default connect(mapState, mapDiapatch)(Home)