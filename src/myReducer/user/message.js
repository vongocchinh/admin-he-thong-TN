import * as typeCategory from "./../../constant/user";

var initialState = {
  GET_USER_SUCCESS: false,
  GET_USER_ERROR: false,
  GET_USER_LOADING: false,

};

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_USER_SV_SUCCESS:
      state = {
        GET_USER_SUCCESS: true,
        GET_USER_ERROR: false,
        GET_USER_LOADING: false,
      };
      return state;
      case typeCategory.GET_USER_SV_ERROR:
        state = {
            GET_USER_SUCCESS: false,
            GET_USER_ERROR: true,
            GET_USER_LOADING: false,
        };
        return state;
    case typeCategory.RESET:
      state = {
        GET_USER_SUCCESS: false,
        GET_USER_ERROR: false,
        GET_USER_LOADING: false,
      };
      return state;

    default:
      return state;
  }
};

export default myReducer;
