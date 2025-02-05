import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import Styles from '../Login/Style';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [steps, setSteps] = useState("Login");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const renderDetails = () => {
        switch (steps) {
            case "Login":
                return (
                    <View>
                        <View style={Styles.LoginView}>
                            <Text style={Styles.EmailAddress}>
                                Email address
                            </Text>
                            <CustomInput
                                value={loginEmail}
                                onChangeText={setLoginEmail} />
                            <View style={Styles.BrakeLine} />
                            <Text style={Styles.PasswordStyle}>
                                Password
                            </Text>
                            <CustomInput
                                value={loginPassword}
                                onChangeText={setLoginPassword}
                                secureTextEntry={!isPasswordVisible}
                                image={true}
                                imageSource={isPasswordVisible? require("../../images/eye.png"):require('../../images/eyeoff.png')}
                                onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                            />

                            <View style={Styles.BrakeLine} />
                        </View>
                        <TouchableOpacity>
                            <Text style={Styles.PasscodeStyle}>Forgot passcode?</Text>
                        </TouchableOpacity>
                        <CustomButton
                            value={signUpPassword}
                            onChangeText={setSignUpPassword}
                            onPress={() => navigation.navigate("Drawer")}
                            customStyle={Styles.LoginButton}
                            tittle='Login'
                            customstyle={Styles.ButtonText} />
                    </View>
                );
            case "SignUP":
                return (
                    <View>
                        <View style={Styles.LoginView}>
                            <Text style={Styles.EmailAddress}>
                                Email address
                            </Text>
                            <CustomInput
                                value={signUpEmail}
                                onChangeText={setSignUpEmail}
                            />
                            <View style={Styles.BrakeLine} />

                            <Text style={Styles.PasswordStyle}>
                                Password
                            </Text>
                            <CustomInput
                                secureTextEntry={!isPasswordVisible}
                                image={true}
                                imageSource={isPasswordVisible? require("../../images/eye.png"):require('../../images/eyeoff.png')}
                                onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)} />
                            <View style={Styles.BrakeLine} />
                        </View>
                        <CustomButton
                            onPress={() => navigation.navigate("Drawer")}
                            customStyle={Styles.SignUpButton}
                            tittle='SignUp'
                            customstyle={Styles.ButtonText} />
                    </View>
                );
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, }}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={Styles.MainView}>
                    <View style={Styles.ImageView}>
                        <Image style={Styles.ImageStyle} source={require('../../images/cheif.png')} />
                        <View style={Styles.ButtonStyle}>
                            <View style={steps === "Login" ? Styles.ActiveView : null}>
                                <TouchableOpacity onPress={() => setSteps("Login")}>
                                    <Text style={steps === "Login" ? Styles.ActiveLoginText : Styles.InactiveLoginText}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={steps === "SignUP" ? Styles.ActiveView : null}>
                                <TouchableOpacity onPress={() => setSteps("SignUP")}>
                                    <Text style={steps === "SignUP" ? Styles.ActiveSignUpText : Styles.InactiveSignUpText}>
                                        Sign-up
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {renderDetails()}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({});
