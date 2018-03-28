import {
    REGISTER_SUCCESS,
    LOGIN_SUCESS,
    ERROR_MSG,
    LOAD_DATA,
    initState
} from '@/actionTypes/actions'

export default function userReducer(state=initState,action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                msg: '',
                isAuth: true,
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