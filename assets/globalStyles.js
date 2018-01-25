import {StyleSheet} from 'react-native'

export const BACKGROUNDCOLOR = "#311B92"
export const BACKGROUNDCOLORSECOND = "#4527A0"
export const BACKGROUNDCOLORTHIRD = "#512DA8"
export const BACKGROUNDCOLORFOURTH = "#5E35B1"

export default StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : BACKGROUNDCOLOR
    },
    //MENU
    menu:{
        margin:20,
        alignItems : "flex-end",
    },
    //HEADER OF THE APP
    conditionsContainer : {
        flex:3,
        //backgroundColor:"orange",
        marginTop : 10,
    },
    conditionsHeader :{
        //backgroundColor:"green",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    conditionsHeaderItems : {
        margin:10
    },
    conditionsHeaderItemsText :{
        color:"white",
        fontSize:20
    },
    conditionsTemp :{
        //backgroundColor:"red",
        alignItems :'center',
        justifyContent:"center"
    },
    conditionsTempItem :{
        fontSize :200,
        color: "white",
    },
    conditionsMeasure :{
        flexDirection :"row",
        justifyContent:"space-around"
    },
    conditionsMeasureItems :{
        color:"white",
        fontSize:20
    },


    //FOOTER FORECAST OF THE APP
    forecastContainer : {
        flex:1,
        flexDirection:"row",
    },
    forecastItems :{
        flex: 1,
        alignItems:"center",
        justifyContent:"space-around",
  
    },
    forecastItems0 :{
        backgroundColor:BACKGROUNDCOLORFOURTH
    },
    forecastItems1 :{
        backgroundColor:BACKGROUNDCOLORTHIRD
    },
    forecastItems2 :{
        backgroundColor:BACKGROUNDCOLORSECOND
    },
    forecastItems3 :{
        backgroundColor:BACKGROUNDCOLOR
    }


})