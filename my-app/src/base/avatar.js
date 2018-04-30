import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Grid,List} from 'antd-mobile'
class AvatarSelector extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        let gridHeader = this.state.icon ? (<div><span>已选择头像</span><img style={{width:20}} src={this.state.icon} alt={''}/></div>) : '请选择头像';
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
            .split(',')
            .map(v=>({
                icon:require(`@/assets/images/${v}.png`),
                text:v
            }))
        return(
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={_el => {
                            this.setState(_el)
                            this.props.setAvatar(_el.text)
                        }}
                    />
                </List>
            </div>
        )
    }
}
//propsType类型校验 setAvatar必须是函数，而且必传
AvatarSelector.propTypes = {
    setAvatar: PropTypes.func.isRequired
};
export default AvatarSelector