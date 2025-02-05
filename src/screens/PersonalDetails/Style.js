import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'
const Styles = StyleSheet.create({
    ArrowStyle:{
        width:24,
        height:24,
        left:'9%',
        marginTop:'10%',

    },
    HistoryTextStyle:{
        fontSize:34,
        fontFamily:theme.SEMIBOLD,
        marginTop:'5%',
        left:'10%',
        marginRight:'10%'
    },
    InformationStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:17,
        marginTop:'5%',
        marginLeft:'10%',

    },
    ImageStyle:{
        width:91,
        height:90,
        marginTop:'6%',
        marginLeft:'7%'
    },
    CardStyle:{
        width:300,
        height:167,
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
        color:Colors.gray,
        bottom:'2%'
    },
    DetailsStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    changeText:{
     fontFamily:theme.REGULAR,
     fontSize:15,
     color:Colors.orange,
     right:'60%',
     top:'15%'
    },
   
    BorderLineStyle:{
        height: 1,
        backgroundColor: '#d3d3d3',
        width:'80%',
        alignSelf:'center',
    },
    OtherDetailsView:{
        width:300,
        height:60,
        backgroundColor:'white',
        marginTop:'5%',
        borderRadius:20,
        alignSelf:'center',
        
    },
    OrderStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    leftArrowStyle:{
        width:24,
        height:24,
        right:'60%',
        top:'15%'
    },
    OrderText:{
        fontFamily:theme.SEMIBOLD,
        fontSize:18,
        marginTop:'5%',
        left:'10%'
    }
})
export default Styles
