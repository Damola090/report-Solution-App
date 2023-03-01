import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { sizeConstants } from '../Constants/StyleConstants'

function Navbar() {
    return (
       <View style={styles.background}>
            <Ionicons name='search' size={24} color="black" />
            <Ionicons name='notifications' size={24} color="black" />
       </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    background : {
        padding : sizeConstants.paddingRegular, 
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : 'green'
    }
})