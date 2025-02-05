import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../themes/Colors'
import theme from '../utils/Constants'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.border, props.customStyle]} onPress={props.onPress}>
      <Text style={[styles.textstyle,props.customstyle]}>{props.tittle}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  border: {
    backgroundColor: Colors.orange,
    borderRadius: 30,
    padding: 5,
    justifyContent:'center',
    alignSelf:'center',
    width: '75%',
    height:'8%',
    marginTop: 30,
    marginBottom:20
},
textstyle: {
    color: 'white',
    alignSelf: 'center',
    textAlign:'center',
    fontFamily:theme.SEMIBOLD
  
},

})