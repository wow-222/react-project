import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from '@/actionTypes/chatuser_actions'
import UserCard from '@/base/usercard'
const mapStateToProps = (state) =>{
  return {state:state.chatuser}
}
@connect(
  mapStateToProps,
  {getUserList}
)
class Genius extends Component{
  componentWillMount(){
    this.props.getUserList('genius')
  }
  render(){
    return (
      <UserCard userlist={this.props.state.userlist}></UserCard>
    )
  }
}
export default Genius