import { useState, useEffect } from 'react';

import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

import UserButton from '../Components/UserButton';
import UserInput from '../Components/UserInput';
import { fontConstants, colorConstants, sizeConstants } from '../Constants/StyleConstants'

import { useNavigation } from '@react-navigation/native';


function LoginScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState()
    const [password , setPassword] = useState()

    return (
        <View style={styles.LoginContainer}>
            <View style={styles.mainContent}>
                <Text style={styles.LoginText}>Login</Text>
                <View style={styles.inputBox}>
                    <UserInput
                        style={styles.InputStyle}
                        textInputConfig={{
                            onChangeText : (emailInput) => {
                                setEmail(emailInput)
                            },
                            placeholder: "Email",
                            value : email
                        }}
                    />
                    <UserInput
                        textInputConfig={{
                            onChangeText : (emailInput) => {
                                setPassword(emailInput)
                            },
                            placeholder: "Password",
                            value : password
                        }}
                    />
                </View>
                <UserButton
                onPress={() => {console.log(email, password)}}
                >Log In</UserButton>
            </View>
            <View style={styles.NoAccount}>
                <Pressable
                onPress={() => {
                    navigation.navigate('Sign-Up-Screen')
                }}
                >
                    <Text style={styles.NoAccountText}>Dont Have An Account ? <Text>Join</Text></Text>
                </Pressable>
            </View>
        </View>

    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        padding: sizeConstants.paddingRegular,
        backgroundColor: 'black'
    },
    mainContent: {
        height: '50%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    LoginText: {
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
        marginVertical : 25,
        padding : 12,
        borderRadius : 6,
        backgroundColor: 'white'
    },
    NoAccountText: {
        textAlign : 'center',
        fontSize : fontConstants.headingSmall,
        fontWeight: fontConstants.weightBold,
        color: 'black'
    }
})

