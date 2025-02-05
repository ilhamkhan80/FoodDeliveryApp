import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Like from '../BottomScreens/Like';
import User from '../BottomScreens/User';
import Histroy from '../BottomScreens/Histroy';
import Colors from '../themes/Colors';
import HomeScreen from '../screens/HomeScreen/Index'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen/Index';
import MyProfile from '../screens/MyProfile/Index';
const BottomNavigation = () => {
  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false, 
         tabBarStyle:{backgroundColor:'#F2F2F2',borderColor:'#F2F2F2',elevation:0}
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={[
                  { width: 45, height: 45,top:5},
                  { tintColor: focused ? Colors.orange : Colors.gray },
                ]}
                source={require('../images/home.png')}
              />
            </View>
          ),
        }}
      />

      <Bottom.Screen
        name="Like"
        component={Like}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={[
                  { width: 20, height: 20, },
                  { tintColor: focused ? Colors.orange : Colors.gray },
                ]}
                source={require('../images/heart.png')}
              />
            </View>
          ),
        }}
      />

      <Bottom.Screen
        name="User"
        component={MyProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={[
                  {  width: 20, height: 20 },
                  { tintColor: focused ? Colors.orange : Colors.gray },
                ]}
                source={require('../images/user.png')}
              />
            </View>
          ),
        }}
      />

      <Bottom.Screen
        name="Histroy"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
         
              <Image
                style={[
                  { width: 22, height: 22 },
                  { tintColor: focused ? Colors.orange : Colors.black },
                ]}
                source={require('../images/history.png')}
              />
            </View>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
