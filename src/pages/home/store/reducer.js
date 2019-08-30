import { fromJS } from "immutable";
import { constants } from './index'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showScroll: false
});

export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_HOME_DATA) {
    return state.merge({
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList)
    });
  }
  if (action.type === constants.SET_MORE_DATA) {
    return state.merge({
      articleList: state.get('articleList').concat(action.list)
    });
  }
  if (action.type === constants.TOGGLE_SCROLL_TOP) {
    return state.set('showScroll', action.show);
  }
  return state;
};
