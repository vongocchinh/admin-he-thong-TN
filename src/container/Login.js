/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginComponent from "./../components/login/login";
import * as action from './../action/login';
import { Redirect } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';

import { CircularProgress } from '@material-ui/core';
import { toast } from "react-toastify";
function Login(props) {
  const login = (value) => {
    props.login(value);
  };
  var {LoginAdminStore,LoginAdminMessageStore}=props;
  useEffect(() => {
    if(LoginAdminStore){
      props.getIdUser(LoginAdminStore);
    }
  }, [1])
  if(LoginAdminMessageStore.login_success){
    return <Redirect to="/" />
  }
  if(LoginAdminMessageStore.login_error){
    toast.dark("Login thất bại")
  }
  if(LoginAdminStore){
    return <Redirect to="/" />
  }

  return (
    <>
 <Dialog
        open={LoginAdminMessageStore.login_loading}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogContent>
        <CircularProgress />
        </DialogContent>
      </Dialog>
      <LoginComponent login={login} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    LoginAdminStore:state.LoginAdminStore,
    LoginAdminMessageStore:state.LoginAdminMessageStore
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    login:(data)=>{
      dispatch(action.LOGIN_ADMIN(data));
    },
    getIdUser:(id)=>{
      dispatch(action.GET_USER_ID(id));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Login);
