import { useContext } from 'react'

import ProfileScreen from '../Screens/ProfileScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen'

import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../Store/Context';


const Stack = createStackNavigator();

function ProfileNavigator() {

    const { Auth } = useContext(AuthContext)

    const AuthState = Object.keys(Auth).length

    return (
        <Stack.Navigator>
            {AuthState === 0 || Auth.isAuthenticated === false ? (
                <>
                    <Stack.Screen
                        name='Login-Screen'
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='Sign-Up-Screen'
                        component={SignUpScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
            ) : (
                <Stack.Screen
                    name='Profile-Screen'
                    component={ProfileScreen}
                    options={{
                        headerTitle: 'My Profile',
                        headerTitleAlign: 'center',
                    }}
                />
            )}
        </Stack.Navigator>

    )

}

export default ProfileNavigator;