import React, {Component} from 'react';
import '@/assets/css/logo.css';
import { List, InputItem, WhiteSpace ,WingBlank, Button} from 'antd-mobile';
class Login extends Component{
  register = () => {
    this.props.history.push('/register')
  }
  render(){
    return (
      <div className='logo-container'>
        <img src={require('@/assets/images/job.png')} alt=""/>
        <h2>登陆</h2>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;