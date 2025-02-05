import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    Image:{
        width:122,
        height:122,
        marginTop:'10%',
        alignSelf:'center'
    },
    ItemsText:{
        fontFamily:theme.SEMIBOLD,
        fontSize:28,
        textAlign:'center',
        marginTop:'5%'
    },
    TextStyle:{
        fontFamily:theme.REGULAR,
        fontSize:17,
        color:Colors.gray,
        textAlign:'center'
    }
})
export default Styles
