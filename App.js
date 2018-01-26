import React, {Component} from 'react'
import {View, StatusBar, Text} from 'react-native'
import MainScreen from './components/mainScreen'
import {UpdateCity} from './components/updateCity'
import SideMenu from 'react-native-side-menu'
import Menu from './components/menu'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {isOpen : false}
    this.getSideMenu = this.getSideMenu.bind(this)
  }
  getSideMenu(){
    this.setState({isOpen : true})
  }

  render(){
    return(
      <SideMenu 
      menu={UpdateCity}
      isOpen = {this.state.isOpen}
      >
       <StatusBar
        hidden={true}
        />
        <MainScreen isOpen={this.getSideMenu}/>
      </SideMenu>

    )
  }
}



