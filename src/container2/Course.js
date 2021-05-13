/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import CourseComponent from "../components/course/course";
import { useEffect } from "react";
import * as action from "../action/course";
import { Dialog } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import Item from "../components/course/Item";

function Course(props) {
  
  useEffect(() => {
    props.GET_COURSE();
  }, [1]);
  var { CourseStore, CourseMessageStore } = props;
  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return (
          <Item onEdit={onEdit} onDelete={onDelete} value={value} key={key} />
        );
      });
    }
    return result;
  };
  const onEdit = (data) => {
    props.onEdit(data);
  };
  const onDelete = (data) => {
    props.onDelete(data);
  };
  const onAdd = (data) => {
    props.onAdd(data);
  };
  if (
    CourseMessageStore.get_course_success ||
    CourseMessageStore.add_course_success ||
    CourseMessageStore.delete_course_success ||
    CourseMessageStore.edit_course_success
  ) {
    props.reset();
  }
  const showDialog = (CourseMessageStore) => {
    if (
      CourseMessageStore.get_course_loading ||
      CourseMessageStore.add_course_loading ||
      CourseMessageStore.delete_course_loading ||
      CourseMessageStore.edit_course_loading
    ) {
      return (
        <Dialog
          open={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogActions>
            <CircularProgress />
          </DialogActions>
        </Dialog>
      );
    }
  };
  return (
    <>
      {showDialog(CourseMessageStore)}
      <CourseComponent onAdd={onAdd} show={show(CourseStore)} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    CourseStore: state.CourseStore,
    CourseMessageStore: state.CourseMessageStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_COURSE: () => {
      dispatch(action.GET_COURSE());
    },
    onDelete: (data) => {
      dispatch(action.DELETE_COURSE(data));
    },
    onEdit: (data) => {
      dispatch(action.EDIT_COURSE(data));
    },
    onAdd: (data) => {
      dispatch(action.ADD_COURSE(data));
    },
    reset:()=>{
      dispatch(action.reset());
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Course);
