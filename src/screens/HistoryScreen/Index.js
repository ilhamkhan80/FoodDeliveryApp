import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../HistoryScreen/Style'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const HistoryScreen = () => {
    const navigation=useNavigation()
    return (
        <View>
            <View style={Styles.TextArrowStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <View style={{marginLeft:'20%'}}>
                <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </View>
                </TouchableOpacity>
                <Text style={Styles.HistoryTextStyle}>
                    History
                </Text>
            </View>
            <View>
                <Image style={Styles.HistroyImageStyle} source={require('../../images/Histroy.png')} />
            </View>
            <View>
                <Text style={Styles.HistroyText}>
                    No history yet
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

export default HistoryScreen

const styles = StyleSheet.create({})