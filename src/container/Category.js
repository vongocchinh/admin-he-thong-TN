/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "./../action/category";
import CategoryComponent from "./../components/category/category";
import CategoryItem from "./../components/category/item";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Dialog, DialogContent, Fab } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function Category(props) {
  useEffect(() => {
    props.GET_CATEGORY();
  }, [2]);
  var { CategoryStore, CategoryDetailStore, MessageDetailStore } = props;
  if (
    MessageDetailStore.GET_CATEGORY_SUCCESS ||
    MessageDetailStore.DELETE_CATEGORY_SUCCESS ||
    MessageDetailStore.EDIT_CATEGORY_SUCCESS ||
    MessageDetailStore.EDIT_RULES_CATEGORY_SUCCESS ||
    MessageDetailStore.ADD_CATEGORY_SUCCESS||
    MessageDetailStore.HANDLE_CODE_SUCCESS
  ) {
    props.RESET();
  }
  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return (
          <CategoryItem
            EditCategory={EditCategory}
            onChangeRules={onChangeRules}
            onDelete={onDelete}
            stt={key}
            value={value}
            key={key}
            handleCode={handleCode}
            MessageDetailStore={MessageDetailStore&&MessageDetailStore}
          />
        );
      });
    } else {
      return <CircularProgress />;
    }
    return result;
  };
  const AddCategory = (e) => {
    props.AddCategory(e);
  };
  const onDelete = (data) => {
    props.onDelete(data);
  };
  const onChangeRules = (data) => {
    props.onChangeRules(data);
  };
  const EditCategory = (data) => {
    props.EditCategory(data);
  };
  const onClose = () => {
    props.RESET();
  };
  const handleCode=(value)=>{
    props.handleCode(value);
  }
  const showDialogLoading=(MessageDetailStore)=>{
    if(MessageDetailStore){
      if (
        MessageDetailStore.GET_CATEGORY_LOADING ||
        MessageDetailStore.DELETE_CATEGORY_LOADING ||
        MessageDetailStore.EDIT_CATEGORY_LOADING ||
        MessageDetailStore.EDIT_RULES_CATEGORY_LOADING ||
        MessageDetailStore.ADD_CATEGORY_LOADING
      ) {
        return (
          <Dialog aria-labelledby="simple-dialog-title" open={true}>
            <DialogContent>
              <CircularProgress />
            </DialogContent>
          </Dialog>
        );
      }
    }
  }
  const showDialog=(MessageDetailStore)=>{
    if(MessageDetailStore){
      if (
        MessageDetailStore.GET_CATEGORY_ERROR ||
        MessageDetailStore.DELETE_CATEGORY_ERROR ||
        MessageDetailStore.EDIT_CATEGORY_ERROR ||
        MessageDetailStore.EDIT_RULES_CATEGORY_ERROR ||
        MessageDetailStore.ADD_CATEGORY_ERROR
      ) {
        return (
          <Dialog
            aria-labelledby="simple-dialog-title"
            onClose={onClose}
            open={true}
          >
            <DialogContent>
              <Fab size="large" color="primary" aria-label="add">
                <ErrorOutlineIcon size="large" />
              </Fab>
            </DialogContent>
          </Dialog>
        );
      }
    }
  }
  return (
    <>
    {showDialog(MessageDetailStore)}
    {showDialogLoading(MessageDetailStore)}
      <CategoryComponent
        CategoryDetailStore={CategoryDetailStore && CategoryDetailStore}
        AddCategory={AddCategory}
        show={show(CategoryStore)}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    CategoryStore: state.CategoryStore,
    CategoryDetailStore: state.CategoryDetailStore,
    MessageDetailStore: state.MessageDetailStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_CATEGORY: () => {
      dispatch(action.GET_CATEGORY());
    },
    AddCategory: (data) => {
      dispatch(action.ADD_CATEGORY(data));
    },
    onDelete: (data) => {
      dispatch(action.DELETE_CATEGORY(data));
    },
    onChangeRules: (data) => {
      dispatch(action.EDIT_RULES_CATEGORY(data));
    },
    EditCategory: (data) => {
      dispatch(action.EDIT_CATEGORY(data));
    },
    RESET: () => {
      dispatch(action.RESET());
    },
    handleCode:(data)=>{
      dispatch(action.HANDLE_CODE(data));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Category);

// import React from 'react';
// import { connect } from 'react-redux';

// function Category(){
//     return (
//         <>
//         </>
//     )
// }
// const mapStateToProps=(state)=>{
//     return {

//     }
// }
// const dispatchToProps=(dispatch,props)=>{
//     return {

//     }
// }
// export default (connect(mapStateToProps,dispatchToProps)) (Category);
