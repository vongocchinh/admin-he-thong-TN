import * as typeCategory from "./../../constant/category";

var initialState = {
  ADD_USER_INTRODUCER_SUCCESS: false,
  ADD_USER_INTRODUCER_ERROR: false,
  ADD_USER_INTRODUCER_LOADING: false,
  DELETE_USER_INTRODUCER_SUCCESS: false,
  DELETE_USER_INTRODUCER_ERROR: false,
  DELETE_USER_INTRODUCER_LOADING: false,
  GET_USER_INTRODUCER_SUCCESS: false,
  GET_USER_INTRODUCER_ERROR: false,
  GET_USER_INTRODUCER_LOADING: false,
};

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_INTRODUCER_USER_SUCCESS:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: true,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;
    case typeCategory.GET_INTRODUCER_USER_LOADING:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: true,
      };
      return state;

    case typeCategory.GET_INTRODUCER_USER_ERROR:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: true,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;
    case typeCategory.ADD_INTRODUCER_USER_SUCCESS:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: true,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;
    case typeCategory.ADD_INTRODUCER_USER_LOADING:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: true,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;

    case typeCategory.ADD_INTRODUCER_USER_ERROR:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: true,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;
    case typeCategory.DELETE_INTRODUCER_USER_ERROR:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: true,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;
    case typeCategory.DELETE_INTRODUCER_USER_LOADING:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: false,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: true,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;

    case typeCategory.DELETE_INTRODUCER_USER_SUCCESS:
      state = {
        ADD_USER_INTRODUCER_SUCCESS: false,
        ADD_USER_INTRODUCER_ERROR: false,
        ADD_USER_INTRODUCER_LOADING: false,
        DELETE_USER_INTRODUCER_SUCCESS: true,
        DELETE_USER_INTRODUCER_ERROR: false,
        DELETE_USER_INTRODUCER_LOADING: false,
        GET_USER_INTRODUCER_SUCCESS: false,
        GET_USER_INTRODUCER_ERROR: false,
        GET_USER_INTRODUCER_LOADING: false,
      };
      return state;
      case typeCategory.RESET_USER:
        state = {
          ADD_USER_INTRODUCER_SUCCESS: false,
          ADD_USER_INTRODUCER_ERROR: false,
          ADD_USER_INTRODUCER_LOADING: false,
          DELETE_USER_INTRODUCER_SUCCESS: false,
          DELETE_USER_INTRODUCER_ERROR: false,
          DELETE_USER_INTRODUCER_LOADING: false,
          GET_USER_INTRODUCER_SUCCESS: false,
          GET_USER_INTRODUCER_ERROR: false,
          GET_USER_INTRODUCER_LOADING: false,
        };
        return state;
    default:
      return state;
  }
};

export default myReducer;
