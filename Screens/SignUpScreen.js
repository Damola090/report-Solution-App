import { useState, useEffect } from 'react';

import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

import UserButton from '../Components/UserButton';
import UserInput from '../Components/UserInput';
import { fontConstants, colorConstants, sizeConstants } from '../Constants/StyleConstants'

import { useNavigation } from '@react-navigation/native';


function SignUpScreen() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [location, setLocation] = useState()


    return (
        <View style={styles.SignUpContainer}>
            <View style={styles.mainContent}>
                <Text style={styles.SignUpText}>Sign Up</Text>
                <View style={styles.inputBox}>
                <UserInput
                        style={styles.InputStyle}
                        textInputConfig={{
                            onChangeText: (nameInput) => {
                                setName(nameInput)
                            },
                            placeholder: "Name",
                            value: name
                        }}
                    />
                    <UserInput
                        style={styles.InputStyle}
                        textInputConfig={{
                            onChangeText: (emailInput) => {
                                setEmail(emailInput)
                            },
                            placeholder: "Email",
                            value: email
                        }}
                    />
                    <UserInput
                        textInputConfig={{
                            onChangeText: (passwordInput) => {
                                setPassword(passwordInput)
                            },
                            placeholder: "Password",
                            value: password
                        }}
                    />
                    <UserInput
                        style={styles.InputStyle}
                        textInputConfig={{
                            onChangeText: (locationInput) => {
                                setLocation(locationInput)
                            },
                            placeholder: "Location",
                            value: location
                        }}
                    />
                </View>
                <UserButton
                    onPress={() => { console.log(email, password) }}
                >Sign Up</UserButton>
            </View>
            <View style={styles.NoAccount}>
                <Pressable
                    // onPress={() => {
                    //     navigation.navigate('Sign-Up-Screen')
                    // }}
                >
                    <Text style={styles.NoAccountText}>Already Have An Account ? <Text> Login</Text></Text>
                </Pressable>
            </View>
        </View>

    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    SignUpContainer: {
        flex: 1,
        padding: sizeConstants.paddingRegular,
        backgroundColor: 'black'
    },
    mainContent: {
        height: '70%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    SignUpText: {
        // fontSize : fontConstants.headingBig,
        fontSize: 45,
        fontWeight: fontConstants.BigWeight,
        color: colorConstants.backgroundLight
    },
    inputBox: {

    },
    InputStyle: {

    },
    NoAccount: {
        marginVertical: 25,
        padding: 12,
        borderRadius: 6,
        backgroundColor: 'white'
    },
    NoAccountText: {
        textAlign: 'center',
        fontSize: fontConstants.headingSmall,
        fontWeight: fontConstants.weightBold,
        color: 'black'
    }
})

