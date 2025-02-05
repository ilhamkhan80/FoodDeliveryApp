import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
const Styles = StyleSheet.create({
    ArrowStyle: {
        width: 24,
        height: 24,
        marginLeft: '20%',

    },
    TextArrowStyle: {
        flexDirection: 'row',
        marginTop: '10%',
        alignItems: 'center',
        marginBottom:'10%'
    },
    CheckOutTextStyle: {
        fontSize: 18,
        fontFamily: theme.SEMIBOLD,
        textAlign: 'center',
        flex: 1,
        marginRight: '30%'
    },
    MainView: {
        backgroundColor: '#F5F5F8',
        flex: 1
    },
    ViewStyle:{
        width:'90%',
        backgroundColor:'white',
        borderRadius:20,
        height:102,
        alignSelf:'center',
        marginTop:'5%'
    },
    ItemsName:{
        fontFamily:theme.SEMIBOLD,
        fontSize:17,  
        marginTop:'5%',
    },
    ImageStyle:{
        width:100,
        height:100,

    },

    TextImageStyle: {
        flexDirection: 'row', 
       
    },
    Itemsprice:{
        fontFamily:theme.SEMIBOLD,
        fontSize:15,
        color:Colors.orange
    },
    ButtonStyle:{
        width:55,
        height:22,
        backgroundColor:Colors.orange,
        borderRadius:30,
        
    },
    PriceButtonStyle:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    itemsStyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    NamePriceStyle:{
        flexDirection:'column',
        marginTop:'5%'
    },
    TextStyle:{
        fontSize:15,
        fontFamily:theme.SEMIBOLD,
        color:'white'
    },
    HiddenItemsStyle:{
        alignSelf:'flex-end',
        marginTop:'15%',
        flexDirection:'row',
        marginRight:'3%',
        
    },
    LikeStyle:{
        backgroundColor:Colors.red,
        borderRadius:30,
        width:45,
        height:45,
        right:6

    },
    Dustbean:{
        backgroundColor:Colors.red,
        borderRadius:30,
        width:45,
        height:45,
    

    },
    LikeImageStyle:{
        width:16,
        height:14,
        alignSelf:'center',
        top:15,
        
    },
    CustomButtonStyle:{
        height:'27%',
        top:'40%'
    },
    deleteImageStyle:{
        width:16,
        height:14,
        alignSelf:'center',
        top:15,
    }
})
export default Styles
