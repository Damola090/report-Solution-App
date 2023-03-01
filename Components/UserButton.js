import { View, Text, Pressable, StyleSheet } from 'react-native';

import { fontConstants, colorConstants } from '../Constants/StyleConstants'

function UserButton({ onPress, children }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: colorConstants.backgroundMedium }}
            >

                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default UserButton;

const styles = StyleSheet.create({
    buttonOuterContainer : {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer : {
        backgroundColor : colorConstants.background,
        paddingVertical : 8,
        paddingHorizontal : 16,
        elevation : 2

    },
    buttonText : {
        fontSize : fontConstants.sizeTextMedium,
        fontWeight : fontConstants.mediumWeight,
        color : 'white',
        textAlign : 'center'
    },
    pressed : {
        opacity : 0.75
    }
})