import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Styles from '../MyOffers/Style'

const MyOffers = () => {
  return (
    <View>      
             <TouchableOpacity >
                <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity> 
                <View>
                <Text style={Styles.MyOffersStyle}>My offers</Text>
                </View>
                <View>
                    <Text style={Styles.DetailsStyle}>ohh snap!  No offers yet</Text>
                    <Text style={Styles.DiscriptionStyle}>Bella dose’t have any offers{"\n"}yet please check again.</Text>
                </View>
   </View>
  )
}

export default MyOffers

const styles = StyleSheet.create({})