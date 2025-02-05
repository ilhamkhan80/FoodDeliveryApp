import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import Styles from '../OrderScreen/Style'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
const OrderScreen = () => {
    const navigation=useNavigation()
    return (
        <View>
            <View style={Styles.TextArrowStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={Styles.HistoryTextStyle}>
                    Orders
                </Text>
            </View>
            <View>
                <Image style={Styles.HistroyImageStyle} source={require('../../images/order.png')} />
            </View>
            <View>
                <Text style={Styles.HistroyText}>
                    No orders yet
                </Text>
                <View>
                    <Text style={Styles.DiscriptionStyle}>Hit the orange button down</Text>
                    <Text style={Styles.DiscriptionStyle} >below to Create an order
                    </Text>
                </View>
            </View>
            <CustomButton tittle='Start odering' customStyle={Styles.ButtonStyle} />
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({})