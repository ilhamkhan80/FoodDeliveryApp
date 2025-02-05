import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../ItemsNotFound/Style'


const ItemsNotFound = () => {
  return (
    <View>
        <Image style={Styles.Image}source={require('../../images/search2.png')}/>
      <Text style={Styles.ItemsText}>Item not found</Text>
      <Text style={Styles.TextStyle}>Try searching the item with{"\n"}a different keyword.</Text>
    </View>
  )
}

export default ItemsNotFound

const styles = StyleSheet.create({})