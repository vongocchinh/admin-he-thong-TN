import * as types from "./../../constant/question";

var initialState = [];
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_COURSE_SUCCESS:
      state = actions.data;
      return state;
    case types.ADD_COURSE_SUCCESS:
      var dataE = actions.data;
      var idNewE = findIndex(state, dataE.id);
      if (idNewE === -1) {
        state.push(dataE);
      } else {
        state[idNewE].data = dataE.data;
      }
      return state;

    case types.DELETE_COURSE_SUCCESS:
      var dataD = actions.data;
      var idNewD = findIndex(state, dataD.id);
      if (idNewD !== -1) {
        state.splice(idNewD, 1);
      }
      return state;
    case types.EDIT_COURSE_SUCCESS:
      var dataR = actions.data;

      var idNewR = findIndex(state, dataR.id);
      if (idNewR !== -1) {
        state[idNewR].data = dataR.data;
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
