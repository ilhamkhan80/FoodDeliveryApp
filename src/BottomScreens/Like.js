import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import theme from '../utils/Constants';
import Colors from '../themes/Colors';
const Like = () => {
    const favouriteItems = useSelector((state) => state.favourite.items);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favourite Items</Text>

            <FlatList
                data={favouriteItems}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.ViewStyle}>
                      <View style={styles.TextImageStyle}>
                        <Image source={{ uri: item.image }} style={styles.ImageStyle} />
                        <View style={styles.NamePriceStyle}>
                        <Text style={styles.ItemsName}>{item.name}</Text>
                        <View style={styles.PriceButtonStyle}>
                        <Text style={styles.Itemsprice}>#{item.price}</Text>

                          </View>
                        </View>

                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Like;

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 20,
      backgroundColor:'#F5F5F8'
    },
    title: { 
      fontSize: 25, 
      fontWeight: 'bold', 
      marginBottom: 10 ,
      textAlign:'center'
    },
    ViewStyle:{
      width:'90%',
      backgroundColor:'white',
      borderRadius:20,
      height:102,
      alignSelf:'center',
      marginTop:'5%'
  },    
  ImageStyle:{
    width:100,
    height:100,

},
  TextImageStyle: {
    flexDirection: 'row', 
   
},
NamePriceStyle:{
  flexDirection:'column',
  marginTop:'5%'
},
ItemsName:{
  fontFamily:theme.SEMIBOLD,
  fontSize:17,  
  marginTop:'5%',
},
PriceButtonStyle:{
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  
},
Itemsprice:{
  fontFamily:theme.SEMIBOLD,
  fontSize:15,
  color:Colors.orange,
  marginLeft:'10%'
},
});
