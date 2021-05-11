import * as typeCategory from "./../../constant/category";

var initialState = [];

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeCategory.GET_INTRODUCER_USER_SUCCESS:
      state = actions.data;
      return state;
    case typeCategory.ADD_INTRODUCER_USER_SUCCESS:
      var dataAdd=actions.data;
      var idAdd=findIndex(state,dataAdd.id);
      if(idAdd === -1){
        state.push(dataAdd);
      }
      return state;
    case typeCategory.DELETE_INTRODUCER_USER_SUCCESS:
      var dataDe=actions.data;
      var idD=findIndex(state,dataDe);
      if(idD !== -1){
        state.splice(idD,1);
      }
      return state;
    default:
      return state;
  }
};
var findIndex=(data,id)=>{
  var k=-1;
  for(var i=0;i<data.length;i++){
    if(data[i].id===id){
      k=i;
    }
  }
  return k;
}
export default myReducer;
