import * as typeCategory from "./../../constant/login";

var initialState = JSON.parse(localStorage.getItem("admin"));

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.LOGIN_SUCCESS:
      state = actions.data;
      localStorage.setItem("admin", JSON.stringify(state));
      return state;
    case typeCategory.GET_USER_ID_SUCCESS:
      state = actions.data;
      localStorage.setItem("admin", JSON.stringify(state));
      return state;
    case typeCategory.LOGOUT_SUCCESS:
      state='';
      localStorage.removeItem('admin');
      return state;
    default:
      return state;
  }
};

export default myReducer;
