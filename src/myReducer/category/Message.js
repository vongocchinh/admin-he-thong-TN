import * as typeCategory from "./../../constant/category";

var initialState = {
  GET_CATEGORY_SUCCESS: false,
  GET_CATEGORY_ERROR: false,
  GET_CATEGORY_LOADING: false,
  EDIT_CATEGORY_SUCCESS: false,
  EDIT_CATEGORY_ERROR: false,
  EDIT_CATEGORY_LOADING: false,
  DELETE_CATEGORY_SUCCESS: false,
  DELETE_CATEGORY_ERROR: false,
  DELETE_CATEGORY_LOADING: false,
  EDIT_RULES_CATEGORY_SUCCESS: false,
  EDIT_RULES_CATEGORY_ERROR: false,
  EDIT_RULES_CATEGORY_LOADING: false,
  ADD_CATEGORY_SUCCESS: false,
  ADD_CATEGORY_LOADING: false,
  ADD_CATEGORY_ERROR: false,
  HANDLE_CODE_SUCCESS: false,
  HANDLE_CODE_LOADING: false,
};

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_CATEGORY_SUCCESS:
      state = {
        GET_CATEGORY_SUCCESS: true,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.GET_CATEGORY_LOADING:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: true,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;

    case typeCategory.GET_CATEGORY_ERROR:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: true,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.EDIT_CATEGORY_SUCCESS:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: true,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.EDIT_CATEGORY_LOADING:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: true,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.EDIT_CATEGORY_ERROR:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: true,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.DELETE_CATEGORY_LOADING:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: true,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.DELETE_CATEGORY_SUCCESS:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: true,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.DELETE_CATEGORY_ERROR:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: true,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.EDIT_RULES_CATEGORY_ERROR:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: true,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.EDIT_RULES_CATEGORY_LOADING:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: true,
      };
      return state;
    case typeCategory.EDIT_RULES_CATEGORY_SUCCESS:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: true,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.RESET:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.ADD_CATEGORY_LOADING:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
        ADD_CATEGORY_LOADING: true,
      };
      return state;
    case typeCategory.ADD_CATEGORY_SUCCESS:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
        ADD_CATEGORY_LOADING: false,
        ADD_CATEGORY_SUCCESS: true,
      };
      return state;
    case typeCategory.ADD_CATEGORY_ERROR:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
        ADD_CATEGORY_LOADING: false,
        ADD_CATEGORY_SUCCESS: false,
        ADD_CATEGORY_ERROR: true,
      };
      return state;
    case typeCategory.GET_HANDLE_CODE_SUCCESS:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
        ADD_CATEGORY_LOADING: false,
        ADD_CATEGORY_SUCCESS: false,
        ADD_CATEGORY_ERROR: false,
        HANDLE_CODE_SUCCESS: true,
        HANDLE_CODE_LOADING: false,
      };
      return state;
    case typeCategory.GET_HANDLE_CODE_LOADING:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
        EDIT_CATEGORY_SUCCESS: false,
        EDIT_CATEGORY_ERROR: false,
        EDIT_CATEGORY_LOADING: false,
        DELETE_CATEGORY_SUCCESS: false,
        DELETE_CATEGORY_ERROR: false,
        DELETE_CATEGORY_LOADING: false,
        EDIT_RULES_CATEGORY_SUCCESS: false,
        EDIT_RULES_CATEGORY_ERROR: false,
        EDIT_RULES_CATEGORY_LOADING: false,
        ADD_CATEGORY_LOADING: false,
        ADD_CATEGORY_SUCCESS: false,
        ADD_CATEGORY_ERROR: false,
        HANDLE_CODE_SUCCESS: false,
        HANDLE_CODE_LOADING: true,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
