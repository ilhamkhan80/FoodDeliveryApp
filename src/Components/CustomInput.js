import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from '../themes/Icons'
import theme from '../utils/Constants'

const CustomInput = (props) => {

  return (
    <View style={[styles.buttonstyle, props.customstyle]}>

      <TextInput placeholder={props.placeholder}
        placeholderTextColor='black'
        style={{ width: '100%', fontSize: 17, fontFamily: theme.SEMIBOLD }}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText} />


      {props.image && (
        <TouchableOpacity onPress={props.onPressIcon}>
          <Image source={props.imageSource} 
      style={[{ width: 20, height: 20, tintColor: '#FA4A0C' ,right:'80%'}, props.imagestyle]} />
      </TouchableOpacity>
      )}

    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  buttonstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  }
})