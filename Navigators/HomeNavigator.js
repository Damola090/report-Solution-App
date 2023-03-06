import { View } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import CategoryScreen from '../Screens/CategoryScreen';

import { createStackNavigator } from '@react-navigation/stack';
import SingleReportScreen from '../Screens/SingleReportScreen';

const Stack = createStackNavigator();


function HomeNavigator() {

    return (
        <Stack.Navigator

        >
            <Stack.Screen
                name='Home-stack'
                component={HomeScreen}
                options={{
                    headerTitle: 'Home',
                    headerTitleAlign: 'center',
                    // headerStyle : { backgroundColor : 'black' },
                    // headerTitleStyle : { color : 'white'}
                }}
            />
            <Stack.Screen
                name='category-stack'
                component={CategoryScreen}
                options={{
                    headerTitle: 'Category',
                    headerTitleAlign: 'center',
                    // headerStyle : { backgroundColor : 'black' },
                    // headerTitleStyle : { color : 'white'}
                }}
            />
            <Stack.Screen
                name='Single-Report-stack'
                component={SingleReportScreen}
                options={{
                    headerTitle: 'Single Report',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>

    )

}

export default HomeNavigator;