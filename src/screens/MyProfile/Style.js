import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
    ArrowStyle:{
        width:24,
        height:24,
         marginLeft:'22%'
    },
    TextArrowStyle:{
        flexDirection:'row',
        marginTop:'10%',
        alignItems:'center'
    },
    HistoryTextStyle:{
        fontSize:18,
        fontFamily:theme.SEMIBOLD,
        textAlign:'center',
        flex:1,
        marginRight:'30%'
    },
    InformationStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:17,
        marginTop:'10%',
        marginLeft:'10%',

    },
    ImageStyle:{
        width:60,
        height:60,
        marginTop:'6%',
        marginLeft:'7%'
    },
    CardStyle:{
        width:305,
        height:140,
        borderRadius:20,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:'2%',
        flexDirection:'row'
    },
    TextStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:18,
        marginTop:'10%',
        marginLeft:'10%'
    },
    GmailStyle:{
        fontWeight:400,
        fontSize:13,
        marginLeft:'10%',
        color:Colors.gray
    },
    RadioButtonsView:{
        backgroundColor:'white',
        width:305,
        height:231,
        borderRadius:20,
        alignSelf:'center',
        marginTop:'3%',

    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 5,
        elevation:0,
    },
    radioButtonWrapper: {
        marginRight: 20,
    
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10,

    },
    radioInnerCircle: {
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    imageWrapper: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        top:6

    },
    image: {
        width: 20,
        height: 20,
    },
    label: {
        fontSize: 16,
        color: 'black',
        fontFamily:theme.MEDIUM,
        top:6

    },
    breakLine: {
        height: 1,
        backgroundColor: '#d3d3d3',
        width:'70%',
        marginLeft:'20%',
        marginVertical:5
        
    },
    ButtonStyle:{
        marginBottom:'15%',
        height:'9%'

    }
    
})
export default Styles
