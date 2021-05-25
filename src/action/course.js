import * as course from "./../constant/question";
import { db } from "./../config/fbConfig";
export const GET_COURSE = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_COURSE_LOADING());
    db.collection("course")
      .get()
      .then((res) => {
        var data = [];
        res.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        dispatch(GET_COURSE_SUCCESS(data));
      })
      .catch((er) => {});
  };
};
export const GET_COURSE_SUCCESS = (data) => {
  return {
    type: course.GET_COURSE_SUCCESS,
    data,
  };
};

export const GET_COURSE_LOADING = () => {
  return {
    type: course.GET_COURSE_LOADING,
  };
};

export const DELETE_COURSE = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(DELETE_COURSE_LOADING());
    db.collection("course")
      .doc(data.id)
      .delete()
      .then((res) => {
        dispatch(DELETE_COURSE_SUCCESS(data));
      })
      .catch((er) => {});
  };
};

export const DELETE_COURSE_SUCCESS = (data) => {
  return {
    type: course.DELETE_COURSE_SUCCESS,
    data,
  };
};

export const DELETE_COURSE_LOADING = () => {
  return {
    type: course.DELETE_COURSE_LOADING,
  };
};

export const EDIT_COURSE = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(EDIT_COURSE_LOADING());
    db.collection("course")
      .doc(data.id)
      .set({
        des: data.des,
        name: data.name,
        name1: data.name1,
        name2: data.name2,
        room: data.room,
        time: data.time,
        document: data.document,
      })
      .then((res) => {
        dispatch(
          EDIT_COURSE_SUCCESS({
            id: data.id,
            data: {
              des: data.des,
              name: data.name,
              name1: data.name1,
              name2: data.name2,
              room: data.room,
              time: data.time,
              document: data.document,
            },
          })
        );
      })
      .catch((er) => {
        dispatch(EDIT_COURSE_ERROR());
      });
  };
};

export const EDIT_COURSE_SUCCESS = (data) => {
  return {
    type: course.EDIT_COURSE_SUCCESS,
    data: data,
  };
};

export const EDIT_COURSE_LOADING = () => {
  return {
    type: course.EDIT_COURSE_LOADING,
  };
};
export const EDIT_COURSE_ERROR = () => {
  return {
    type: course.EDIT_COURSE_ERROR,
  };
};

export const ADD_COURSE = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(ADD_COURSE_LOADING());
    console.log(data);
    db.collection("course")
      .add({
        des: data.des,
        name: data.name,
        name1: data.name1,
        name2: data.name2,
        room: data.room,
        time: data.time,
        document: data.document,
      })
      .then((res) => {
        dispatch(
          ADD_COURSE_SUCCESS({
            id: res.id,
            data: {
              des: data.des,
              name: data.name,
              name1: data.name1,
              name2: data.name2,
              room: data.room,
              time: data.time,
              document: data.document,
            },
          })
        );
      })
      .catch((er) => {});
  };
};

export const ADD_COURSE_SUCCESS = (data) => {
  return {
    type: course.ADD_COURSE_SUCCESS,
    data,
  };
};

export const ADD_COURSE_LOADING = () => {
  return {
    type: course.ADD_COURSE_LOADING,
  };
};

export const reset = () => {
  return {
    type: course.reset,
  };
};
