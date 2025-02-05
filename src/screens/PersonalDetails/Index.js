import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Styles from '../PersonalDetails/Style'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const PersonalDetails = () => {
    const navigation=useNavigation()
  return (
              <ScrollView>
                <TouchableOpacity onPress={navigation.goBack}>
                <Image style={Styles.ArrowStyle} source={require('../../images/leftarrow.png')} />
                </TouchableOpacity>
                <View>
                <Text style={Styles.HistoryTextStyle}>
                    My profile
                </Text>
                </View>
            <View style={Styles.DetailsStyle}>
                <Text style={Styles.InformationStyle}>
                Personal details 
                </Text>
                <TouchableOpacity >
                <Text style={Styles.changeText}>change</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.CardStyle}>
                <Image style={Styles.ImageStyle} source={require('../../images/Profile.png')} />
                <View>
                    <Text style={Styles.TextStyle}>
                        Marvis Ighedosa
                    </Text>
                    <Text style={Styles.GmailStyle}>Dosamarvis@gmail.com</Text>
                    <View style={Styles.BorderLineStyle} />
                    <View style={{marginTop:'2%'}}>
                        <Text style={[Styles.GmailStyle,{marginBottom:'2%'}]}>+234 9011039271</Text>
                    </View>
                    <View style={Styles.BorderLineStyle} />

                    <View style={{ top: 10 }}>
                        <Text style={Styles.GmailStyle}>No 15 uti street off ovie{"\n"}palace road effurun delta{"\n"}state</Text>
                    </View>
                </View>
            </View>
            <View style={[Styles.OtherDetailsView,{marginTop:'8%'}]} >
                <View style={Styles.OrderStyle}>
             <Text style={Styles.OrderText}>Orders</Text>
             <TouchableOpacity>
             <Image style={Styles.leftArrowStyle} source={require('../../images/blackleft.png')}/>
             </TouchableOpacity>
             </View>
            </View>
            <View style={Styles.OtherDetailsView} >
                <View style={Styles.OrderStyle}>
             <Text style={Styles.OrderText}>Pending reviews</Text>
             <TouchableOpacity>
             <Image style={Styles.leftArrowStyle} source={require('../../images/blackleft.png')}/>
             </TouchableOpacity>             
             </View>
            </View>
            <View style={Styles.OtherDetailsView} >
                <View style={Styles.OrderStyle}>
             <Text style={Styles.OrderText}>Faq</Text>
             <TouchableOpacity>
             <Image style={Styles.leftArrowStyle} source={require('../../images/blackleft.png')}/>
             </TouchableOpacity>                   
              </View>
            </View>
            <View style={Styles.OtherDetailsView} >
                <View style={Styles.OrderStyle}>
             <Text style={Styles.OrderText}>Help</Text>
             <TouchableOpacity>
             <Image style={Styles.leftArrowStyle} source={require('../../images/blackleft.png')}/>
             </TouchableOpacity>                    
             </View>
            </View>
            <CustomButton tittle='Update' customStyle={{marginBottom:'14%',height:'9%'}}/>
    </ScrollView>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({})