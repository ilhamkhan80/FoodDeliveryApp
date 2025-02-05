import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'
const Styles = StyleSheet.create({
    ArrowStyle:{
        width:24,
        height:24,
        marginLeft:'20%'
    },
    LikeStyle:{
        width:20,
        height:20,
        right:'10%'
    },
    MainArow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'10%'
    },
    MainView:{
        flex:1,
        backgroundColor:'#F6F6F9'
    },
    SaladStyle:{
        alignSelf:'center',
        width:300,
        height:300,
        elevation:1,
        left:'13%',
        right:'13%'

    },
    pagination: {
        flexDirection: 'row',
        alignSelf: 'center',
        bottom:'20%',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    ItemsDetails:{
     flexDirection:'column'
    },
    VeggieText:{
        fontSize:28,
        fontFamily:theme.SEMIBOLD,
        alignSelf:'center',
        bottom:'40%'
    },
    PriceStyle:{
        fontSize:22,
        fontFamily:theme.SEMIBOLD,
        alignSelf:'center',
        bottom:'50%',
        color:Colors.orange
    },
    DelivaryText:{
        fontFamily:theme.SEMIBOLD,
        fontSize:17,
        marginLeft:'10%'  
    },
    DiscriptionText:{
        fontFamily:theme.REGULAR,
        color:Colors.gray,
        marginLeft:'10%'  
    },
    DiscriptionStyle:{
        marginTop:'6%'
    }

})
export default Styles
