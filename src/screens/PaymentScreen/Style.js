import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    ArrowStyle: {
        width: 24,
        height: 24,
        marginLeft: '20%',

    },
    TextArrowStyle: {
        flexDirection: 'row',
        marginTop: '10%',
        alignItems: 'center'
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
    DelivaryTextStyle: {
        fontFamily: theme.BOLD,
        fontSize: 34,
        marginLeft: '8%',
        marginTop: '10%'
    },
    PaymentStyle: {
        fontFamily: theme.SEMIBOLD,
        fontSize: 17,
        marginLeft:'8%',
        marginTop:'5%'

    },
    RadioButtonsView:{
        backgroundColor:'white',
        width:305,
        height:200,
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
    RadioButtonsView1:{
        backgroundColor:'white',
        width:305,
        height:145,
        borderRadius:20,
        alignSelf:'center',
        marginTop:'3%',

    },
    radioContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        elevation:0
    },
    radioButtonWrapper1: {
        marginRight: 20,
        marginTop:'4%'
    
    },
    radioCircle1: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10,
        top:4

    },
    radioInnerCircle1: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    label1: {
        fontSize: 17,
        color: 'black',
        fontFamily:theme.REGULAR,
        top:6,
        marginTop:'2%'

    },
    breakLine1: {
        height: 1,
        backgroundColor: '#d3d3d3',
        width:'50%',
        marginLeft:'20%',
        marginVertical:5
        
    },
    PaymentView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'10%',
        marginLeft:'10%'
    },
    TotalTextStyle:{
        fontSize:17,
        fontWeight:400
    },
    TotalAmount:{
        fontFamily:theme.SEMIBOLD,
        fontSize:22,
        marginRight:'9%',
    },
    ButtonStyle:{
        marginBottom:'15%',
        height:'9%'
    },
    imageWrapper1: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        top:6

    },
    ButtonStyle:{
        marginBottom:'10%',
        height:70
    },
    ModalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        
    },
    ModalContainer: {
        width: 315,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        alignItems: 'center',
        
    },
    ModalTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontFamily:theme.SEMIBOLD,
        left:'12%',
        top:'10%'        
    },
    DeliveryOption: {
        alignItems: 'center',
        marginVertical: 10,
    },
    DeliveryTitle: {
        fontSize: 15,
        fontWeight: '400',
        color: 'gray',
        right:'8%'

    },
    DeliveryPrice: {
        fontSize: 17,
        fontFamily:theme.REGULAR,
        color: 'black',
        right:'15%'
    },
    Divider: {
        width: '73%',
        height: 1,
        backgroundColor: '#000000',
        opacity:0.4,
        marginVertical: 5,
    },
    ModalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    CancelText: {
        fontSize: 17,
        color: 'gray',
        fontFamily:theme.SEMIBOLD,
        left:'90%',
        top:'30%',
        
    },
    ProceedButton: {
        backgroundColor:Colors.orange,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        width:159,
        height:60,
        marginBottom:'5%',
        right:'5%'

    },
    ProceedText: {
        color: 'white',
        fontSize: 16,
        fontFamily:theme.SEMIBOLD,
        textAlign:'center',
        top:'20%',
        
    },
    DeliveryTitle2: {
        fontSize: 15,
        fontWeight: '400',
        color: 'gray',
        right:'11%'

    },
    DeliveryPrice2: {
        fontSize: 17,
        fontFamily:theme.REGULAR,
        color: 'black',
        right:'17%'
    },
    ModalStyle:{
        padding:10,
        backgroundColor:'#EDEDED',
        width:'100%',
        borderRadius:26
    },

})
export default Styles
