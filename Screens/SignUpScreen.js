import { useState, useEffect, useContext } from 'react';

import { View, Text, TextInput, Alert, StyleSheet, Pressable } from 'react-native';

import UserButton from '../Components/UserButton';
import UserInput from '../Components/UserInput';
import { fontConstants, colorConstants, sizeConstants } from '../Constants/StyleConstants'

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../Store/Context';

import ProfileScreen from './ProfileScreen';

function SignUpScreen() {

    const navigation = useNavigation();

    const { Auth, createNewUser } = useContext(AuthContext)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [location, setLocation] = useState()

    console.log(Auth)

    useEffect(() => {
        if (Auth.isAuthenticated === true) {
            navigation.navigate('Home-Tab')
        } else if (Auth.invalid === true) {
            Alert.alert("Invalid Creadentials, Please Put in the correct information")
        }
    }, [Auth, navigation, Alert])

    const submitHandler = () => {

        if (!email || !password || !name || !location) {
            Alert.alert("Please Put in the correct information")
        }

        if (email && password && name && location) {

            const obj = {
                email,
                password,
                name,
                location
            }

            createNewUser(obj)

            setEmail('')
            setPassword('')
            setName('')
            setLocation('')

        }
    }


    return (
        <>
            <View style={styles.SignUpContainer}>
                <View style={styles.mainContent}>
                    <Text style={styles.SignUpText}>Sign Up</Text>
                    <View style={styles.inputBox}>
                        <UserInput
                            innerStyle={styles.InputStyle}
                            textInputConfig={{
                                onChangeText: (nameInput) => {
                                    setName(nameInput)
                                },
                                placeholder: "Name",
                                value: name
                            }}
                        />
                        <UserInput
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
                                onChangeText: (passwordInput) => {
                                    setPassword(passwordInput)
                                },
                                placeholder: "Password",
                                value: password
                            }}
                        />
                        <UserInput
                            innerStyle={styles.InputStyle}
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
                        onPress={submitHandler}
                    >Sign Up</UserButton>
                </View>
                <View style={styles.NoAccount}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Login-Screen')
                        }}
                    >
                        <Text style={styles.NoAccountText}>Already Have An Account ? <Text> Login</Text></Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    SignUpContainer: {
        flex: 1,
        padding: sizeConstants.paddingRegular,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center'
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

