import { Component, createRef, useState, useEffect } from 'react'
import { View, Text, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './../../app.scss'
import './index.scss'
import Child from "./../../components/child"

export default class Index extends Component {
  el = createRef()

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
    console.log("componnetWillMount")
    
  }

  componentDidMount () {
    console.log("componentDidMount")
    this.setState({name:"cenline zhang"},()=>{
      // console.log(this.state.name)
    })
    // 获取到的 DOM 具有类似 HTMLElement 或 Text 等对象的 API
    console.log(this.el.current)
   }

  // 一般在多次setState的时候，提升性能
  shouldComponentUpdate(nextProps:any, nextState:any){ 
    if(this.state.name === nextState.name)return false;
    else return true;
  }
  componentWillUnmount () { }

  componentDidShow () { 
    console.log("componentDidShow")
  }

  componentDidHide () { } 

  onLaunch(){
    console.log("onLaunch")
  }

  onLoad(option){
    console.log("onLoad")
    console.log(option.id)
  }
 
  onReady () {
    console.log("onReady")
    // onReady 触发后才能获取小程序渲染层的节点
    Taro.createSelectorQuery().select('#abc')
      .boundingClientRect()
      .exec(res => console.log(res))
  }
  clickme = ()=>{
    this.setState({name:"cenline zhang ~!",curId:this.state.curId+1});
  }

  render () {
    let {name,curId,userInfo} = this.state; 
    console.log("render");
    return (
      <View className='index page'>
        <Text>Hello world!!!!!{name}</Text>
        <Button onClick={this.clickme}>点我 {curId}</Button>
        <Child userInfo={userInfo} ></Child> 
        <View  ref={this.el} />  
        <View id='abc'> abccccccc</View> 
      </View>
    )
  }
}

