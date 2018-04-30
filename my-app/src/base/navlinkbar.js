import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
@withRouter
class NavLinkBar extends Component{
    render(){
        const navList = this.props.data.filter(v=>!v.hide)
        const pathname = this.props.location.pathname
        return(
            <div>
                <TabBar>
                    {navList.map(v=>(
                        <TabBar.Item
                            key={v.key}
                            title={v.title}
                            icon={{uri: require(`@/assets/images/${v.icon}.png`)}}
                            selectedIcon={{uri: require(`@/assets/images/${v.icon}-active.png`)}}
                            selected={pathname===v.path}
                            onPress={()=>{
                                this.props.history.push(v.path)
                            }}
                        >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )
    }
}
NavLinkBar.propTypes = {
    data: PropTypes.array.isRequired
};
export default NavLinkBar
