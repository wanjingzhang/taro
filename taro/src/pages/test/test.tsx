import { Component } from 'react'
import { View, Text, Button ,Image} from '@tarojs/components'
import Taro from '@tarojs/taro';
import { setData,getData } from '@/common/js/utils';
import head from '@/static/images/1.png' 

const isWeapp = process.env.TARO_ENV === 'weapp' ? true : false;
const isH5 = process.env.TARO_ENV === 'h5' ? true : false;

export default class Index extends Component { 

  state = {
    name: "Celine",
    curId: 1,
    isLogin:false,
    userInfo:{username:"celine"}
  }

  componentWillMount () { 
    console.log(isWeapp ,isH5)
    if(isWeapp){ // 小程序
      require("./weapp.scss");
    }
    if(isH5){
      require("./h5.scss");
    }
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
  
  gotoIndex(){
    Taro.navigateTo({
          url:"/pages/index/index?id=2",
          events: {
            // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            acceptDataFromOpenedPage: function(data) {
              console.log(data)
            },
            someEvent: function(data) {
              console.log(data)
            } 
          },
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
          }
      })
  }

  clickMe(param,e){ 
      console.log(setData())
      console.log(param,e) // 3, TaroEvent
  }

  render () { 
    let {isLogin} = this.state;
    return (
      <View class={isWeapp?'weapp':'h5'}>
        <Text>Test</Text>  
        <Button onClick={this.clickMe.bind(this,3)}>调用外部方法</Button>
        {/* <Image class="head" mode="widthFix" src={require("@/static/images/1.png")}></Image> */}
        <Button onClick={this.gotoIndex}></Button>
        <Button onClick={()=>this.setState({isLogin:!isLogin})}>{isLogin !== true? '单击登录':'已经登录'}</Button>
        {isLogin? <Text>已登录</Text> : <Text>用户未登录</Text>} 
        <Image class="desc" mode="widthFix" src={head}></Image>
      </View>
    )
  }
}

