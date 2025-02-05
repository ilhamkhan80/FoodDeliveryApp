import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    Imagestyle:{
        width:160,
        height:160,
        alignSelf:'center',
        marginTop:'40%'
    },
    InternatStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:25,
        textAlign:'center'
    },
    DetailsStyle:{
        fontWeight:400,
        fontSize:17,
        color:Colors.gray,
        textAlign:'center'
    },
    MainView:{
        flex:1,
        backgroundColor:'#F5F5F8'

    },
    ButtonStyle:{
        height:'9.5%',
        marginTop:'10%'
    }
})
export default Styles
