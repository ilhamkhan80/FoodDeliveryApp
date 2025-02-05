import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    ArrowStyle: {
        width: 24,
        height: 24,
        marginLeft: '8.5%',
        marginTop:'13%'

    },
    MyOffersStyle:{
        fontSize:34,
        fontFamily:theme.SEMIBOLD,
        marginLeft: '10%',
        marginTop:'9%'
    },
    DetailsStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:25,
        marginLeft: '10%',
        marginTop:'50%'
    },
    DiscriptionStyle:{
        fontWeight:400,
        fontSize:17,
        color:Colors.gray,
        textAlign:'center'
    }
})
export default Styles
