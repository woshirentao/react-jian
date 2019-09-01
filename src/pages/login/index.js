import React, { Component } from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'

class Detail extends Component {

    render () {
        if (!this.props.isLogin) {
            return (
                <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(input) => {this.account = input}} />
                    <Input placeholder='密码' type="password" ref={(input) => {this.password = input}} />
                    <Button onClick={ () => this.props.login(this.account, this.password) }>登陆</Button>
                </LoginBox>
            </LoginWrapper>
            )
        }else {
            // Redirect组件 ：用来重定向路由
           return <Redirect to="/"></Redirect>
        }
        
    }
}
const mapState = (state) => ({
    isLogin: state.login.get('login')
})
const mapDispatch = (dispatch) => ({
	login (accountElem, passwordElem) {
        dispatch(actionCreator.login(accountElem.value, passwordElem.value))
    }
});

export default connect(mapState, mapDispatch)(Detail)