import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import styles from '../assets/globalStyles'
import { DrawerNavigator } from 'react-navigation';

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.menu}>
                <Image source = {require('../assets/icons/plus.png')}/>
            </View>
        )
    }
}