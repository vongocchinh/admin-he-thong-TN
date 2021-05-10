import * as types from "./../constant/math";
import { db } from "./../config/fbConfig";

import firebase from "./../config/fbConfig";
export const GET_USER_CATEGORY = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_USER_CATEGORY_LOADING());
    db.collection("user")
      .where("categoryId", "==", id)
      .get()
      .then((res) => {
        var data = [];
        res.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        dispatch(GET_USER_CATEGORY_SUCCESS(data));
      })
      .catch((er) => {
        dispatch(GET_USER_CATEGORY_ERROR());
      });
  };
};

export const GET_USER_CATEGORY_SUCCESS = (data) => {
  return {
    type: types.GET_USER_CATEGORY_SUCCESS,
    data,
  };
};

export const GET_USER_CATEGORY_LOADING = () => {
  return {
    type: types.GET_USER_CATEGORY_LOADING,
  };
};

export const GET_USER_CATEGORY_ERROR = () => {
  return {
    type: types.GET_USER_CATEGORY_ERROR,
  };
};

export const RESET_RULES_USER = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(RESET_RULES_USER_CATEGORY_LOADING());
    db.collection("user")
      .where("rules", "==", id)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          db.collection("user")
            .doc(doc.id)
            .set({
              IDSV: doc.data().IDSV,
              categoryId: doc.data().categoryId,
              count: doc.data().count,
              fullname: doc.data().fullname,
              itemR: doc.data().itemR,
              itemW: doc.data().itemW,
              online: doc.data().online,
              rules: "",
              uidAuthentication: doc.data().uidAuthentication,
              quyen:doc.data().quyen
            })
            .then((r) => {
              dispatch(
                RESET_RULES_USER_CATEGORY_SUCCESS({
                  id: doc.id,
                  data: {
                    IDSV: doc.data().IDSV,
                    categoryId: doc.data().categoryId,
                    count: doc.data().count,
                    fullname: doc.data().fullname,
                    itemR: doc.data().itemR,
                    itemW: doc.data().itemW,
                    online: doc.data().online,
                    rules: "",
                    uidAuthentication: doc.data().uidAuthentication,
                    quyen:doc.data().quyen
                  },
                })
              );
            })
            .catch((e) => {
              dispatch(RESET_RULES_USER_CATEGORY_ERROR());
            });
        });
      });
  };
};

export const RESET_RULES_USER_CATEGORY_SUCCESS = (data) => {
  return {
    type: types.RESET_USER_CATEGORY_SUCCESS,
    data,
  };
};

export const RESET_RULES_USER_CATEGORY_LOADING = () => {
  return {
    type: types.RESET_USER_CATEGORY_LOADING,
  };
};

export const RESET_RULES_USER_CATEGORY_ERROR = () => {
  return {
    type: types.RESET_USER_CATEGORY_ERROR,
  };
};

export const ADD_USER_CATEGORY = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(ADD_USER_CATEGORY_LOADING());
    var userEmail = data.IDSV + "@ued.udn.vn";
    var passWord = data.passWord;
    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, passWord)
      .then((res) => {
        var uidAuthentication = res.user.uid;
        db.collection("user")
          .add({
            IDSV: data.IDSV,
            categoryId: data.categoryId,
            count: data.count,
            fullname: data.fullname,
            itemR: data.itemR,
            itemW: data.itemW,
            online: data.online,
            rules: "",
            uidAuthentication: uidAuthentication,
            quyen:data.quyen
          })
          .then((res) => {
            dispatch(
              ADD_USER_CATEGORY_SUCCESS({
                id: res.id,
                data: {
                  IDSV: data.IDSV,
                  categoryId: data.categoryId,
                  count: data.count,
                  fullname: data.fullname,
                  itemR: data.itemR,
                  itemW: data.itemW,
                  online: data.online,
                  rules: "",
                  uidAuthentication: uidAuthentication,
                  quyen:data.quyen
                },
              })
            );
          })
          .catch((err) => {
            dispatch(ADD_USER_CATEGORY_ERROR());
          });
      });
  };
};

export const ADD_USER_CATEGORY_SUCCESS = (data) => {
  return {
    type: types.ADD_USER_CATEGORY_SUCCESS,
    data,
  };
};

export const ADD_USER_CATEGORY_ERROR = () => {
  return {
    type: types.ADD_USER_CATEGORY_ERROR,
  };
};

export const ADD_USER_CATEGORY_LOADING = () => {
  return {
    type: types.ADD_USER_CATEGORY_LOADING,
  };
};

export const RESET = () => {
  return {
    type: types.RESET,
  };
};
