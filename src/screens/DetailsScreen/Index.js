import { StyleSheet, Text, View, Image, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from '../DetailsScreen/Style';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Slices/cartSlice';

const { width } = Dimensions.get('window');

const DetailsScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch(); 
    const cartData = useSelector((state)=> state.cart.items)

    const [activeIndex, setActiveIndex] = useState(0);

    const product = [{
        id: 1,
        name: "Veggie tomato mix",
        price: 1900,
        image: "https://png.pngtree.com/png-clipart/20231018/original/pngtree-fast-foods-item-png-image_13354298.png"
    },
]

    const handleAddToCart = () => {
        console.log("line 26::", product, product[0])
        dispatch(addToCart(product[0])); 
        console.log("line 28:: ", cartData)
        navigation.navigate('Cart'); 
    };

    const items = [
        { id: 1, image: require('../../images/salad.png') },
        { id: 2, image: require('../../images/rice.png') },
        { id: 3, image: require('../../images/salad.png') },
        { id: 4, image: require('../../images/salad.png') },
    ];

    const onScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    return (
        <ScrollView style={Styles.MainView}>
            <View style={Styles.MainArow}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <Image style={Styles.LikeStyle} source={require('../../images/heart2.png')} />
            </View>

            <View>
                <FlatList
                    data={items}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={10}
                    renderItem={({ item }) => (
                        <View>
                            <Image style={Styles.SaladStyle} source={item.image} />
                        </View>
                    )}
                />
                <View style={Styles.pagination}>
                    {items.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                Styles.dot,
                                { backgroundColor: index === activeIndex ? '#FF5733' : '#D3D3D3' },
                            ]}
                        />
                    ))}
                </View>
            </View>

            <View style={Styles.ItemsDetails}>
                <Text style={Styles.VeggieText}>Veggie tomato mix</Text>
                <Text style={Styles.PriceStyle}>N1,900</Text>
            </View>

            <View>
                <Text style={Styles.DelivaryText}>Delivery info</Text>
                <Text style={Styles.DiscriptionText}>
                    Delivered between Monday and{"\n"}Thursday 20 from 8pm to 9:30 pm
                </Text>
            </View>

            <View style={Styles.DiscriptionStyle}>
                <Text style={Styles.DelivaryText}>Return policy</Text>
                <Text style={Styles.DiscriptionText}>
                    All our foods are double checked before{"\n"}leaving our stores so if you{"\n"}
                    found a broken food please contact our{"\n"}hotline immediately.
                </Text>
            </View>

            <CustomButton
                tittle='Add to cart'
                onPress={handleAddToCart} 
                customStyle={{ marginBottom: '14%', height: '9%' }}
            />
        </ScrollView>
    );
};

export default DetailsScreen;
