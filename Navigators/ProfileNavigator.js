import ProfileScreen from '../Screens/ProfileScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ProfileNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Login-Screen'
                component={LoginScreen}
                options={{
                    // headerShown : false,
                }}
            />
            <Stack.Screen 
                name='Sign-Up-Screen'
                component={SignUpScreen}
                options={{
                    headerShown : false,
                }}
            />
              <Stack.Screen 
                name='Profile-Screen'
                component={ProfileScreen}
                options={{
                    headerShown : false,
                }}
            />
        </Stack.Navigator>

    )

}

export default ProfileNavigator;