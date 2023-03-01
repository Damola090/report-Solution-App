import { View, Text, StyleSheet, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { fontConstants, sizeConstants, spaceConstants } from '../../Constants/StyleConstants'

import ScrollContainer from '../../Containers/ScrollContainer';
import UserInput from '../UserInput';
import UserButton from '../UserButton';

function CreatePost() {

    return (
        <View style={styles.createPostBox}>
            <ScrollContainer
                config={{
                    contentContainerStyle: styles.scrollContainerStyle
                }}
            >
                <View style={styles.AddPhotoBox}>
                    <Ionicons name='md-camera' size={48} color='black' />
                    <Text style={styles.AddPhotoText}>Add Photo</Text>
                </View>
                <View style={styles.AddTitle}>
                    <UserInput
                        label="Add Title"
                    />
                </View>
                <View style={styles.AddDescription}>
                    <UserInput
                        label="Add Description"
                        textInputConfig={{
                            multiline: true
                        }}
                    />
                </View>
                <View style={styles.AddCategory}>
                    <UserInput
                        label="Add Category"
                    />
                </View>
                <View style={styles.AddCategory}>
                    <UserInput
                        label="Add Category"
                    />
                </View>
            </ScrollContainer>
            <View style={styles.ButtonContainer}>
                <UserButton>Create Post</UserButton>
            </View>
        </View>
    )
}

export default CreatePost;

const styles = StyleSheet.create({
    createPostBox: {
        flex : 1,
        marginTop: 30,
    },
    AddPhotoBox: {
        height: 250,
        flexDirection: 'column',
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    AddPhotoText: {
        fontSize: fontConstants.sizeTextMedium,
        fontWeight: fontConstants.weightBold
    },
    scrollContainerStyle: {
        // flex : 0.5
    },
    ButtonContainer : {
        // flex : 0.5
    }
})