import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import Styles from '../MyProfile/Style'
import RadioGroup from 'react-native-radio-buttons-group';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const MyProfile = () => {
    const navigation=useNavigation()
    const [selectedId, setSelectedId] = useState(null);
    const radioButtons = [
        {
            id: '1',
            label: 'Card',
            image: require('../../images/card.png'),
            backgroundColor: '#F47B0A',
        },
        {
            id: '2',
            label: 'Bank account',
            image: require('../../images/bank.png'),
            backgroundColor: '#EB4796',
        },
        {
            id: '3',
            label: 'Paypal',
            image: require('../../images/paypal.png'),
            backgroundColor: '#0038FF',
        },
    ];

    return (
        <ScrollView>
            <View style={Styles.TextArrowStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={Styles.HistoryTextStyle}>
                    My profile
                </Text>
            </View>
            <View>
                <Text style={Styles.InformationStyle}>
                    Information
                </Text>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('PersonalDetails')} style={Styles.CardStyle}>
                <Image style={Styles.ImageStyle} source={require('../../images/Profile.png')} />
                <View>
                    <Text style={Styles.TextStyle}>
                        Marvis Ighedosa
                    </Text>
                    <Text style={Styles.GmailStyle}>dosamarvis@gmail.com</Text>
                    <View style={{ top: 10 }}>
                    <Text style={Styles.GmailStyle}>No 15 uti street off ovie palace{"\n"}road effurun delta state</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View>
                <Text style={Styles.InformationStyle}>
                    Payment Method
                </Text>
            </View>
            <View style={Styles.RadioButtonsView}>
                {radioButtons.map((radio, index) => (
                    <React.Fragment key={radio.id}>
                        <TouchableOpacity
                            style={[
                                Styles.radioContainer,
                                { borderColor: selectedId === radio.id ? radio.backgroundColor : '#d3d3d3' },
                            ]}
                            activeOpacity={1}
                            onPress={() => setSelectedId(radio.id)}>
                            <View style={Styles.radioButtonWrapper}>
                                <View
                                    style={[
                                        Styles.radioCircle,
                                        {
                                            borderColor: selectedId === radio.id ? radio.backgroundColor : '#d3d3d3',
                                        },
                                    ]}>
                                    {selectedId === radio.id && (
                                        <View style={[Styles.radioInnerCircle, { backgroundColor: radio.backgroundColor }]} />
                                    )}
                                </View>
                            </View>
                            <View
                                style={[
                                    Styles.imageWrapper,
                                    { backgroundColor: radio.backgroundColor },
                                ]}>
                                <Image source={radio.image} style={Styles.image} resizeMode="contain" />
                            </View>
                            <Text style={Styles.label}>{radio.label}</Text>
                        </TouchableOpacity>
                        {index < radioButtons.length - 1 && (
                            <View style={Styles.breakLine} />
                        )}
                    </React.Fragment>
                ))}
            </View>
            <CustomButton tittle='Updated' customStyle={Styles.ButtonStyle} />
        </ScrollView>
    )
}

export default MyProfile

const styles = StyleSheet.create({})