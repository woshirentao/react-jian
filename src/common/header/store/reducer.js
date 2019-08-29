import * as actionTypes from './contant'
import { fromJS } from 'immutable'

//fromJS方法将一个js对象转化为immutable对象（不可更改的）,同时也会将js对象里面的引用类型数据转化为immutable对象
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 0,
    mouseEnter: false
  })
  
  export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
      //set方法其实是返回了一个新对象
      return state.set('focused',true)
      // return {
      //   focused: true,
      //   list: [],
      //   page: 1,
      //   totalPage: 0
      // }
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
      return state.set('focused',false)
      // return {
      //   focused: false,
      //   list: [],
      //   page: 1,
      //   totalPage: 0
      // }
    }
    if (action.type === actionTypes.GETSEARCHLIST) {
      //merge相当于多次调用set
      return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
      // return {
      //   focused: true,
      //   list: action.data,
      //   page: 1,
      //   totalPage: Math.ceil(action.data.length / 10)
      // }
    }
    if (action.type === actionTypes.MOUSE_ENTER) {
      return state.set('mouseEnter',true)
      // return {
      //   focused: false,
      //   list: [],
      //   page: 1,
      //   totalPage: 0
      // }
    }
    if (action.type === actionTypes.MOUSE_LEAVE) {
      return state.set('mouseEnter',false)
      // return {
      //   focused: false,
      //   list: [],
      //   page: 1,
      //   totalPage: 0
      // }
    }
    if (action.type === actionTypes.CHANGEPAGE) {
      return state.set('page',action.page)
      // return {
      //   focused: false,
      //   list: [],
      //   page: 1,
      //   totalPage: 0
      // }
    }
    return state;
  }