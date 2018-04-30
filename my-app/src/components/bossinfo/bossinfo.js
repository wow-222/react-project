import React, {Component} from 'react';
import AvatarSelector from '@/base/avatar'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '@/actionTypes/user_actions'
import {NavBar,InputItem, TextareaItem, Button,WhiteSpace} from 'antd-mobile'

const mapStateToProps = (state) => {
    return {state: state.user}
}
@connect(
    mapStateToProps,
    {update}
)
class Bossinfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            desc:'',
            company:'',
            money:''
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
                <NavBar mode="dark">Boss信息完善页</NavBar>
                <AvatarSelector setAvatar={(avatarname)=>{
                    this.setState({
                        avatar : avatarname
                    })
                }}/>
                <InputItem onChange={v=>this.handleChange('title',v)}>招聘职位</InputItem>
                <InputItem onChange={v=>this.handleChange('company',v)}>公司简介</InputItem>
                <InputItem onChange={v=>this.handleChange('money',v)}>职位薪资</InputItem>
                <TextareaItem
                    onChange={v=>this.handleChange('desc',v)}
                    title="职位要求"
                    rows={3}
                    autoHeight
                />
                <WhiteSpace />
                <Button type='primary' onClick={()=>this.props.update(this.state)}>保存</Button>
            </div>
        )
    }
}
export default Bossinfo