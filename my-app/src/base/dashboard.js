import React,{Component} from 'react'
import NavLinkBar from '@/base/navlinkbar'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {state: state}
}
@connect(
    mapStateToProps
)
class Dashboard extends Component{
    componentDidMount(){
        console.log(this.props.state)
    }
    render(){
        const pathname = this.props.location.pathname
        const type = this.props.state.type
        const navList = [
            {
                path:'/boss',
                key: 'boss',
                icon:'boss',
                title:'BOSS列表',
                hide:type==='genius'
            },
            {
                path:'/genius',
                key: 'genius',
                icon:'genius',
                title:'牛人列表',
                hide:type==='boss'
            },
            {
                path:'/msg',
                key: 'msg',
                icon:'msg',
                title:'消息列表'
            },
            {
                path:'/me',
                key: 'me',
                icon:'user',
                title:'个人中心'
            }
        ]
        return(
            <div>
                <NavBar>{navList.find(v=>v.path === pathname).title}</NavBar>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard