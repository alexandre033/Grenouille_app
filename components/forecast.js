//main forecast
import React, {Component} from 'react'
import {View, Text, Image, FlatList} from 'react-native'
import styles from '../assets/globalStyles'


export default class Forecast extends Component{
  

    getData(data){
        const items = data.map((item, index) =>
            <View key={index} style={[styles.forecastItems, styles[`forecastItems${index}`]]}>
                <Text style={{color:"white", fontSize:15}}>{item.day}</Text>
                <Image source={item.url}/>
                <Text style={{color:"white", fontSize:15}}>{item.temp}</Text>
            </View>
        );
        return (items)
    }

    render(){
        let data =[
            {
                day: 'Mon',
                url : require('../assets/icons/rain32.png'),
                temp : 25
            },
            {
                day: 'Tue',
                url : require('../assets/icons/rain32.png'),
                temp : 20
            },
            {
                day: 'Wen',
                url : require('../assets/icons/rain32.png'),
                temp : 12
            },
            {
                day: 'Thu',
                url : require('../assets/icons/rain32.png'),
                temp : 22
            }
        ] 
        return(
            <View style={styles.forecastContainer}>
                {this.getData(data)}
            </View>
        )
    }
}