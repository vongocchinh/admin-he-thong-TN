import * as typeCategory from "./../constant/category";
import { db } from "./../config/fbConfig";
export const GET_CATEGORY = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_CATEGORY_LOADING());
    db.collection("category")
      .get()
      .then((res) => {
        var data = [];
        res.forEach((doc) => {
          data.push({
            data: doc.data(),
            id: doc.id,
          });
        });
        dispatch(GET_CATEGORY_SUCCESS(data));
      })
      .catch((er) => {
        dispatch(GET_CATEGORY_ERROR());
      });
  };
};

export const GET_CATEGORY_SUCCESS = (data) => {
  return {
    type: typeCategory.GET_CATEGORY_SUCCESS,
    data,
  };
};

export const GET_CATEGORY_LOADING = () => {
  return {
    type: typeCategory.GET_CATEGORY_LOADING,
  };
};

export const GET_CATEGORY_ERROR = () => {
  return {
    type: typeCategory.GET_CATEGORY_ERROR,
  };
};

export const ADD_CATEGORY = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(ADD_CATEGORY_LOADING());
    db.collection("category")
      .add({
        name: data.name,
        rules: false,
        time: parseInt(data.time),
        date: new Date(),
        code: "clbtinhoc",
        totalQuestion: 100,
      })
      .then((res) => {
        res.get().then((doc) => {
          var arr = {
            id: doc.id,
            data: doc.data(),
          };
          dispatch(ADD_CATEGORY_SUCCESS(arr));
        });
      })
      .catch((er) => {
        dispatch(ADD_CATEGORY_ERROR());
      });
  };
};

export const DELETE_CATEGORY = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(DELETE_CATEGORY_LOADING());

    db.collection("category")
      .doc(data.id)
      .delete()
      .then((res) => {
        db.collection("user")
          .where("categoryId", "==", data.id)
          .get()
          .then((res) => {
            res.forEach((doc) => {
              db.collection("user")
                .doc(doc.id)
                .delete()
                .then((res1) => {})
                .catch((er) => {});
            });
          })
          .catch((error) => {});
        dispatch(DELETE_CATEGORY_SUCCESS(data.id));
      })
      .catch((er) => {
        dispatch(DELETE_CATEGORY_ERROR());
      });
  };
};

export const EDIT_RULES_CATEGORY = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(EDIT_RULES_CATEGORY_LOADING());
    db.collection("category")
      .doc(data.id)
      .set({
        name: data.data.name,
        rules: !data.data.rules,
        time: data.data.time,
        date: data.data.date,
        code: data.data.code,
        totalQuestion: data.data.totalQuestion,
      })
      .then((res) => {
        dispatch(EDIT_RULES_CATEGORY_SUCCESS(data.id));
      })
      .catch((er) => {
        dispatch(EDIT_RULES_CATEGORY_ERROR());
      });
  };
};

export const EDIT_CATEGORY = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(EDIT_CATEGORY_LOADING());
    db.collection("category")
      .doc(data.id)
      .set({
        name: data.name,
        rules: data.rules,
        time: parseInt(data.time),
        date: data.date,
        code: data.code,
        totalQuestion: data.totalQuestion,
      })
      .then((res) => {
        dispatch(
          EDIT_CATEGORY_SUCCESS({
            id: data.id,
            data: {
              name: data.name,
              rules: data.rules,
              time: parseInt(data.time),
              date: data.date,
              code: data.code,
              totalQuestion: data.totalQuestion,
            },
          })
        );
      })
      .catch((er) => {
        dispatch(EDIT_CATEGORY_ERROR());
      });
  };
};

export const ADD_CATEGORY_SUCCESS = (data) => {
  return {
    type: typeCategory.ADD_CATEGORY_SUCCESS,
    data,
  };
};

export const ADD_CATEGORY_ERROR = (data) => {
  return {
    type: typeCategory.ADD_CATEGORY_ERROR,
    data,
  };
};

export const ADD_CATEGORY_LOADING = (data) => {
  return {
    type: typeCategory.ADD_CATEGORY_LOADING,
    data,
  };
};

export const DELETE_CATEGORY_SUCCESS = (data) => {
  return {
    type: typeCategory.DELETE_CATEGORY_SUCCESS,
    data,
  };
};

export const DELETE_CATEGORY_ERROR = () => {
  return {
    type: typeCategory.DELETE_CATEGORY_ERROR,
  };
};
export const DELETE_CATEGORY_LOADING = () => {
  return {
    type: typeCategory.DELETE_CATEGORY_LOADING,
  };
};

export const EDIT_CATEGORY_SUCCESS = (data) => {
  return {
    type: typeCategory.EDIT_CATEGORY_SUCCESS,
    data,
  };
};

export const EDIT_CATEGORY_LOADING = () => {
  return {
    type: typeCategory.EDIT_CATEGORY_LOADING,
  };
};

export const EDIT_CATEGORY_ERROR = () => {
  return {
    type: typeCategory.EDIT_CATEGORY_ERROR,
  };
};

export const EDIT_RULES_CATEGORY_SUCCESS = (data) => {
  return {
    type: typeCategory.EDIT_RULES_CATEGORY_SUCCESS,
    data,
  };
};

export const EDIT_RULES_CATEGORY_ERROR = () => {
  return {
    type: typeCategory.EDIT_RULES_CATEGORY_ERROR,
  };
};

export const EDIT_RULES_CATEGORY_LOADING = () => {
  return {
    type: typeCategory.EDIT_RULES_CATEGORY_LOADING,
  };
};

export const RESET = () => {
  return {
    type: typeCategory.RESET,
  };
};

export const GET_CATEGORY_DETAIL = (idCategory) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_CATEGORY_DETAIL_LOADING());
    db.collection("category")
      .doc(idCategory)
      .get()
      .then((res) => {
        dispatch(
          GET_CATEGORY_DETAIL_SUCCESS({
            id: res.id,
            data: res.data(),
          })
        );
      })
      .catch((er) => {
        dispatch(GET_CATEGORY_DETAIL_ERROR());
      });
  };
};

export const GET_CATEGORY_DETAIL_SUCCESS = (data) => {
  return {
    type: typeCategory.GET_CATEGORY_DETAIL_SUCCESS,
    data,
  };
};

export const GET_CATEGORY_DETAIL_LOADING = () => {
  return {
    type: typeCategory.GET_CATEGORY_DETAIL_LOADING,
  };
};

export const GET_CATEGORY_DETAIL_ERROR = () => {
  return {
    type: typeCategory.GET_CATEGORY_DETAIL_ERROR,
  };
};

export const HANDLE_CODE = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(HANDLE_CODE_LOADING());
    let r = Math.random().toString(36).substring(7);
    db.collection("category")
      .doc(data.id)
      .set({
        name: data.data.name,
        rules: data.data.rules,
        time: parseInt(data.data.time),
        date: data.data.date,
        code: r,
        totalQuestion: data.data.totalQuestion,
      })
      .then((res) => {
        dispatch(
          HANDLE_CODE_SUCCESS({
            id: data.id,
            data: {
              name: data.data.name,
              rules: data.data.rules,
              time: parseInt(data.data.time),
              date: data.data.date,
              code: r,
              totalQuestion: data.data.totalQuestion,
            },
          })
        );
      });
  };
};

export const HANDLE_CODE_SUCCESS = (data) => {
  return {
    type: typeCategory.GET_HANDLE_CODE_SUCCESS,
    data,
  };
};

export const HANDLE_CODE_LOADING = () => {
  return {
    type: typeCategory.GET_HANDLE_CODE_LOADING,
  };
};
