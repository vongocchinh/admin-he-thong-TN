import * as typeCategory from "./../../constant/login";

var initialState = {
  login_success: false,
  login_error: false,
  login_loading: false,
  logout_success: false,
  logout_error: false,
  logout_loading: false,
};

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.LOGIN_SUCCESS:
      state = {
        login_success: true,
        login_error: false,
        login_loading: false,
        logout_success: false,
        logout_error: false,
        logout_loading: false,
      };
      return state;
    case typeCategory.LOGIN_LOADING:
      state = {
        login_success: false,
        login_error: false,
        login_loading: true,
        logout_success: false,
        logout_error: false,
        logout_loading: false,
      };
      return state;
    case typeCategory.LOGIN_ERROR:
      state = {
        login_success: false,
        login_error: true,
        login_loading: false,
        logout_success: false,
        logout_error: false,
        logout_loading: false,
      };
      return state;
    case typeCategory.LOGOUT_LOADING:
      state = {
        login_success: false,
        login_error: false,
        login_loading: false,
        logout_success: false,
        logout_error: false,
        logout_loading: true,
      };
      return state;
    case typeCategory.LOGOUT_SUCCESS:
      state = {
        login_success: false,
        login_error: false,
        login_loading: false,
        logout_success: true,
        logout_error: false,
        logout_loading: false,
      };
      return state;
    case typeCategory.LOGOUT_ERROR:
      state = {
        login_success: false,
        login_error: false,
        login_loading: false,
        logout_success: false,
        logout_error: true,
        logout_loading: false,
      };
      return state;
    default:
      return state;
  }
};
export default myReducer;
