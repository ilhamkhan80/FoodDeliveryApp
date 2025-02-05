import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({
    ImageStyle:{
        alignSelf:'center',
        width:150,
        height:162,
        marginTop:'20%',
        marginLeft:'4%'
    },
    ImageView:{
        width:'100%',
        height:'45%',
        backgroundColor:'white',
        borderRadius:30,
        elevation:5,
        shadowColor:'white',
        
    },
    MainView:{
        
        backgroundColor:Colors.backgroundcolor,
    },
    ButtonStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'3%',
        bottom:0,
        position:'absolute',
        width: '80%',
        height:'10%'
    },
    ActiveLoginText:{
      fontFamily:theme.SEMIBOLD,
      fontSize:18,
      alignSelf:'center',

    },
    ActiveSignUpText:{
      fontFamily:theme.SEMIBOLD,
      fontSize:18,
      alignSelf:'center',
    
    },
    InactiveLoginText:{
        fontFamily:theme.SEMIBOLD,
        fontSize:18,
        marginLeft:60,
    },
    InactiveSignUpText:{
        fontFamily:theme.SEMIBOLD,
        fontSize:18,
        marginRight:10,

    },
    
    LoginView:{
        paddingHorizontal:'12%',
        marginTop:50,
    },
    EmailAddress:{
        color:Colors.gray,
        fontSize:15,
        fontFamily:theme.SEMIBOLD,
    },
    BrakeLine:{
        borderWidth:1,
        width:'100%',
        borderColor:Colors.gray,
        alignSelf:'center'
    },
    PasswordStyle:{
        color:Colors.gray,
        fontSize:15,
        fontFamily:theme.SEMIBOLD,
        marginTop:20
    },
    LoginButton:{
        height:'17%',
          
    },
    SignUpButton:
    {
        height:'18%',
         top:'10%'
      
    },

    ButtonText:{
        fontSize:17,
        fontFamily:theme.SEMIBOLD,
        color:'white',
        
    },
    PasscodeStyle:{
        color:Colors.orange,
        fontSize:17,
        fontFamily:theme.SEMIBOLD,
        marginTop:20,
        paddingHorizontal:'12%'
    },
    ActiveView:{ 
        borderBottomWidth: 3,
        marginLeft:30,
        width:'35%',
        borderBottomColor:Colors.orange,
        
        
        
     }

    
})
export default Styles
