import * as typeCategory from "./../../constant/user";

var initialState = [];

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_USER_SV_SUCCESS:
      state = actions.data;
      return state;
    default:
      return state;
  }
};

export default myReducer;
