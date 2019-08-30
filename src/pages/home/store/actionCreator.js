import axios from 'axios'
import { constants } from './index'
import { fromJS } from 'immutable'

const setHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
})
const setMoreData = (list) => ({
    type: constants.SET_MORE_DATA,
    list: fromJS(list)
})
export const getHomeData = () => {
    return (dispatch) => {
        axios.get('api/home.json').then(res=>{
            dispatch(setHomeData(res.data.data))
        })
    }
}
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('api/homeList.json').then(res=>{
            dispatch(setMoreData(res.data.data))
        })
    }
}
//回到顶部
export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})