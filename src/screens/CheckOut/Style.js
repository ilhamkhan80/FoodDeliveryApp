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
    PaymentMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '8%',
        marginTop: '5%',

    },
    PaymentStyle: {
        fontFamily: theme.SEMIBOLD,
        fontSize: 17,
        marginLeft:'1%'

    },
    ChangeTextStyle: {
        fontSize: 15,
        fontFamily: theme.REGULAR,
        color: Colors.orange,
        marginRight: '10%'
    },
    DetailsView: {
        backgroundColor: '#FFFFFF',
        width: '85%',
        alignSelf: 'center',
        height: 150,
        borderRadius: 20,
        marginTop: '5%'
    },
    NameStyle: {
        fontSize: 17,
        fontFamily: theme.MEDIUM,
        marginLeft: '10%',
        marginTop: '7%',
    },
    DetailsStyle: {
        fontWeight: 400,
        fontSize: 15,
        marginLeft: '10%',
        marginTop:'3%',
        marginBottom:'2%'

    },
    NumberStyle: {
        fontWeight: 400,
        fontSize: 15,
        marginLeft: '10%',
        marginTop:'4%'

    },
    BorderLineStyle:{
        height: 1,
        backgroundColor: '#d3d3d3',
        width:'80%',
        alignSelf:'center',
        

    },
    Deliverymethod:{
        fontFamily: theme.SEMIBOLD,
        fontSize: 17,
        marginLeft:'11%',
        marginTop:'7%'

    },
    RadioButtonsView:{
        backgroundColor:'white',
        width:305,
        height:145,
        borderRadius:20,
        alignSelf:'center',
        marginTop:'3%',

    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        elevation:0
    },
    radioButtonWrapper: {
        marginRight: 20,
        marginTop:'4%'
    
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10,
        top:4

    },
    radioInnerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    label: {
        fontSize: 17,
        color: 'black',
        fontFamily:theme.REGULAR,
        top:6,
        marginTop:'2%'

    },
    breakLine: {
        height: 1,
        backgroundColor: '#d3d3d3',
        width:'70%',
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
})
export default Styles
