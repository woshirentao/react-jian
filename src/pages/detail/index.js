import React, { Component } from 'react'
import { DetailWrapper, Header, Content  } from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends Component {
    componentDidMount () {
      this.props.getDetail(this.props.match.params.id)
    }
    render () {
      const { title, content } = this.props
        return (
          <DetailWrapper>
            <Header>{title}</Header>
            <Content 
              dangerouslySetInnerHTML={{__html: content}}
            />
          </DetailWrapper>
        )
    }
}

const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreator.getDetail(id));
	}
});

export default connect(mapState, mapDispatch)(withRouter(Detail))