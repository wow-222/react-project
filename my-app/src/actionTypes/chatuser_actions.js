import axios from 'axios'

export const USER_LIST = 'USER_LIST'
export const initState = {
  userlist: []
}
export function userList(data){
  return {type: USER_LIST, payload: data}
}
export function getUserList(type){
  return dispatch=>{
   axios.get('/user/list?type='+type)
   .then(res=>{
    if (res.data.code === 0) {
      dispatch(userList(res.data.data))
    }
   })
  }
}