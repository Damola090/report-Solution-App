import { useState, useEffect, useContext } from 'react';

import { View, Text, TextInput, Alert, StyleSheet, Pressable } from 'react-native';

import UserButton from '../Components/UserButton';
import UserInput from '../Components/UserInput';
import { fontConstants, colorConstants, sizeConstants } from '../Constants/StyleConstants'

import ProfileScreen from './ProfileScreen';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../Store/Context';

function LoginScreen() {

    const navigation = useNavigation();

    const { Auth, AuthenticateExistingUser } = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (Auth.isAuthenticated === true) {
            navigation.navigate('Home-Tab')
        } else if (Auth.invalid === true) {
            Alert.alert("Invalid Creadentials, Please Put in Your Email or Password")
        }
    }, [Auth, navigation, Alert])

    const submitHandler = () => {

        if (!email || !password) {
            Alert.alert("Please Put in Your Email or Password")
        }

        if (email && password) {

            AuthenticateExistingUser(email, password)
            setEmail('')
            setPassword('')
        }
    }

    return (
        <>
            <View style={styles.LoginContainer}>
                <View style={styles.mainContent}>
                    <Text style={styles.LoginText}>Login</Text>
                    <View style={styles.inputBox}>
                        <UserInput
                            // style={styles.InputStyle}
                            innerStyle={styles.InputStyle}
                            textInputConfig={{
                                onChangeText: (emailInput) => {
                                    setEmail(emailInput)
                                },
                                placeholder: "Email",
                                value: email
                            }}
                        />
                        <UserInput
                            innerStyle={styles.InputStyle}
                            textInputConfig={{
                                onChangeText: (emailInput) => {
                                    setPassword(emailInput)
                                },
                                placeholder: "Password",
                                value: password
                            }}
                        />
                    </View>
                    <UserButton
                        onPress={submitHandler}
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
        </>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        padding: sizeConstants.paddingRegular,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center'
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
        backgroundColor : 'white'

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

