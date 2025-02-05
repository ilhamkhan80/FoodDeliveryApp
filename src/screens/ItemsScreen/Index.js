import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../Components/CustomInput'
import Styles from '../ItemsScreen/Style';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
import ItemsNotFound from '../ItemsNotFound/Index';

const ItemsScreen = () => {
    const [searchText, setSearchText] = useState('');

    const navigation = useNavigation()
    const item = [{
        image: require('../../images/salad.png'),
        tittle: 'Veggie',
        tittle2: 'tomato mix',
        price: 'N1,900',

    },
    {
        image: require('../../images/rice.png'),
        tittle: 'Egg and',
        tittle2: ' cucmber...',
        price: 'N1,900',


    },
    {
        image: require('../../images/greensalad.png'),
        tittle: 'Veggie',
        tittle2: 'tomato mix',
        price: 'N1,900',


    },
    {
        image: require('../../images/eggs.png'),
        tittle: 'Veggie',
        tittle2: 'tomato mix',
        price: 'N1,900',


    },
    {
        image: require('../../images/salad.png'),
        tittle: 'Veggie',
        tittle2: 'tomato mix',
        price: 'N1,900',

    },
    {
        image: require('../../images/rice.png'),
        tittle: 'Egg and',
        tittle2: ' cucmber...',
        price: 'N1,900',


    },
    {
        image: require('../../images/greensalad.png'),
        tittle: 'Veggie',
        tittle2: 'tomato mix',
        price: 'N1,900',


    },
    {
        image: require('../../images/eggs.png'),
        tittle: 'Veggie',
        tittle2: 'tomato mix',
        price: 'N1,900',


    },


    ]
    const filteredData = item.filter((item) =>
        item.tittle.toLowerCase().includes(searchText.toLowerCase()) ||
        item.tittle2.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View>
            <View style={Styles.ArrowImageStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image source={require('../../images/leftarrow.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <CustomInput customstyle={{ width: '80%', borderRadius: 30, marginLeft: 10 }} placeholder='Search'
                    value={searchText}
                    onChangeText={setSearchText} />
            </View>
            <View style={Styles.Items}>
                {filteredData.length > 0 ? (
                    <>
                    <Text style={Styles.ItemsStyle}>Found  6 results</Text>

                        <MasonryList data={filteredData}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            refreshing={false}

                            renderItem={({ item, index }) =>
                                <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={{ position: 'relative' }} >
                                    <View style={{ marginTop: index % 2 === 1 ? 20 : 0 }}>

                                        <Image style={Styles.ImagesStyle} source={item.image} />
                                        <View style={Styles.CardStyle}>
                                            <View style={Styles.ItemsTextStyle}>
                                                <Text style={Styles.VeggieTextStyle}>
                                                    {item.tittle}
                                                </Text>
                                                <Text style={Styles.DiscriptionStyle}>{item.tittle2}</Text>
                                                <Text style={Styles.PriceStyle}>{item.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            }

                        />
                    </>
                ) : (
                    <ItemsNotFound />
                )}

            </View>

        </View>
    )
}

export default ItemsScreen

const styles = StyleSheet.create({})