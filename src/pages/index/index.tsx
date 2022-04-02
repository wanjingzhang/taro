import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import Child from "./../../components/child"

export default class Index extends Component {
  constructor(){
    super();
    // this.state = {name:"celine"}
  }

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
    if(this.state.name === nextState.name)return false;
    else return true;
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
 
  clickme = ()=>{
    this.setState({name:"cenline zhang ~!",curId:this.state.curId+1});
  }

  render () {
    let {name,curId,userInfo} = this.state;
    console.log("render");
    return (
      <View className='index'>
        <Text>Hello world!!!!!{name}</Text>
        <Button onClick={this.clickme}>点我 {curId}</Button>
        <Child userInfo={userInfo} ></Child>  
      </View>
    )
  }
}

