import * as actionTypes from './contant'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeSearchList = (data) => {
    return {
        type: actionTypes.GETSEARCHLIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10)
    }
}

export const searchFocus = () => {
    return {
        type: actionTypes.SEARCH_FOCUS
    }
}

export const searchBlur = () => {
    return {
        type: actionTypes.SEARCH_BLUR
    }
}

export const mouseEnter = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}

export const changePage = (page) => {
    return {
        type: actionTypes.CHANGEPAGE,
        page
    }
}

export const getSearchList = () => {
    return (dispatch) => {
        axios.get('api/searchList.json').then(res=>{
            dispatch(changeSearchList(res.data.data))
        })
    }
}