import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()


import HomeNavigator from './HomeNavigator';
import PostScreen from '../Screens/PostScreen';
import ProfileNavigator from '../Navigators/ProfileNavigator';

import { Ionicons } from '@expo/vector-icons'

function Main () {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home-Tab' 
                component={HomeNavigator}
                options={{
                    headerShown : false,
                    tabBarIcon : ({size, color}) => ( <Ionicons name='ios-home' size={size} color={color} />)
                }}
            />
             <Tab.Screen
                name='Post-Report-Tab' 
                component={PostScreen}
                options={{
                    headerShown : false,
                    tabBarIcon :({size, color}) => ( <Ionicons name='ios-cloud-upload-sharp' size={size} color={color} />)
                }}
            />
             <Tab.Screen
                name='Auth-Tab' 
                component={ProfileNavigator}
                options={{
                    // headerShown : false,
                    tabBarIcon :({size, color}) => ( <Ionicons name='person' size={size} color={color} />)
                }}
            />
        </Tab.Navigator>

    )
}

export default Main;