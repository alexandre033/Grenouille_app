import {StyleSheet} from 'react-native'

export const BACKGROUNDCOLOR = "#5C114A"
export const BACKGROUNDCOLORSECOND = "#5b1e4c"
export const BACKGROUNDCOLORTHIRD = "#663559"
export const BACKGROUNDCOLORFOURTH = "#774c6d"

export default StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : BACKGROUNDCOLOR
    },

    //HEADER OF THE APP
    conditionsContainer : {
        flex:3,
        //backgroundColor:"orange",
        marginTop : 0,
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
        fontSize :175,
        color: "white",
    },
    conditionsMeasure :{
        flexDirection :"row",
        justifyContent:"space-around",
        alignItems:"flex-start"
    },
    conditionsMeasureContainer:{
        flexDirection:"row"
    },
    conditionsMeasureItems :{
        color:"white",
        fontSize:15
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
    },

    //UPDATE CITY
    updateCityContainer : {
        flex:1,
        backgroundColor:"#1C1F24",
        padding:20
    },
    updateCityIcon:{
        justifyContent:"flex-start"
    },
    updateCityText :{
        color:"white",
        fontSize:15
    },

    //MENU CONTAINER
    menuContainer :{
        alignItems:"flex-end",
        padding :10
        //alignContent:"baseline"
    }

})