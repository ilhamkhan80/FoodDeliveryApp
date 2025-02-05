import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    ImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    ButtonStyle:{
        fontFamily:theme.SEMIBOLD,
        color:Colors.orange,
        size:17

    },
    customStyle:{
        backgroundColor:'white',
        position:'absolute',
        bottom:'1%',
        height:'10%'
    }
})
export default Styles