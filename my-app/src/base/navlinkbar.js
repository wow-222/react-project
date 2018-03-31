import React,{Component} from 'react'
import { TabBar } from 'antd-mobile'
class NavLinkBar extends Component{
    // componentDidMount(){
    //     const datas = this.props.data.filter(function (v,i) {
    //         console.log(v.hide)
    //     })
    //     console.log(datas)
    // }
    render(){
        return(
            <div>
                <TabBar>
                    <TabBar.Item/>
                </TabBar>
            </div>
        )
    }
}
export default NavLinkBar
