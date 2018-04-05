import React, {Component} from 'react';
import AvatarSelector from '@/base/avatar'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '@/actionTypes/user_actions'
import {NavBar,InputItem, TextareaItem, Button,WhiteSpace} from 'antd-mobile'

const mapStateToProps = (state) => {
    return {state: state}
}
@connect(
    mapStateToProps,
    {update}
)
class Geniusinfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            desc:''
        }
    }
    handleChange = (key,v) => {
        this.setState({
            [key]: v
        })
    }
    render() {
        const path = this.props.location.pathname
        const redirect = this.props.state.redirectTo
        return(
            <div>
                {redirect&&redirect!==path? <Redirect to={redirect}></Redirect> :null}
                <NavBar mode="dark">牛人信息完善页</NavBar>
                <AvatarSelector setAvatar={(avatarname)=>{
                    this.setState({
                        avatar : avatarname
                    })
                }}/>
                <InputItem onChange={v=>this.handleChange('title',v)}>求职职位</InputItem>
                <TextareaItem
                    onChange={v=>this.handleChange('desc',v)}
                    title="个人简介"
                    rows={3}
                    autoHeight
                />
                <WhiteSpace />
                <Button type='primary' onClick={()=>this.props.update(this.state)}>保存</Button>
            </div>
        )
    }
}
export default Geniusinfo