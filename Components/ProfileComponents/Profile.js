import { View, Text, Dimensions, StyleSheet } from 'react-native';

import { fontConstants, colorConstants, sizeConstants, spaceConstants } from '../../Constants/StyleConstants'

import UserButton from '../UserButton';
import ReportCard from '../GeneralComponents/ReportCard';
import ScrollContainer from '../../Containers/ScrollContainer';

var { height } = Dimensions.get('screen')

function Profile() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollContainer
                config={{
                    contentContainerStyle: styles.profileContainer
                }}
            >
                <View style={styles.profileDetails}>
                    <View style={styles.ProfileImage}>
                        <Text style={styles.ProfileImageText}>S</Text>
                    </View>
                    <View style={styles.profileDetailsOwner}>
                        <Text style={styles.profileDetailsName}>Tayo Oyekale</Text>
                        <Text style={styles.profileDetailsLocation}>Oshodi</Text>
                    </View>
                </View>
                <View style={styles.reportDetails}>
                    <View style={styles.postNumberContainer}>
                        <Text style={styles.postNumberValue}>0</Text>
                        <Text style={styles.postNumberkey}>Number Of Posts</Text>
                    </View>
                    <View style={styles.postContentContainer}>
                        <View style={styles.noPostContainer}>
                            <Text style={styles.noPostContainerText}>You Have No Post Yet Sir !!!</Text>
                            <UserButton>Create A New Post</UserButton>
                        </View>
                        {/* <View style={styles.PostFoundContainer}>
                            <ReportCard />
                            <ReportCard />
                            <ReportCard />
                            <ReportCard />
                        </View> */}
                    </View>
                </View>
            </ScrollContainer>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: colorConstants.backgroundLight
    },
    profileDetails: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 3.9,
        backgroundColor: 'white'
    },
    ProfileImage: { // container 1
        paddingHorizontal: 40,
        paddingVertical: 30,
        borderRadius: 50,
        backgroundColor: 'green',
        marginBottom: spaceConstants.LargeSpaceVertical
    },
    ProfileImageText: {
        fontSize: fontConstants.headingBig,
        fontWeight: fontConstants.BigWeight
    },


    profileDetailsOwner: { //container 
        // backgroundColor : 'blue'

    },
    profileDetailsName: {
        fontSize: fontConstants.headingBig,
        fontWeight: fontConstants.mediumWeight,
    },
    profileDetailsLocation: {
        textAlign: 'center',
        fontSize: fontConstants.headingMedium,
        fontWeight: fontConstants.smallWeight,
    },
    reportDetails: {
        // flex: 1,
        flexDirection: 'column',
        // backgroundColor : 'blue'
    },
    postNumberContainer: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    postNumberValue: {
        fontSize: fontConstants.headingMedium,
        fontWeight: fontConstants.BigWeight,
    },
    postNumberkey: {
        fontSize: fontConstants.headingSmall,
        fontWeight: fontConstants.mediumWeight
    },
    postContentContainer: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical : 40

    },
    noPostContainer: {


    },
    noPostContainerText: {
        fontSize: fontConstants.headingMedium,
        fontWeight: fontConstants.mediumWeight,
        textAlign: 'center'
    },
    PostFoundContainer: {
        flex: 1
    }
})

