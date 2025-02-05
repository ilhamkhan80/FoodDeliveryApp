import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from '../HomeScreen/Style';
import Colors from '../../themes/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import DrawerSceneWrapper from '../../Components/DrawerSceneWrapper';
import ItemsNotFound from '../ItemsNotFound/Index';
import { useDispatch } from 'react-redux';
import { setRestauranet } from '../Slices/restauranetSlice';

const HomeScreen = () => {
  const { params } = useRoute();
  let item = params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestauranet({ ...item}))
    }
  })
  const [searchText, setSearchText] = useState('');
  const [steps, setSteps] = useState('Foods');
  const navigation = useNavigation();

  const data = [
    { id: 1, image: require('../../images/salad.png'), tittle: 'Veggie', tittle2: 'tomato mix', price: 'N1,900' },
    { id: 2, image: require('../../images/salad.png'), tittle: 'Veggie', tittle2: 'tomato mix', price: 'N1,900' },
    { id: 3, image: require('../../images/salad.png'), tittle: 'Veggie', tittle2: 'tomato mix', price: 'N1,900' },
    { id: 4, image: require('../../images/salad.png'), tittle: 'Veggie', tittle2: 'tomato mix', price: 'N1,900' },
  ];

  const filteredData = data.filter((item) =>
    item.tittle.toLowerCase().includes(searchText.toLowerCase()) ||
    item.tittle2.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <DrawerSceneWrapper>
      <View style={Styles.MainView}>
        <View style={Styles.ImageStyleView}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={Styles.MenuStyle} source={require('../../images/menu.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OrderScreen')}>
            <Image style={Styles.CartImageStyle} source={require('../../images/cart.png')} />
          </TouchableOpacity>
        </View>

        <View style={Styles.TextStyle}>
          <Text style={Styles.DeliciousTextStyle}>Delicious</Text>
          <Text style={[Styles.DeliciousTextStyle, { top: -10 }]}>food for you</Text>
        </View>
       
        <View style={Styles.ImageInputStyle}>
          <Image style={Styles.SearchIconStyle} source={require('../../images/search.png')} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.gray}
            style={Styles.InputStyle}
            value={searchText}
            onChangeText={setSearchText}
            clearButtonMode="always"
            autoCorrect={false}
          />
        </View>

        <View style={Styles.ListView}>
          {['Foods', 'Drinks', 'Snacks', 'Sauce'].map((category) => (
            <View key={category} style={Styles.TextView}>
              <View style={steps === category ? Styles.ActiveView : null}>
                <TouchableOpacity onPress={() => setSteps(category)}>
                  <Text style={steps === category ? Styles.FoodText : Styles.InActiveText}>
                    {category}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ItemsScreen')}>
          <Text style={Styles.SeeMoreText}>see more</Text>
        </TouchableOpacity>

        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} activeOpacity={0.5} style={{ flex: 1, margin: '2%' }}>
                <Image style={Styles.ImagesStyle} source={item.image} />
                <View style={Styles.CardStyle}>
                  <View style={Styles.ItemsTextStyle}>
                    <Text style={Styles.VeggieTextStyle}>{item.tittle}</Text>
                    <Text style={Styles.DiscriptionStyle}>{item.tittle2}</Text>
                    <Text style={Styles.PriceStyle}>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <ItemsNotFound />
        )}
      </View>
    </DrawerSceneWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
