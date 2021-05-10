import * as typeCategory from "./../../constant/math";

var initialState = {
  ADD_USER_CATEGORY_SUCCESS: false,
  ADD_USER_CATEGORY_ERROR: false,
  ADD_USER_CATEGORY_LOADING: false,
  RESET_USER_CATEGORY_SUCCESS: false,
  RESET_USER_CATEGORY_ERROR: false,
  RESET_USER_CATEGORY_LOADING: false,
};

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.ADD_USER_CATEGORY_ERROR:
      state = {
        ADD_USER_CATEGORY_SUCCESS: false,
        ADD_USER_CATEGORY_ERROR: true,
        ADD_USER_CATEGORY_LOADING: false,
        RESET_USER_CATEGORY_SUCCESS: false,
        RESET_USER_CATEGORY_ERROR: false,
        RESET_USER_CATEGORY_LOADING: false,
      };
      return state;
      case typeCategory.ADD_USER_CATEGORY_SUCCESS:
        state = {
          ADD_USER_CATEGORY_SUCCESS: true,
          ADD_USER_CATEGORY_ERROR: false,
          ADD_USER_CATEGORY_LOADING: false,
          RESET_USER_CATEGORY_SUCCESS: false,
          RESET_USER_CATEGORY_ERROR: false,
          RESET_USER_CATEGORY_LOADING: false,
        };
        return state;
    case typeCategory.ADD_USER_CATEGORY_LOADING:
      state = {
        ADD_USER_CATEGORY_SUCCESS: false,
        ADD_USER_CATEGORY_ERROR: false,
        ADD_USER_CATEGORY_LOADING: true,
        RESET_USER_CATEGORY_SUCCESS: false,
        RESET_USER_CATEGORY_ERROR: false,
        RESET_USER_CATEGORY_LOADING: false,
      };
      return state;

    case typeCategory.RESET_USER_CATEGORY_LOADING:
      state = {
        ADD_USER_CATEGORY_SUCCESS: false,
        ADD_USER_CATEGORY_ERROR: false,
        ADD_USER_CATEGORY_LOADING: false,
        RESET_USER_CATEGORY_SUCCESS: false,
        RESET_USER_CATEGORY_ERROR: false,
        RESET_USER_CATEGORY_LOADING: true,
      };
      return state;
    case typeCategory.RESET_USER_CATEGORY_SUCCESS:
      state = {
        ADD_USER_CATEGORY_SUCCESS: false,
        ADD_USER_CATEGORY_ERROR: false,
        ADD_USER_CATEGORY_LOADING: false,
        RESET_USER_CATEGORY_SUCCESS: true,
        RESET_USER_CATEGORY_ERROR: false,
        RESET_USER_CATEGORY_LOADING: false,
      };
      return state;
    case typeCategory.RESET:
      state = {
        ADD_USER_CATEGORY_SUCCESS: false,
        ADD_USER_CATEGORY_ERROR: false,
        ADD_USER_CATEGORY_LOADING: false,
        RESET_USER_CATEGORY_SUCCESS: false,
        RESET_USER_CATEGORY_ERROR: false,
        RESET_USER_CATEGORY_LOADING: false,
      };
      return state;
    // case typeCategory.DELETE_QUESTION_CATEGORY_ERROR:
    //   state = {
    //     ADD_QUESTION_CATEGORY_SUCCESS: false,
    //     ADD_QUESTION_CATEGORY_ERROR: false,
    //     ADD_QUESTION_CATEGORY_LOADING: false,
    //     DELETE_QUESTION_CATEGORY_SUCCESS: false,
    //     DELETE_QUESTION_CATEGORY_ERROR: true,
    //     DELETE_QUESTION_CATEGORY_LOADING: false,
    //   };
    //   return state;
    // case typeCategory.RESET:
    //   state = {
    //     ADD_QUESTION_CATEGORY_SUCCESS: false,
    //     ADD_QUESTION_CATEGORY_ERROR: false,
    //     ADD_QUESTION_CATEGORY_LOADING: false,
    //     DELETE_QUESTION_CATEGORY_SUCCESS: false,
    //     DELETE_QUESTION_CATEGORY_ERROR: false,
    //     DELETE_QUESTION_CATEGORY_LOADING: false,
    //   };
    //   return state;
    default:
      return state;
  }
};

export default myReducer;
