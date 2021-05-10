import * as types from "./../constant/user";
import { db } from "./../config/fbConfig";

export const GET_USER_SV = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_USER_SV_LOADING());
    db.collection("user")
      .where("categoryId", "==", "null")
      .get()
      .then((res) => {
        var data = [];
        res.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        dispatch(GET_USER_SV_SUCCESS(data));
      });
  };
};

export const GET_USER_SV_SUCCESS = (data) => {
  return {
    type: types.GET_USER_SV_SUCCESS,
    data,
  };
};

export const GET_USER_SV_LOADING = () => {
  return {
    type: types.GET_USER_SV_LOADING,
  };
};

export const GET_USER_SV_RESET = () => {
    return {
        type:types.RESET
    }
};
