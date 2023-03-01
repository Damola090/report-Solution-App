import { View, Text, StyleSheet } from 'react-native';

import CreatePost from '../Components/PostComponents/CreatePost';

function PostScreen() {
    return (
        <View style={styles.container}>
            <CreatePost />
        </View>
    )
}

export default PostScreen;

const styles = StyleSheet.create({
    container : {
       flex : 1
    }
})



