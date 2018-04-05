import {
    REGISTER_SUCCESS,
    LOGIN_SUCESS,
    UPDATE_SUCESS,
    ERROR_MSG,
    LOAD_DATA,
    initState
} from '@/actionTypes/user_actions'

export default function userReducer(state=initState,action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                msg: '',
                isAuth: true,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            })
        case LOGIN_SUCESS:
            return Object.assign({}, state, {
                msg: '',
                isAuth: true,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            })
        case UPDATE_SUCESS:
            return Object.assign({}, state, {
                msg: '',
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            })
        case LOAD_DATA:
            return Object.assign({}, state, {
                ...action.payload
            })
        case ERROR_MSG:
            return Object.assign({}, state, {
                msg: action.msg,
                isAuth: false
            })
        default:
            return state
    }
}

function getRedirectPath({type, avatar}){
    // 根据用户信息 返回跳转地址
    // user.type /boss /genius
    // user.avatar /bossinfo /geniusinfo
    let url = (type==='boss')?'/boss': '/genius'
    if (!avatar) {
        url += 'info'
    }
    return url
}