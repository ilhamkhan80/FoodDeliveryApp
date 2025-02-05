import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    ArrowStyle:{
        width:24,
        height:24,
        marginLeft:'25%',

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
    HistroyImageStyle:{
        width:113,
        height:107,
        alignSelf:'center',
        marginTop:'40%',
        
    },
    HistroyText:{
        fontFamily:theme.SEMIBOLD,
        fontSize:28,
        textAlign:'center',
        marginTop:'5%'
    },
    DiscriptionStyle:{
        fontSize:17,
        fontWeight:400,
        color:Colors.gray,
        textAlign:'center'
    },
    ButtonStyle:{
        height:'9%',
        marginTop:'55%'
        
    }
})
export default Styles
