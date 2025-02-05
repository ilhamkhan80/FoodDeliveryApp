import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../Splash/Style'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
const Splash = () => {
  const navigation=useNavigation()
  return (
    <View>
        <ImageBackground style={Style.ImageStyle}source={require('../../images/Splash.png')}>
        <CustomButton onPress={()=>navigation.navigate('Login')} tittle='Get starteed' customstyle={Style.ButtonStyle} customStyle={Style.customStyle} />

        </ImageBackground>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})