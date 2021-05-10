import * as typeCategory from "./../../constant/category";

var initialState = {};

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_CATEGORY_DETAIL_SUCCESS:
      state = actions.data;
      return state;
    default:
      return state;
  }
};

export default myReducer;
