import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

function LoadingOverlay({ loading, error }) {
    
    return (
        <>
            {error ? (
                <View style={styles.LoadingContainer}>
                    <ActivityIndicator />
                    <Text style={styles.LoadingText}>Unable to View This Resource, please Authenticate</Text>
                </View>
            ) : (
                <View style={styles.LoadingContainer}>
                    <ActivityIndicator />
                    <Text style={styles.LoadingText}>Loading....</Text>
                </View>
            )}
        </>
    )
}
export default LoadingOverlay;

const styles = StyleSheet.create({
    LoadingContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoadingText: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white'
    }
})