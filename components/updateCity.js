import React, {Component} from 'react'
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native'
import styles from '../assets/globalStyles'
import {Icon} from 'react-native-elements'


export const UpdateCity =  (

    <View style={styles.updateCityContainer}>
            <View style={styles.updateCityIcon}>
                <Icon name="settings" color="#578F8E"/> 
            </View>
            <View>
                <Text style={styles.updateCityText}>Update city weather</Text>
                <TextInput placeholder="find new city"/>
            </View>
            <View>
                <TouchableOpacity>
                    <Text> Paris, FR </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> Paris, FR </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> Paris, FR </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> Paris, FR </Text>
                </TouchableOpacity>
            </View>
           

        
    </View>
)