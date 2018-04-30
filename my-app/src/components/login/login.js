import React, {Component} from 'react';
import '@/assets/css/logo.css';
import { List, InputItem, WhiteSpace ,WingBlank, Button} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {login} from '@/actionTypes/user_actions';

const mapStateToProps = (state) => {
    return {state:state.user}
}
@connect(
    mapStateToProps,
    {login}
)
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            user : '',
            pwd : ''
        }
    }
    handleChange = (key,val) => {
        this.setState({
            [key] : val
        })
    }
    register = () => {
        this.props.history.push('/register')
    }
    handleLogin = () => {
        this.props.login(this.state)
    }
  render(){
    return (
      <div className='logo-container'>
        {(this.props.state.redirectTo&&this.props.state.redirectTo!=='/login')? <Redirect to={this.props.state.redirectTo} />:null}
        <img src={require('@/assets/images/job.png')} alt=""/>
          {this.props.state.msg ? <p>{this.props.state.msg}</p> : null}
        <h2>登陆</h2>
        <WingBlank>
          <List>
            <InputItem onChange={v=>this.handleChange('user',v)}>用户</InputItem>
            <InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;