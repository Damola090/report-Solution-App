import { View, Text, StyleSheet } from 'react-native';

import Profile from '../Components/ProfileComponents/Profile';

import { fontConstants, colorConstants, sizeConstants, spaceConstants } from '../Constants/StyleConstants'

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Profile />
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: colorConstants.backgroundLight
    }
})



