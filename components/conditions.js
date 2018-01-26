//main conditions
import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import styles from '../assets/globalStyles'
import {Icon} from 'react-native-elements'


export default class Conditions extends Component{
    render(){
        return(
            <View style={styles.conditionsContainer}>
                <View style={styles.conditionsHeader}>
                    <View style={styles.conditionsHeaderItems}>
                        <Image source = {require('../assets/icons/rain.png')}/>
                    </View>
                    <View style={styles.conditionsHeaderItems}>
                        <Text style={styles.conditionsHeaderItemsText}>
                        BORDEAUX
                        </Text>
                        <Text style={{fontSize:12, color:"white"}}>
                        Mon 24 Jan
                        </Text>
                        
                    </View>
                </View>
                <View style={styles.conditionsTemp}>
                    <Text style={styles.conditionsTempItem}>14°</Text>
                </View>
                <View style={styles.conditionsMeasure}>
                    <View style={styles.conditionsMeasureContainer}>
                        <Icon name="water" type='material-community' color="white"/> 
                        <Text style={styles.conditionsMeasureItems}> 96%</Text>
                    </View>
                    <View style={styles.conditionsMeasureContainer}>
                        <Icon name="weather-windy" type='material-community' color="white"/> 
                        <Text style={styles.conditionsMeasureItems}> 70 km/h</Text>
                    </View>
                </View>
            </View>
        )
    }
}

