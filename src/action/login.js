import * as types from './../constant/login';
import {db} from './../config/fbConfig';

import firebase from './../config/fbConfig';
export const LOGIN_ADMIN=(data)=>{
    
    return (dispatch,getState,{getFirebase})=>{
        dispatch(LOGIN_LOADING());
        firebase.auth().signInWithEmailAndPassword(data.name+"@ued.udn.vn",data.pass).then(res=>{
            var user=firebase.auth().currentUser;
            if(user){

                db.collection('admin').where('uid','==',user.uid).get().then(res=>{
                    res.forEach(doc=>{
                        var id=doc.id;
                        db.collection('admin').doc(id).set({
                            name:doc.data().name,
                            online:true,
                            rules:doc.data().rules,
                            uid:doc.data().uid
                        }).then(r=>{
                            localStorage.setItem('admin',JSON.stringify(id));
                            dispatch(LOGIN_SUCCESS(id));
                        })
                    })
                })
            }
        }).catch(er=>{
            dispatch(LOGIN_ERROR());
        })
    }
}

export const LOGIN_SUCCESS=(data)=>{
    return {
        type:types.LOGIN_SUCCESS,
        data
    }
}

export const LOGIN_LOADING=()=>{
    return {
        type:types.LOGIN_LOADING
    }
}

export const LOGIN_ERROR=()=>{
    return {
        type:types.LOGIN_ERROR,
    }
}



export const getIdUser=(id)=>{
    return (dispatch,getState,{getFirebase})=>{
        db.collection('admin').doc(id).get().then(res=>{
            var id=res.id;
            dispatch(GET_USER_ID(id));
        }).catch(er=>{

        })
    }
}



export const GET_USER_ID=(data)=>{
    return {
        type:types.GET_USER_ID_SUCCESS,
        data
    }
}




export const LOGOUT_ADMIN=(id)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(LOGOUT_ADMIN_LOADING());
        firebase.auth().signOut().then(res=>{
            db.collection('admin').doc(id).get().then(res=>{
                db.collection('admin').doc(id).set({
                    name:res.data().name,
                            online:false,
                            rules:res.data().rules,
                            uid:res.data().uid
                }).then(re=>{
                    localStorage.removeItem('admin');
                    dispatch(LOGOUT_ADMIN_SUCCESS());
                }).catch(e=>{

                })
            }).catch(er=>{

            })

            dispatch(LOGOUT_ADMIN_SUCCESS());
        }).catch(er=>{
            dispatch(LOGOUT_ADMIN_ERROR());
        });
    }
}



export const LOGOUT_ADMIN_SUCCESS=()=>{
    return {
        type:types.LOGOUT_SUCCESS
    }
}


export const LOGOUT_ADMIN_LOADING=()=>{
    return {
        type:types.LOGOUT_LOADING
    }
}


export const LOGOUT_ADMIN_ERROR=()=>{
    return {
        type:types.LOGOUT_ERROR
    }
}