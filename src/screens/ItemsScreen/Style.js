import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
    ArrowImageStyle:{
        marginTop:'15%',
        marginLeft:'10%',
        flexDirection:'row',
        alignItems:'center'
    },
    ItemsStyle:{
        fontFamily:theme.BOLD,
        fontSize:28,
        textAlign:'center',
        marginTop:'10%'
    },
    Items:{
        backgroundColor:'#F9F9F9',
        width:'95%',
        alignSelf:'center',
        borderRadius:30,
        height:'95%',
        marginTop:'5%',
    },
    ImagesStyle: {
        width: 150,
        height: 150,
        zIndex: 1,
        position: 'absolute',
        alignSelf: 'center',
        elevation: 2,
        left:5,
        top:10
    
    },
    CardStyle: {
        backgroundColor: 'white',
        width: 156,
        height: 212,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: '20%',
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
    
})
export default Styles
