import { View } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';



import { createStackNavigator } from '@react-navigation/stack';
import SingleReportScreen from '../Screens/SingleReportScreen';

const Stack = createStackNavigator();


function HomeNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home-stack'
                component={HomeScreen}
                options={{
                    // headerShown : false,
                }}
            />
            <Stack.Screen 
                name='Single-Report-stack'
                component={SingleReportScreen}
                options={{
                    headerShown : false,
                }}
            />
        </Stack.Navigator>

    )

}

export default HomeNavigator;