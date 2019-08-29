import React, { Component } from 'react'
import { 
  HeaderWarpper, 
  Logo, 
  Nav, 
  NavItem, 
  SearchWrapper, 
  NavSearch,
  Addition, 
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Header extends Component {
    getListArea() {
      
      const { list, page } = this.props
      const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
          for (let index = (page-1) * 10; index < page * 10; index++) {
            if (newList[index]) {
              pageList.push(
                <SearchInfoItem key={ newList[index] }>{ newList[index] }</SearchInfoItem>
              )
            }
          }
        }
      if (this.props.focused || this.props.mouseEnter) {
        return (
          <SearchInfo
            onMouseEnter={this.props.handleMouseEnter}
            onMouseLeave={this.props.handleMouseLeave}
          >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch 
                onClick={()=>this.props.handleSwitchClick(this.props.totalPage, this.props.page, this.spinIcon)}
              >
                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfo>
        )
      }else {
        return null;
      }
    }
    render() {
        const { focused, list } = this.props
        return (
            <HeaderWarpper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">
                      <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                      <CSSTransition in={focused}
                      timeout={2000}
                      classNames='slide'>
                        <NavSearch className={focused?'focused':''} onFocus={()=>{this.props.handleFocus(list)}} onBlur={this.props.handleBlur} />
                      </CSSTransition>
                      <i className={focused?'iconfont zoom focused':'iconfont zoom'}>&#xe6e4;</i>
                      { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting">
                      <i className="iconfont">&#xe615;</i>
                      写文章
                    </Button>
                </Addition>
            </HeaderWarpper>
        )
    }
}
const mapStateToProps = (state) => {
	return {
    focused: state.header.get('focused'),
    list: state.header.get('list'),
    page: state.header.get('page'),
    totalPage: state.header.get('totalPage'),
    mouseEnter: state.header.get('mouseEnter')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
    handleFocus: (list) => {
      
      // list是immutable对象
      (list.size===0) && dispatch(actionCreators.getSearchList());
      dispatch(actionCreators.searchFocus());
    },
    handleBlur: () => {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleSwitchClick(totalPage, page, spin) {

      //spin旋转动画
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10); //10进制数字
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
    }
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header)