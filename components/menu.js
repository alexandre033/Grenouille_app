import React, {Component} from 'react'
import {View, Image} from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../assets/globalStyles'

//USE THE getSideMenu function from App.js Throught the props openMenu
export default class Menu extends Component {

    render(){
        return(
            <View style={styles.menuContainer}>
                <Icon name="add-circle-outline" type='material-icons' color="white" onPress={() => this.props.openMenu()}/>
            </View>
            
        )
    }
}