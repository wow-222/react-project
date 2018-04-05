import axios from "axios";

/*
 * action 类型
 */

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const UPDATE_SUCESS = 'UPDATE_SUCESS';
export const ERROR_MSG = 'ERROR_MSG';
export const LOAD_DATA = 'LOAD_DATA';

/*
 * 其它的常量
 */

export const initState = {
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    type:''
}

/*
 * action 创建函数
 */

function errorMsg(msg){
    return { type:ERROR_MSG ,msg}
}

function registerSuccess(data){
    //如果传过来的是对象 必须要用payload包装给reducer
    return { type:REGISTER_SUCCESS, payload:data}
}

function  loginSuccess(data) {
    return {type:LOGIN_SUCESS, payload:data}
}

function updateSuccess(data) {
    return {type:UPDATE_SUCESS, payload:data}
}

export function loadData(data) {
    return {type: LOAD_DATA,payload:data}
}

export function registered({user,pwd,repeatpwd,type}){
    if (!user||!pwd||!type) {
        return errorMsg('用户名密码必须输入')
    }
    if(pwd!==repeatpwd){
        return errorMsg('密码和确认密码不同')
    }
    return dispatch=>{
        axios.post('/user/register',{user,pwd,type})
            .then(res=>{
                if(res.status === 200 && res.data.code === 0){
                    dispatch(registerSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

export function login({user,pwd}) {
    if(!user || !pwd){
        return errorMsg('用户名和密码必须输入');
    }
    return dispatch=>{
        axios.post('/user/login',{user,pwd})
            .then(res=>{
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(loginSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

export function update(data) {
    return dispatch=>{
        axios.post('/user/update',data)
            .then(res=>{
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(updateSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}