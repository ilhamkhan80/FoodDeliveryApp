import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from '../Cart/Style';
import { SwipeListView } from 'react-native-swipe-list-view';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart,removeCompletelyFromCart } from '../Slices/cartSlice';
import { addToFavourite } from '../Slices/favouriteSlice';
import OrderScreen from '../OrderScreen/Index';

const Cart = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart.items);

    const handleDecrease = (item) => {
    dispatch(removeFromCart({ id: item.id }));};

    const handleAddToFavourite = (item) => {
        dispatch(addToFavourite(item));
        navigation.navigate('Like');
    };

    const handleIncrease = (item) => {
        dispatch(addToCart(item));
    };

    const handleDelete = (item) => {
        dispatch(removeCompletelyFromCart(item));
    };

    if (cartData.length === 0) {
        return <OrderScreen />;
    }

    return (
        <View style={Styles.MainView}>
            <View style={Styles.TextArrowStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={Styles.CheckOutTextStyle}>Cart</Text>
            </View>

            <SwipeListView
                data={cartData}
                renderItem={({ item }) => {
                    return (
                        <View style={Styles.ViewStyle}>
                            <View style={Styles.TextImageStyle}>
                                <Image style={Styles.ImageStyle} source={{ uri: item.image }} />
                                <View style={Styles.NamePriceStyle}>
                                    <Text style={Styles.ItemsName}>{item.name}</Text>
                                    <View style={Styles.PriceButtonStyle}>
                                        <Text style={Styles.Itemsprice}>{item.price}</Text>
                                        <View style={Styles.ButtonStyle}>
                                            <View style={Styles.itemsStyle}>
                                                <TouchableOpacity onPress={() => handleDecrease(item)}>
                                                    <Text style={Styles.TextStyle}>-</Text>
                                                </TouchableOpacity>
                                                <Text style={Styles.TextStyle}>{item.quantity}</Text>
                                                <TouchableOpacity onPress={() => handleIncrease(item)}>
                                                    <Text style={Styles.TextStyle}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
                renderHiddenItem={({ item }) => (
                    <View style={Styles.HiddenItemsStyle}>
                        <View style={Styles.LikeStyle}>
                            <TouchableOpacity onPress={() => handleAddToFavourite(item)}>
                                <Image style={Styles.LikeImageStyle} source={require('../../images/like.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={Styles.Dustbean}>
                            <TouchableOpacity onPress={() =>handleDelete(item)}>
                                <Image style={Styles.deleteImageStyle} source={require('../../images/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                leftOpenValue={85}
                rightOpenValue={-85}
            />

            <View>
                <CustomButton
                    tittle="Complete order"
                    onPress={() => navigation.navigate('PaymentScreen')}
                    customStyle={Styles.CustomButtonStyle}
                />
            </View>
        </View>
    );
};

export default Cart;
