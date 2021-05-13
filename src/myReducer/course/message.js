import * as types from "./../../constant/question";

var initialState = {
  get_course_loading: false,
  get_course_error: false,
  get_course_success: false,
  delete_course_loading: false,
  delete_course_error: false,
  delete_course_success: false,
  add_course_loading: false,
  add_course_error: false,
  add_course_success: false,
  edit_course_loading: false,
  edit_course_error: false,
  edit_course_success: false,
  
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_COURSE_SUCCESS:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: true,
        delete_course_loading: false,
        delete_course_error: false,
        delete_course_success: false,
        add_course_loading: false,
        add_course_error: false,
        add_course_success: false,
        edit_course_loading: false,
        edit_course_error: false,
        edit_course_success: false,
      };
      return state;
    case types.GET_COURSE_LOADING:
      state = {
        get_course_loading: true,
        get_course_error: false,
        get_course_success: false,
        delete_course_loading: false,
        delete_course_error: false,
        delete_course_success: false,
        add_course_loading: false,
        add_course_error: false,
        add_course_success: false,
        edit_course_loading: false,
        edit_course_error: false,
        edit_course_success: false,
      };
      return state;
    case types.ADD_COURSE_SUCCESS:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: false,
        delete_course_loading: false,
        delete_course_error: false,
        delete_course_success: false,
        add_course_loading: false,
        add_course_error: false,
        add_course_success: true,
        edit_course_loading: false,
        edit_course_error: false,
        edit_course_success: false,
      };
      return state;
    case types.ADD_COURSE_LOADING:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: false,
        delete_course_loading: false,
        delete_course_error: false,
        delete_course_success: false,
        add_course_loading: true,
        add_course_error: false,
        add_course_success: false,
        edit_course_loading: false,
        edit_course_error: false,
        edit_course_success: false,
      };
      return state;
    case types.DELETE_COURSE_LOADING:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: false,
        delete_course_loading: true,
        delete_course_error: false,
        delete_course_success: false,
        add_course_loading: false,
        add_course_error: false,
        add_course_success: false,
        edit_course_loading: false,
        edit_course_error: false,
        edit_course_success: false,
      };
      return state;
    case types.DELETE_COURSE_SUCCESS:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: false,
        delete_course_loading: false,
        delete_course_error: false,
        delete_course_success: true,
        add_course_loading: false,
        add_course_error: false,
        add_course_success: false,
        edit_course_loading: false,
        edit_course_error: false,
        edit_course_success: false,
      };
      return state;
    case types.EDIT_COURSE_LOADING:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: false,
        delete_course_loading: false,
        delete_course_error: false,
        delete_course_success: false,
        add_course_loading: false,
        add_course_error: false,
        add_course_success: false,
        edit_course_loading: true,
        edit_course_error: false,
        edit_course_success: false,
      };
      return state;
    case types.EDIT_COURSE_SUCCESS:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: false,
        delete_course_loading: false,
        delete_course_error: false,
        delete_course_success: false,
        add_course_loading: false,
        add_course_error: false,
        add_course_success: false,
        edit_course_loading: false,
        edit_course_error: false,
        edit_course_success: true,
      };
      return state;
      case types.reset:
        state = {
          get_course_loading: false,
          get_course_error: false,
          get_course_success: false,
          delete_course_loading: false,
          delete_course_error: false,
          delete_course_success: false,
          add_course_loading: false,
          add_course_error: false,
          add_course_success: false,
          edit_course_loading: false,
          edit_course_error: false,
          edit_course_success: false,
        };
        return state;
    default:
      return state;
  }
};

export default myReducer;
