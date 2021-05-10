import * as typeCategory from "./../../constant/math";

var initialState = [];

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_USER_CATEGORY_SUCCESS:
      state = actions.data;
      return state;
    case typeCategory.ADD_USER_CATEGORY_SUCCESS:
      var dataAdd = actions.data;
      var idAdd = findIndex(state, dataAdd.id);
      if (idAdd === -1) {
        state.push(dataAdd);
      }
      return state;
    case typeCategory.RESET_USER_CATEGORY_SUCCESS:
      var dataR = actions.data;
      var idR = findIndex(state, dataR.id);
      if (idR !== -1) {
        state[idR].data.rules = dataR.data.rules;
      }
      return state;
    default:
      return state;
  }
};
var findIndex = (data, id) => {
  var k = -1;
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      k = i;
    }
  }
  return k;
};

export default myReducer;
