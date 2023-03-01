import { View, Text, StyleSheet } from 'react-native';

import { colorConstants } from '../Constants/StyleConstants'

import SingleReport from '../Components/HomeComponents/SingleReport';

function SingleReportScreen() {
    return (
        <View style={styles.container}>
            <SingleReport />
        </View>
    )
}

export default SingleReportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstants.background
    }
})



