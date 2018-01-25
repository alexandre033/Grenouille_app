//main conditions
import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import styles from '../assets/globalStyles'


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
                        
                    </View>
                </View>
                <View style={styles.conditionsTemp}>
                    <Text style={styles.conditionsTempItem}>14°</Text>
                </View>
                <View style={styles.conditionsMeasure}>
                    <View>
                        <Text style={styles.conditionsMeasureItems}>Wind : 96</Text>
                    </View>
                    <View>
                        <Text style={styles.conditionsMeasureItems}>Hum : 70%</Text>
                    </View>
                </View>
            </View>
        )
    }
}

