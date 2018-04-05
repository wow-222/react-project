import React,{Component} from 'react'
import NavLinkBar from '@/base/navlinkbar'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import Boss from '@/components/boss/boss'
import Genius from '@/components/genius/genius'
import Msg from '@/components/msg/msg'
import User from '@/components/user/user'

const mapStateToProps = (state) => {
    return {state: state}
}
@connect(
    mapStateToProps
)
class Dashboard extends Component{
    render(){
        const pathname = this.props.location.pathname
        const type = this.props.state.type
        const navList = [
            {
                //当用户为boss身份时,显示牛人列表相对应的组件信息
                path:'/boss',
                key: 'joblist',
                icon:'joblist',
                title:'牛人列表',
                hide:type==='genius',
                component: Genius
            },
            {
                //当用户为牛人身份时,显示boss列表相对应的组件信息
                path:'/genius',
                key: 'boss',
                icon:'boss',
                title:'BOSS列表',
                hide:type==='boss',
                component: Boss
            },
            {
                path:'/msg',
                key: 'msg',
                icon:'msg',
                title:'消息列表',
                component: Msg
            },
            {
                path:'/user',
                key: 'user',
                icon:'user',
                title:'个人中心',
                component: User
            }
        ]
        return(
            <div>
                <NavBar>{navList.find(v=>v.path === pathname).title}</NavBar>
                <div>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard