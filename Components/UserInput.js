import { View, Text, TextInput, StyleSheet } from 'react-native';

function UserInput({ label, invalid, textInputConfig, style }) {

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)

    }

    return (
        <View style={[styles.InputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

export default UserInput;

const styles = StyleSheet.create({
    InputContainer: {
        
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 4

    },
    input: {
        backgroundColor: 'blue',
        padding: 6,
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 18,
        
    },
    inputMultiline: {
        minHeight: 250,
        textAlignVertical: 'top',

    },
    invalidLabel: {
        color: 'red'

    },
    invalidInput: {
        backgroundColor: 'blue',
        opacity: 0.3

    }
})