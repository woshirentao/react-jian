import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux';
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
    render () {
      const { list } = this.props
        return (
          <div>
            {
              list.map((item, index) => {
                return (
                  <Link key={index} to="/detail">
                    <ListItem>
                      <img alt='' className='pic' src={item.get('imgUrl')} />
                      <ListInfo>
                        <h3 className='title'>{item.get('title')}</h3>
                        <p className='desc'>{item.get('desc')}</p>
                      </ListInfo>
                    </ListItem>
                  </Link>
                );
              })
            }
            <LoadMore onClick={()=>this.props.getMoreList()}>加载更多</LoadMore>
          </div>
        )
    }
}

const mapState = (state) => ({
	list: state.home.get('articleList')
});

const mapDispatch = (dispatch) => ({
	getMoreList () {
    dispatch(actionCreator.getMoreList())
  }
});

export default connect(mapState, mapDispatch)(List);