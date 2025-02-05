import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Colors from '../themes/Colors'
import BottomNavigation from './BottomNavigation'
import CustomDrawer from '../Components/CustomDrawer'
import MyOffers from '../screens/MyOffers/Index'
const DrawerNavigation = () => {
const Drawer=createDrawerNavigator()
  return (
<Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />}
 drawerType='slide'
 screenOptions={{ headerShown:false,
    drawerActiveBackgroundColor:'transparent',
    drawerInactiveBackgroundColor:'transparent',
    drawerActiveTintColor:'white',
    drawerInactiveTintColor:'white',
    overlayColor:'transparent',
    drawerStyle:{
    backgroundColor:Colors.orange,},
  

     }}>
      <Drawer.Screen name="Profile" component={BottomNavigation}
      options={{drawerIcon:({focused,size})=>(
        <Image source={require('../images/profile1.png')}style={{ height: 24, width: 24, resizeMode: 'contain' }} />
      )}} />
      {/* <Drawer.Screen name='orders' component={Orders}
      options={{drawerIcon:({focused,size})=>(
        <Image source={require('../images/orders.png')} style={{ height: 26, width: 26, resizeMode: 'contain' }}/>
      )}}/>
     <Drawer.Screen name='offer and promo' component={Offerandpromo}options={{drawerIcon:({focused,size})=>(
      <Image source={require('../images/offers.png')} style={{ height: 24, width: 24, resizeMode: 'contain' }}/>
    )}} />
      <Drawer.Screen name='Privacy policy' component={Privacypolicy}options={{drawerIcon:({focused,size})=>(
        <Image source={require('../images/privacy.png')} style={{ height: 24, width: 24, resizeMode: 'contain' }}/>
      )}}/> */}
      {/* <Drawer.Screen name='Security' component={Security}options={{drawerIcon:({focused,size})=>(
        <Image source={require('../images/security.png')} style={{ height: 20, width: 19.2, resizeMode: 'contain' }}/>
      )}}/> */}
      <Drawer.Screen name='offer and promo' component={MyOffers}options={{drawerIcon:({focused,size})=>(
      <Image source={require('../images/offers.png')} style={{ height: 24, width: 24, resizeMode: 'contain' }}/>
    )}} />
    </Drawer.Navigator>
     

  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})