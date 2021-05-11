import * as types from "./../constant/category";
import { db, storage } from "./../config/fbConfig";
export const GET_USER_INTRODUCER = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_USER_INTRODUCER_LOADING());
    db.collection("userheader")
      .get()
      .then((res) => {
        var data = [];
        res.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        dispatch(GET_USER_INTRODUCER_SUCCESS(data));
      })
      .catch((er) => {
        dispatch(GET_USER_INTRODUCER_ERROR());
      });
  };
};

export const GET_USER_INTRODUCER_SUCCESS = (data) => {
  return {
    type: types.GET_INTRODUCER_USER_SUCCESS,
    data,
  };
};

export const GET_USER_INTRODUCER_LOADING = () => {
  return {
    type: types.GET_INTRODUCER_USER_LOADING,
  };
};

export const GET_USER_INTRODUCER_ERROR = () => {
  return {
    type: types.GET_INTRODUCER_USER_ERROR,
  };
};

export const DELETE_USER_INTRODUCER = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(DELETE_USER_INTRODUCER_LOADING());
    db.collection("userheader")
      .doc(id)
      .delete()
      .then((res) => {
        dispatch(DELETE_USER_INTRODUCER_SUCCESS(id));
      })
      .catch((er) => {
        dispatch(DELETE_USER_INTRODUCER_ERROR());
      });
  };
};

export const DELETE_USER_INTRODUCER_SUCCESS = (data) => {
  return {
    type: types.DELETE_INTRODUCER_USER_SUCCESS,
    data,
  };
};

export const DELETE_USER_INTRODUCER_LOADING = () => {
  return {
    type: types.DELETE_INTRODUCER_USER_LOADING,
  };
};

export const DELETE_USER_INTRODUCER_ERROR = () => {
  return {
    type: types.DELETE_INTRODUCER_USER_ERROR,
  };
};

export const ADD_USER_INTRODUCER = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(ADD_USER_INTRODUCER_LOADING());
    console.log(data);
    var file = data.img;
    var storages = storage.ref("user/" + file.name).put(file);
    storages.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("user")
          .child(data.img.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("userheader")
              .add({
                des: data.des,
                fb: data.fb,
                img: url,
                name: data.name,
                phone: data.phone,
                rules: data.rules,
              })
              .then((res) => {
                dispatch(
                  ADD_USER_INTRODUCER_SUCCESS({
                    id: res.id,
                    data: {
                      des: data.des,
                      fb: data.fb,
                      img: url,
                      name: data.name,
                      phone: data.phone,
                      rules: data.rules,
                    },
                  })
                );
              })
              .catch((er) => {
                dispatch(ADD_USER_INTRODUCER_ERROR());
              });
          });
      }
    );
  };
};

export const ADD_USER_INTRODUCER_SUCCESS = (data) => {
  return {
    type: types.ADD_INTRODUCER_USER_SUCCESS,
    data,
  };
};

export const ADD_USER_INTRODUCER_LOADING = () => {
  return {
    type: types.ADD_INTRODUCER_USER_LOADING,
  };
};

export const ADD_USER_INTRODUCER_ERROR = () => {
  return {
    type: types.ADD_INTRODUCER_USER_ERROR,
  };
};


export const RESET_USER=()=>{
  return {
    type:types.RESET_USER,
  }
}