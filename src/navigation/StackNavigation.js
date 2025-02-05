import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Splash from '../screens/Splash/Index';
import Login from '../screens/Login/Index';
import BottomNavigation from '../navigation/BottomNavigation';
import OrderScreen from '../screens/OrderScreen/Index';
import DrawerNavigation from '../navigation/DrawerNavigation';
import ItemsScreen from '../screens/ItemsScreen/Index';
import CheckOut from '../screens/CheckOut/Index';
import PaymentScreen from '../screens/PaymentScreen/Index';
import Cart from '../screens/Cart/Index';
import DetailsScreen from '../screens/DetailsScreen/Index';
import PersonalDetails from '../screens/PersonalDetails/Index';
import WifiScreen from '../screens/WifiScreen/Index';
import Like from '../BottomScreens/Like';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isConnected ? (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
            <Stack.Screen name="Like" component={Like}/>
          </>
        ) : (
          <Stack.Screen name="WifiScreen" component={WifiScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
