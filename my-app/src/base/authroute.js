import {Component} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '@/actionTypes/user_actions'
import { connect } from 'react-redux'
//withRouter 是用来包裹类可以获取props属性
@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends Component{
    componentDidMount() {
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname)>-1) {
            return null
        }
        // 获取用户信息
        axios.get('/user/info')
            .then(res=>{
            if (res.status===200) {
                if (res.data.code===0) {
                    // 有登录信息de
                    this.props.loadData(res.data.data)
                }else{
                    this.props.history.push('/login')
                }
            }
        })
        // 是否登录
        // 现在的url地址  login是不需要跳转的
        // 用户的type 身份是boss还是牛人
        // 用户是否完善信息（选择头像 个人简介）
    }
    render() {
        return null
    }
}
export default AuthRoute