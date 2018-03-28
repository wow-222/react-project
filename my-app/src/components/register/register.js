import React, {Component} from 'react';
import '@/assets/css/logo.css';
import { List, InputItem, WhiteSpace ,WingBlank, Button, Radio} from 'antd-mobile';
import {regisger} from '@/actionTypes/actions'
import {connect} from 'react-redux'
//从store里获取state.user并把它赋给当前类的props  this.props.state
const mapStateToProps = (state) => {
    return {state:state}
}
@connect(
    mapStateToProps,
    {regisger}
)

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      type: 'genius',
      user: '',
      pwd: '',
      repeatpwd: ''
    }
  }
  handleChange = (key,val) => {
    this.setState({
      [key]: val
    })
  }
  componentDidMount(){

  }
  handleRegister = () => {
      this.props.regisger(this.state)
  }
  render(){
    const RadioItem = Radio.RadioItem;
    return (
      <div className='logo-container'>
        <img src={require('@/assets/images/job.png')} alt=""/>
          {this.props.state.msg?<p className='error-msg'>{this.props.state.msg}</p>:null}
        <WingBlank>
          <List>
            <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
            <InputItem type='password' onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
            <InputItem type='password' onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
            <RadioItem
            checked={this.state.type === 'genius'}
            onChange={()=>this.handleChange('type','genius')}
            >牛人</RadioItem>
            <RadioItem
            checked={this.state.type === 'boss'}
            onChange={()=>this.handleChange('type','boss')}
            >boss</RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Register;