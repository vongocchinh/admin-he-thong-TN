/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as action from './../action/user';
import { useEffect } from 'react';
import USERCOMPONENT from './../components/user/user';
import Item from './../components/user/Item';
function User(props){
    var {UserStore}=props;
    useEffect(() => {
        props.GET_USER_SV();
    }, [1])
    console.log(UserStore);
    const show=(data)=>{
        var result=null;
        if(data){
            result=data.map((value,key)=>{
                return (
                    <Item value={value} key={key} stt={key} />
                )
            })
        }
        return result;
    }
    return (
        <>
        <USERCOMPONENT show={show(UserStore)}/>
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
        UserStore:state.UserStore,
        UserMessageStore:state.UserMessageStore
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        GET_USER_SV:()=>{
            dispatch(action.GET_USER_SV());
        }
    }
}
export default (connect(mapStateToProps,dispatchToProps)) (User);