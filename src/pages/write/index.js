import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Detail extends Component {

    render () {
        if (this.props.isLogin) {
            return (
                <div>
                    写文章页面 -- 参考其他页面
                </div>
            )
        }else {
            // Redirect组件 ：用来重定向路由
           return <Redirect to="/login"></Redirect>
        }
        
    }
}
const mapState = (state) => ({
    isLogin: state.login.get('login')
})


export default connect(mapState, null)(Detail)