import * as typeCategory from "./../../constant/category";

var initialState = [];

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_CATEGORY_SUCCESS:
      state = actions.data;
      return state;
    case typeCategory.ADD_CATEGORY_SUCCESS:
      var data = actions.data;
      var idNew = findIndex(state, data.id);
      if (idNew === -1) {

        state.push(data);
      } else {
        state[idNew] = data;
      }
      return state;
    case typeCategory.EDIT_CATEGORY_SUCCESS:
      var dataE = actions.data;
      var idNewE = findIndex(state, dataE.id);
      if (idNewE === -1) {
        state.push(dataE);
      } else {
        state[idNewE].data= dataE.data;
      }
      return state;

    case typeCategory.DELETE_CATEGORY_SUCCESS:
      var dataD = actions.data;
      var idNewD = findIndex(state, dataD);
      if (idNew !== -1) {
        state.splice( idNewD,1);
      }
      return state;
    case typeCategory.EDIT_RULES_CATEGORY_SUCCESS:
      var dataR = actions.data;

      var idNewR = findIndex(state, dataR);
      if (idNewR !== -1) {
          state[idNewR].data.rules=!state[idNewR].data.rules;
      }
      return state;
    case typeCategory.GET_HANDLE_CODE_SUCCESS:
      var dataH=actions.data;
      var idNewH = findIndex(state, dataH.id);
      if (idNewH !== -1) {
          state[idNewH].data.code=dataH.data.code;
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
