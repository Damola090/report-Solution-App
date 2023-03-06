import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import CreatePost from '../Components/PostComponents/CreatePost';

import { AuthContext } from '../Store/Context';

function PostScreen() {

    const { Auth } = useContext(AuthContext)
    
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



