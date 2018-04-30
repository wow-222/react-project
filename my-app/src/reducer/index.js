// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import userReducer from './user'
import chatuserReducer from './chatuser'
const reducer = combineReducers({
  user: userReducer,
  chatuser: chatuserReducer
})
export default reducer