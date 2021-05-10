/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import HomeComponent from "./../components/home/home";
import { useEffect } from "react";
import * as action from "./../action/category";
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';

import { CircularProgress } from '@material-ui/core';
import * as action1 from "./../action/login";
import Item from "./../components/home/Item";
import { Redirect } from 'react-router-dom';
// import { toast } from 'react-toastify';
function Home(props) {
 
  var { CategoryStore,LoginAdminStore ,LoginAdminMessageStore} = props;
  useEffect(() => {
    props.GET_CATEGORY();
    if(LoginAdminStore){
      props.GET_USER_ID(LoginAdminStore);
    }
  }, [1]);
  if(!LoginAdminStore){
    return <Redirect to="/login" />
  }

  if(LoginAdminMessageStore.logout_success){
    return <Redirect to="/login" />
  }
  // if(LoginAdminMessageStore.login_success){
  //   toast.success("Đăng Nhập Thành Công")
  // }
  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return <Item value={value} key={key} />;
      });
    }
    return result;
  };
  return (
    <>
    <Dialog
        open={LoginAdminMessageStore.logout_loading}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogContent>
        <CircularProgress />
        </DialogContent>
      </Dialog>
      <HomeComponent show={show(CategoryStore)} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    CategoryStore: state.CategoryStore,
    LoginAdminStore:state.LoginAdminStore,
    LoginAdminMessageStore:state.LoginAdminMessageStore
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_CATEGORY: () => {
      dispatch(action.GET_CATEGORY());
    },
    GET_USER_ID:(id)=>{
      dispatch(action1.GET_USER_ID(id));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Home);
