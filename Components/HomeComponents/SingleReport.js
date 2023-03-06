import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';

import ScrollContainer from '../../Containers/ScrollContainer';

import { fontConstants, sizeConstants, spaceConstants, colorConstants } from '../../Constants/StyleConstants'

import { Ionicons } from '@expo/vector-icons'

var { height } = Dimensions.get('screen')

function SingleReport({ singleReportFetched }) {

    return (
        <View style={styles.singleReportContainer}>
            <ScrollContainer
                config={{
                    contentContainerStyle: styles.scrollContainerStyle,
                }}
            >
                <ImageBackground
                    imageStyle={styles.imageBackground}
                    style={styles.imageSection}
                    source={{ uri : singleReportFetched.image.url}}
                >
                    <View style={styles.innerImageBackgroundBox}>
                        <View style={styles.IconsBox}>
                            <Ionicons name="chevron-back-circle-outline" size={24} color="white" />
                            <Ionicons name="chevron-back-circle-outline" size={24} color="white" />
                        </View>
                        <View style={styles.Heading}>
                            <View style={styles.Content}>
                                <View style={styles.Tag}>
                                    <Text style={styles.TagText}>{singleReportFetched.category}</Text>
                                </View>
                                <View style={styles.report}>
                                    <View style={styles.smallReport}>
                                        <Text style={styles.smallReportName}>{singleReportFetched.user.name}</Text>
                                        <Text style={styles.smallReportTime}>6 Hours Ago</Text>
                                    </View>
                                    <View style={styles.mainReport}>
                                        <Text style={styles.mainReportText}>{singleReportFetched.reportContent.topic}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.reportContent}>
                    <View style={styles.reportContentHeader}>
                        <Image
                            style={styles.profilePicture}
                            source={require('../../assets/pexels-beth-easton-2433985.jpg')}
                        />
                        <Text style={styles.profileText}>Reported by : {singleReportFetched.user.name}</Text>
                    </View>
                    <View style={styles.reportContentBody}>
                        <Text>
                           {singleReportFetched.reportContent.body}
                        </Text>
                    </View>
                </View>
            </ScrollContainer>
        </View>

    )
}

export default SingleReport;

const styles = StyleSheet.create({
    singleReportContainer: {
        flex: 1,
        // backgroundColor: 'purple'
    },
    scrollContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    imageBackground: {

    },
    imageSection: {
        backgroundColor: 'red'

    },
    innerImageBackgroundBox: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: height / 1.5,
        // backgroundColor: 'red'
    },
    IconsBox: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // backgroundColor : 'blue',
        flex: 1

    },
    Heading: {
        // backgroundColor: 'red',

    },
    Content: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: sizeConstants.paddngLarge,
        // backgroundColor: 'green'
    },
    Tag: {
        // flex: 0.5,
        padding: sizeConstants.paddngLarge,
        borderRadius: sizeConstants.borderRadius,
        width: 100,
        backgroundColor: colorConstants.backgroundMedium,

    },
    TagText: {
        fontSize: fontConstants.textSmall,
        fontWeight: fontConstants.mediumWeight,
        color: colorConstants.fontColor,
        textAlign: 'center'
    },
    report: {
        // backgroundColor : 'purple',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    smallReport: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    smallReportName: {
        fontSize: fontConstants.headingSmall,
        fontWeight: fontConstants.mediumWeight,
        marginRight: spaceConstants.LargeSpaceHorizontal,
        color: colorConstants.fontColor

    },
    smallReportTime: {
        color: colorConstants.fontColor

    },
    mainReport: {

    },
    mainReportText: {
        fontSize: fontConstants.headingMedium,
        fontWeight: fontConstants.BigWeight,
        color: colorConstants.fontColor
    },
    reportContent : {
        backgroundColor : 'white',
        padding : sizeConstants.paddngLarge,
        // borderTopLeftRadius : 20,
        // borderTopRightRadius : 20

    },
    reportContentHeader : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'

    },
    profilePicture : {
        width : 50,
        height : 50,
        borderRadius : sizeConstants.borderRadius
    },
    profileText : {
        fontSize: fontConstants.headingSmall,
        fontWeight : fontConstants.mediumWeight,
        marginHorizontal : spaceConstants.LargeSpaceHorizontal,
        marginVertical : spaceConstants.LargeSpaceHorizontal
    }
})