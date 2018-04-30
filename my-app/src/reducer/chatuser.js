import {
  USER_LIST,
  initState
} from '@/actionTypes/chatuser_actions'

export default function chatuserReducer(state=initState,action){
  switch(action.type){
    case USER_LIST:
     return Object.assign({}, state, {
       userlist: action.payload
     })
    default:
     return state
  }
}