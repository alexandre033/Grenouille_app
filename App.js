import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native'
import styles from './assets/globalStyles'
import Conditions from './components/conditions'
import Forecast from './components/forecast'
import Menu from './components/menu'
import UpdateCity from './components/updateCity'
import { DrawerNavigator } from 'react-navigation';


export const MainScreen = () => {
        <Menu/>
        <Conditions/>
        <Forecast/>
}

const RootDrawer = DrawerNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  Profile: {
    screen: UpdateCity,
  },
});


export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
       <StatusBar
        hidden={true}
        />
        <RootDrawer />
      </View>
    )
  }
}


