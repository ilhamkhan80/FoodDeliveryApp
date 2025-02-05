import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'


const Styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colors.backgroundcolor,

    },
    MenuStyle: {
        width: 20,
        height: 15,

    },
    ImageStyleView: {
        marginTop: '6%',
        marginLeft: '12.5%',
        paddingTop: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    CartImageStyle: {
        width: 24,
        height: 24,
        marginRight: '10%'
    },
    TextStyle: {
        paddingHorizontal: '12.5%',
        marginTop: '10%',

    },
    DeliciousTextStyle: {
        fontSize: 30,
        fontFamily: theme.BOLD
    },
    ImageInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEEEE',
        borderRadius: 30,
        height: 60,
        marginTop: '1%',
        width: '80%',
        alignSelf: 'center',
        marginLeft: 13,
        paddingHorizontal: '5%'
    },
    SearchIconStyle: {
        width: 18,
        height: 18,
        marginLeft: 10

    },
    InputStyle: {
        marginLeft: 10,
        fontSize: 17,
        fontFamily: theme.SEMIBOLD,
        color: Colors.gray
    },
    ActiveView: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.orange,
    },
    FoodText: {
        alignSelf: 'center',
        fontSize: 17,
        color: Colors.orange,
        fontFamily: theme.REGULAR
    },
    TextView: {
        marginTop: '5%',
        paddingHorizontal: '4%',
    },
    ListView: {
        flexDirection: 'row',
        marginTop: '2%',
        marginHorizontal:'19%',
        width:'65%'

    },
    InActiveText: {
        fontSize: 17,
        color: Colors.gray,
        fontFamily: theme.REGULAR,

    },
    InActiveView: {
        marginRight: '15%',

    },
    FoodInActiveText: {
        fontSize: 17,
        color: Colors.gray,
        fontFamily: theme.REGULAR,
    },
    SeeMoreText: {
        fontFamily: theme.REGULAR,
        color: Colors.orange,
        fontSize: 15,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 30
    },
    ImagesStyle: {
        width: 165,
        height: 165,
        zIndex: 1,
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: '20%',
        left: 13,
        elevation: 2,
    
    },
    CardStyle: {
        backgroundColor: 'white',
        width: 190,
        height: 230,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: '12%',
        marginLeft: '21%',
        elevation: 1,


    },
    ItemsTextStyle: {
        marginTop: '30%',
        paddingTop: '24%'
    },
    VeggieTextStyle: {
        fontFamily: theme.SEMIBOLD,
        fontSize: 22,
        alignSelf: 'center',

    },
    DiscriptionStyle: {
        fontFamily: theme.SEMIBOLD,
        fontSize: 22,
        alignSelf: 'center',
        top:-10

    },
    PriceStyle:{
        fontFamily:theme.BOLD,
        fontSize:17,
        color:Colors.orange,
        textAlign:'center',
        top:0
    },
    InActiveDrinkText:{
        fontSize: 17,
        color: Colors.gray,
        fontFamily: theme.REGULAR,
        // alignSelf:'center',
        // marginHorizontal:10
        
        


    }




})
export default Styles
