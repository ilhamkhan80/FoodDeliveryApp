import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Styles from '../WifiScreen/Style';
import CustomButton from '../../Components/CustomButton';

const WifiScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={Styles.MainView}>
      <Image style={Styles.Imagestyle} source={require('../../images/wifi.png')} />
      <Text style={Styles.InternatStyle}>No Internet Connection</Text>
      <Text style={Styles.DetailsStyle}>
        Your internet connection is currently{"\n"}not available. Please check or try again.
      </Text>
      <CustomButton tittle="Try Again" customStyle={Styles.ButtonStyle} />
    </View>
  );
};

export default WifiScreen;
const styles = StyleSheet.create({});
