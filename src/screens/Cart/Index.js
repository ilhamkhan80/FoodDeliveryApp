import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Cart/Style'
import { SwipeListView } from 'react-native-swipe-list-view';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectedCartItems, selectedCartItemsById} from '../Slices/cartSlice';
import { addToFavourite } from '../Slices/favouriteSlice';
const Cart = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
     const cartData = useSelector((state)=> state.cart.items)
     console.log("line 13:: ", cartData)
    const handleDecrease = (item) => {
        dispatch(removeFromCart({ id: item.id }));
    };
    const handleAddToFavourite = (item) => {
        dispatch(addToFavourite(item)); 
        navigation.navigate("Like");
    };
    const handleIncrease = (item) => {
        dispatch(addToCart(item)); 
    };
    const handledecrease=(item)=>{
     dispatch(removeFromCart(item))
    }
    
    const data = [{
        id: 1,
        image: require('../../images/salad.png'),
        name: 'Veggie tomato mix',
        price: '#1,900'
    },
    {
        id: 2,
        image: require('../../images/rice.png'),
        name: 'Veggie tomato mix',
        price: '#2,100'
    },
    {
        id: 3,
        image: require('../../images/salad.png'),
        name: 'Veggie tomato mix',
        price: '#1,900'
    },
    ]
    return (
        <View style={Styles.MainView}>
            <View style={Styles.TextArrowStyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={Styles.CheckOutTextStyle}>
                    Cart
                </Text>
            </View>
            <SwipeListView
  data={cartData}
  renderItem={({ item }) => {  
    console.log("line 54:: ", item); 

    return (
      <View style={Styles.ViewStyle}>
        <View style={Styles.TextImageStyle}>
          <Image style={Styles.ImageStyle} source={{uri: item.image}} />
          <View style={Styles.NamePriceStyle}>
            <Text style={Styles.ItemsName}>{item.name}</Text>
            <View style={Styles.PriceButtonStyle}>
              <Text style={Styles.Itemsprice}>{item.price}</Text>
              <View style={Styles.ButtonStyle}>
                <View style={Styles.itemsStyle}>
                  <TouchableOpacity onPress={()=>handledecrease(item)}>
                    <Text style={Styles.TextStyle}>-</Text>
                  </TouchableOpacity>
                  <Text style={Styles.TextStyle}>{item.quantity}</Text> 
                  <TouchableOpacity onPress={()=>handleIncrease(item)}>
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
  renderHiddenItem={({ item }, rowMap) => (
    <View style={Styles.HiddenItemsStyle}>
      <View style={Styles.LikeStyle}>
      <TouchableOpacity onPress={() => handleAddToFavourite(item)}>
      <Image style={Styles.LikeImageStyle} source={require('../../images/like.png')} />
        </TouchableOpacity>
      </View>
  
      <View style={Styles.Dustbean}>
        <TouchableOpacity onPress={() => handleDecrease(item)}>
          <Image style={Styles.deleteImageStyle} source={require('../../images/delete.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )}

  leftOpenValue={85}
  rightOpenValue={-85}
/>

            <View>
                <CustomButton tittle='Complete order' onPress={() => navigation.navigate('PaymentScreen')} customStyle={Styles.CustomButtonStyle} />
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})