import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Result, List,Brief,WhiteSpace,Modal} from 'antd-mobile'
import {logout} from '@/actionTypes/user_actions'
import browserCookie from 'browser-cookies'
import {Redirect} from 'react-router-dom'
const mapStateToProps = (state) =>{
  return {state:state.user}
}
@connect(
  mapStateToProps,
  {logout}
)
class UserCenter extends Component{
    loginOut = () =>{
      const alert = Modal.alert
      alert('注销', '确认退出登录吗???', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确认', onPress: () => {
              browserCookie.erase('userid')
              this.props.logout()
            }}
          ])
    }
    render(){
        const props = this.props.state
        const Item = List.Item
        const Brief = Item.Brief
        return props.user?(
          <div>
            <Result
              img={<img src={require(`@/assets/images/${props.avatar}.png`)} style={{width:50}} alt="" />}
              title={props.user}
              message={props.type==='boss'?props.company:null}
            />

            <List renderHeader={()=>'简介'}>
              <Item
                multipleLine
              >
                {props.title}
                {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                {props.money?<Brief>薪资:{props.money}</Brief>:null}
              </Item>

            </List>
            <WhiteSpace></WhiteSpace>
            <List>
              <Item onClick={this.loginOut}>退出登录</Item>
            </List>
          </div>
        ):<Redirect to={props.redirectTo} />
    }
}
export default UserCenter