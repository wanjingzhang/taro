import Taro, { Component } from 'react'
import { View,Text } from "@tarojs/components";

export default class Child extends Component{
    // 类的静态属性，如果外面没传，就用内部的
    static defaultProps = {
        // userInfo:{name:'我是child组件2'}
    }

    render(){
        return(
            <View>
                <Text>child!</Text>
                <View>{this.props.userInfo.username}</View>
            </View>
        )
    }
}

// 定义组件的默认属性
// Child.defaultProps = {
//     name:'我是child组件1'
// }
  