import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import styles from '../assets/globalStyles'
import Conditions from './conditions'
import Forecast from './forecast'
import UpdateCity from './updateCity'
import Menu from './menu'

export default class MainScreen extends Component{
    render(){
       
              return(

            <View style={styles.container}>
                        <Menu openMenu={this.props.isOpen}/>
                        <Conditions/>
                        <Forecast/>
            </View>
        )
    }
}