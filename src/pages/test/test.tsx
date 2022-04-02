import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro';

export default class Index extends Component { 

  state = {
    name: "Celine",
    curId: 1,
    userInfo:{username:"celine"}
  }

  componentWillMount () { 
    this.setState({name:"cenline zhang"},()=>{
      // console.log(this.state.name)
    })
  }

  componentDidMount () { }

  // 一般在多次setState的时候，提升性能
  shouldComponentUpdate(nextProps:any, nextState:any){  
    return true;
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  clickMe(){
      Taro.navigateTo({
          url:"/pages/index/index"
      })
  }

  render () { 
    return (
      <View className='test'>
        <Text>Test</Text>  
        <Button onClick={this.clickMe}>点我跳入首页。。。</Button>
      </View>
    )
  }
}

