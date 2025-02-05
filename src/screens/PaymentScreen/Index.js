import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import Styles from '../PaymentScreen/Style';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import theme from '../../utils/Constants';
import Colors from '../../themes/Colors';

const PaymentScreen = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const radioButtons = [
        { id: '1', label: 'Card', image: require('../../images/card.png'), backgroundColor: '#F47B0A' },
        { id: '2', label: 'Bank account', image: require('../../images/bank.png'), backgroundColor: '#EB4796' },
    ];

    const Buttons = [
        { id: '3', name: 'Door delivery', backgroundColor: '#F47B0A' },
        { id: '4', name: 'Pick up', backgroundColor: '#F47B0A' },
    ];

    return (
        <ScrollView style={Styles.MainView}>
            <View style={Styles.TextArrowStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={Styles.CheckOutTextStyle}>CheckOut</Text>
            </View>

            <Text style={Styles.DelivaryTextStyle}>Payment</Text>
            <Text style={Styles.PaymentStyle}>Payment method</Text>

            <View style={Styles.RadioButtonsView}>
                {radioButtons.map((radio, index) => (
                    <React.Fragment key={radio.id}>
                        <TouchableOpacity
                            style={[
                                Styles.radioContainer,
                                { borderColor: selectedId === radio.id ? radio.backgroundColor : '#d3d3d3' },
                            ]}
                            activeOpacity={1}
                            onPress={() => setSelectedId(radio.id)}
                        >
                            <View style={Styles.radioButtonWrapper}>
                                <View
                                    style={[
                                        Styles.radioCircle,
                                        { borderColor: selectedId === radio.id ? radio.backgroundColor : '#d3d3d3' },
                                    ]}
                                >
                                    {selectedId === radio.id && (
                                        <View style={[Styles.radioInnerCircle, { backgroundColor: radio.backgroundColor }]} />
                                    )}
                                </View>
                            </View>
                            <View style={[Styles.imageWrapper, { backgroundColor: radio.backgroundColor }]}>
                                <Image source={radio.image} style={Styles.image} resizeMode="contain" />
                            </View>
                            <Text style={Styles.label}>{radio.label}</Text>
                        </TouchableOpacity>
                        {index < radioButtons.length - 1 && <View style={Styles.breakLine} />}
                    </React.Fragment>
                ))}
            </View>

            <Text style={Styles.PaymentStyle}>Delivery method.</Text>

            <View style={Styles.RadioButtonsView1}>
                {Buttons.map((radio, index) => (
                    <React.Fragment key={radio.id}>
                        <TouchableOpacity
                            style={[
                                Styles.radioContainer1,
                                { borderColor: selectedName === radio.id ? radio.backgroundColor : '#d3d3d3' },
                            ]}
                            activeOpacity={1}
                            onPress={() => setSelectedName(radio.id)}
                        >
                            <View style={Styles.radioButtonWrapper1}>
                                <View
                                    style={[
                                        Styles.radioCircle1,
                                        { borderColor: selectedName === radio.id ? radio.backgroundColor : '#d3d3d3' },
                                    ]}
                                >
                                    {selectedName === radio.id && (
                                        <View style={[Styles.radioInnerCircle, { backgroundColor: radio.backgroundColor }]} />
                                    )}
                                </View>
                            </View>
                            <Text style={Styles.label1}>{radio.name}</Text>
                        </TouchableOpacity>
                        {index < Buttons.length - 1 && <View style={Styles.breakLine} />}
                    </React.Fragment>
                ))}
            </View>

            <View style={Styles.PaymentView}>
                <Text style={Styles.TotalTextStyle}>Total</Text>
                <Text style={Styles.TotalAmount}>23,000</Text>
            </View>
            <View>
                <CustomButton
                    tittle="Proceed to payment"
                    onPress={() => setModalVisible(true)}
                    customStyle={Styles.ButtonStyle}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={Styles.ModalOverlay}>
                    <View style={Styles.ModalContainer}>
                        <View style={Styles.ModalStyle}>
                            <Text style={Styles.ModalTitle}>Please note</Text>
                        </View>


                        <View style={Styles.DeliveryOption}>
                            <Text style={Styles.DeliveryTitle}>DELIVERY TO MAINLAND</Text>
                            <Text style={Styles.DeliveryPrice2}>N1000 - N2000</Text>
                        </View>

                        <View style={Styles.Divider} />

                        <View style={Styles.DeliveryOption}>
                            <Text style={Styles.DeliveryTitle2}>DELIVERY TO ISLAND</Text>
                            <Text style={Styles.DeliveryPrice}>N2000 - N3000</Text>
                        </View>


                        <View style={Styles.ModalButtons}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={Styles.CancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={Styles.ProceedButton}
                                onPress={() => {
                                    setModalVisible(false);
                                    navigation.navigate('CheckOut');
                                }}
                            >
                                <Text style={Styles.ProceedText}>Proceed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
