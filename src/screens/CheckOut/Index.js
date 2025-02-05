import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView} from 'react-native'
import React, { useState } from 'react'
import Styles from '../CheckOut/Style'
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const CheckOut = () => {
    const navigation=useNavigation()
    const [selectedId, setSelectedId] = useState(null);
    const radioButtons = [
        {
            id: '1',
            label: 'Door delivery',
            backgroundColor: '#F47B0A',

        },
        {
            id: '2',
            label: 'Pick up',
            backgroundColor: '#F47B0A',

        },
    ];

    return (
        <ScrollView style={Styles.MainView}>
            <View style={Styles.TextArrowStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={Styles.CheckOutTextStyle}>
                    CheckOut
                </Text>
            </View>
            <View>
                <Text style={Styles.DelivaryTextStyle}>Delivery</Text>
            </View>
            <View style={Styles.PaymentMainView}>
                <Text style={Styles.PaymentStyle}>Address details</Text>
                <Text style={Styles.ChangeTextStyle}>change</Text>
            </View>
            <View style={Styles.DetailsView}>
                <Text style={Styles.NameStyle}>Marvis Kparobo</Text>
                <View style={Styles.BorderLineStyle} />
                <Text style={Styles.DetailsStyle}>Km 5 refinery road oppsite re{"\n"}
                    public road, effurun, delta state</Text>
                <View style={Styles.BorderLineStyle} />

                <Text style={Styles.NumberStyle}>+234 9011039271</Text>
            </View>
            <View>
                <Text style={Styles.Deliverymethod}>Delivery method.</Text>
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
                            </View>
                            <Text style={Styles.label}>{radio.label}</Text>
                        </TouchableOpacity>
                        {index < radioButtons.length - 1 && (
                            <View style={Styles.breakLine} />
                        )}
                    </React.Fragment>
                ))}
            </View>
            <View style={Styles.PaymentView}>
                <Text style={Styles.TotalTextStyle}>Total</Text>
                <Text style={Styles.TotalAmount}>23,000</Text>
            </View>
            <CustomButton tittle='Proceed to payment' customStyle={Styles.ButtonStyle} />
        </ScrollView>
    )
}

export default CheckOut

const styles = StyleSheet.create({})