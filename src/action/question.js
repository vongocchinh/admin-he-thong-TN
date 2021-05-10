import * as types from "./../constant/question";
import { db, storage } from "./../config/fbConfig";
export const GET_QUESTION_CATEGORY = (idCategory) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_QUESTION_CATEGORY_LOADING());
    db.collection("question")
      .where("categoryId", "==", idCategory)
      .get()
      .then((res) => {
        var data = [];
        res.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        dispatch(GET_QUESTION_CATEGORY_SUCCESS(data));
      }).catch(er=>{
        dispatch(GET_QUESTION_CATEGORY_ERROR());
      });
  };
};

export const GET_QUESTION_CATEGORY_SUCCESS = (data) => {
  return {
    type: types.GET_QUESTION_CATEGORY_SUCCESS,
    data,
  };
};


export const GET_QUESTION_CATEGORY_LOADING=()=>{
  return {
    type:types.GET_QUESTION_CATEGORY_LOADING
  }
}

export const GET_QUESTION_CATEGORY_ERROR=()=>{
  return {
    type:types.GET_QUESTION_CATEGORY_ERROR
  }
}












export const GET_QUESTION_DETAIL = (idQuestion) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_QUESTION_DETAIL_LOADING());
    db.collection("question")
      .doc(idQuestion)
      .get()
      .then((res) => {
        dispatch(
          GET_QUESTION_DETAIL_SUCCESS({
            id: res.id,
            data: res.data(),
          })
        );
      })
      .catch((er) => {
        dispatch(GET_QUESTION_DETAIL_ERROR());
      });
  };
};

export const GET_QUESTION_DETAIL_SUCCESS = (data) => {
  return {
    type: types.GET_QUESTION_DETAIL_SUCCESS,
    data,
  };
};



export const GET_QUESTION_DETAIL_LOADING=()=>{
  return {
    type:types.GET_QUESTION_DETAIL_LOADING
  }
}



export const GET_QUESTION_DETAIL_ERROR=()=>{
  return {
    type:types.GET_QUESTION_DETAIL_ERROR
  }
}


export const ADD_QUESTION_CATEGORY = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(ADD_QUESTION_CATEGORY_LOADING());
    if (!data.rules) {
      var file = data.name;
      console.log(file);
      var storages = storage.ref("images/" + file.name).put(file);
      storages.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(data.name.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              db.collection("question")
                .add({
                  a: data.a,
                  b: data.b,
                  c: data.c,
                  d: data.d,
                  name: url,
                  result: data.result,
                  rules: data.rules,
                  categoryId: data.categoryId,
                })
                .then((res) => {
                  dispatch(ADD_QUESTION_CATEGORY_SUCCESS({
                    id:res.id,
                    data:{
                      a: data.a,
                      b: data.b,
                      c: data.c,
                      d: data.d,
                      name: url,
                      result: data.result,
                      rules: data.rules,
                      categoryId: data.categoryId,
                    }
                  }));
                })
                .catch((er) => {});
            });
        }
      );
    } else {
      db.collection("question")
        .add({
          a: data.a,
          b: data.b,
          c: data.c,
          d: data.d,
          name: data.name,
          result: data.result,
          rules: data.rules,
          categoryId: data.categoryId,
        })
        .then((res) => {
          dispatch(ADD_QUESTION_CATEGORY_SUCCESS({
            id:res.id,
            data:{
              a: data.a,
              b: data.b,
              c: data.c,
              d: data.d,
              name: data.name,
              result: data.result,
              rules: data.rules,
              categoryId: data.categoryId,
            }
          }));
        })
        .catch((er) => {});
    }
  };
};

export const ADD_QUESTION_CATEGORY_SUCCESS = (data) => {
  return {
    type: types.ADD_QUESTION_CATEGORY_SUCCESS,
    data
  };
};

export const ADD_QUESTION_CATEGORY_LOADING = () => {
  return {
    type: types.ADD_QUESTION_CATEGORY_LOADING,
  };
};


export const ADD_QUESTION_CATEGORY_ERROR = () => {
  return {
    type: types.ADD_QUESTION_CATEGORY_ERROR,
  };
};



export const DELETE_QUESTION_CATEGORY=(data)=>{
    return (dispatch,getState,{getFirebase})=>{
      dispatch(DELETE_QUESTION_CATEGORY_LOADING());
        db.collection('question').doc(data.id).delete().then(res=>{
            dispatch(DELETE_QUESTION_CATEGORY_SUCCESS(data.id));
        }).catch(er=>{
          dispatch(DELETE_QUESTION_CATEGORY_ERROR());
        })
    }
}


export const DELETE_QUESTION_CATEGORY_SUCCESS = (data) => {
    return {
      type: types.DELETE_QUESTION_CATEGORY_SUCCESS,
      data
    };
  };


  export const DELETE_QUESTION_CATEGORY_LOADING = () => {
    return {
      type: types.DELETE_QUESTION_CATEGORY_LOADING,
    };
  };

  export const DELETE_QUESTION_CATEGORY_ERROR = () => {
    return {
      type: types.DELETE_QUESTION_CATEGORY_ERROR,
    };
  };


  export const RESET=()=>{
    return {
      type:types.RESET
    }
  }