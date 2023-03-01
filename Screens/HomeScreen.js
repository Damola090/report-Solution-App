import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Home from '../Components/HomeComponents/Home';

import { colorConstants } from '../Constants/StyleConstants'

function HomeScreen() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Home />
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstants.background
    }
})



