import { StyleSheet, View, Image, Share, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { COLOR } from '../../enums/StyleGuide';
import theme from '../utils/Constants';
import Styles from '../screens/Splash/Style';
import MyOffers from '../screens/MyOffers/Index';

const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                showsVerticalScrollIndicator={false} {...props}
                contentContainerStyle={{ paddingTop: 0, }}>
                <View style={styles.itemList}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        label="orders"
                        labelStyle={{
                            color:'white'
                        }}
                        icon={({ focused, size }) => (
                            <Image source={require('../images/orders.png')} style={{ height: 26, width: 26 }} />
                        )}

                    />
                    {/* <DrawerItem  label="offer and promo"
                       component={MyOffers}
                        labelStyle={{
                            color:'white'
                        }}
                        icon={({ focused, size }) => (
                            <Image source={require('../images/offers.png')} style={{ height: 26, width: 26 }} />
                        )}/> */}
                        <DrawerItem  label="Privacy policy"
                        labelStyle={{
                            color:'white'
                        }}
                        icon={({ focused, size }) => (
                            <Image source={require('../images/privacy.png')} style={{ height: 26, width: 26,resizeMode:'contain',marginRight:2 }} />
                        )}/>
                         <DrawerItem  label="Security"
                        labelStyle={{
                            color:'white'
                        }}
                        icon={({ focused, size }) => (
                            <Image source={require('../images/security.png')} style={{ height: 20, width: 19.2}} />
                        )}/>
                </View>
                 <TouchableOpacity>
                <View style={styles.MainView}>
                <Text style={styles.FooterText}>Sign-out</Text>
                <Image source={require('../images/Arrowright.png')} style={{width:22,height:15,marginLeft:10}}/>
                </View>
                </TouchableOpacity>


            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemList: {
        paddingTop: '20%',
        marginTop:'10%'
    },
    FooterText: {
        fontSize: 17,
        fontFamily:theme.BOLD,
        color: 'white',
    },
    MainView:{
    flexDirection:'row',
    alignItems:'center',
    paddingTop: '90%',
    marginTop:'10%',
    marginLeft:'10%', 

    }
})