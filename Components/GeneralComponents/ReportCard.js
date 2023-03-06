import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

var { width } = Dimensions.get("window")

var { height } = Dimensions.get('screen')

console.log(height)

import { sizeConstants, fontConstants, spaceConstants, colorConstants } from '../../Constants/StyleConstants'

function ReportCard({ url, topic, category, user, style , createdAt }) {

    return (
        <ImageBackground
            imageStyle={styles.image}
            style={[styles.imageBackground, style]}
            source={{ uri : url}}
        >
            <View style={styles.Content}>
                <View style={styles.Tag}>
                    <Text style={styles.TagText}>{category}</Text>
                </View>
                <View style={styles.report}>
                    <View style={styles.smallReport}>
                        <Text style={styles.smallReportName}>{user}</Text>
                        <Text style={styles.smallReportTime}>6 Hours Ago</Text>
                    </View>
                    <View style={styles.mainReport}>
                        <Text style={styles.mainReportText}>{topic}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default ReportCard;

const styles = StyleSheet.create({
    image: {
        borderRadius: sizeConstants.borderRadius
    },
    imageBackground: {
        width: width - 50,
        height: height / 3.3,
        marginHorizontal : spaceConstants.mediumSpacHorizontal
    },
    
    Content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'blue',
        padding: sizeConstants.paddngLarge
    },
    Tag: {
        padding : sizeConstants.paddngLarge,
        borderRadius : sizeConstants.borderRadius,
        width: 100,
        backgroundColor: colorConstants.backgroundMedium,

    },
    TagText: {
        fontSize : fontConstants.textSmall,
        fontWeight : fontConstants.mediumWeight,
        color : colorConstants.fontColor,
        textAlign : 'center'
    },
    report : {
        flex : 0.55,
        // backgroundColor : 'purple',
        flexDirection : 'column',
        justifyContent : 'center'

    },
    smallReport : {
        padding : 4,
        borderRadius : 6,
        marginVertical : 5,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        backgroundColor : '#8ec3e3',
        backgroundColor : 'green'
    },
    smallReportName : {
        fontSize: fontConstants.headingSmall,
        fontWeight : fontConstants.mediumWeight,
        marginRight : spaceConstants.LargeSpaceHorizontal,
        color : colorConstants.fontColor

    },
    smallReportTime : {
        color : colorConstants.fontColor

    },
    mainReport : {
        padding : 4,
        borderRadius : 6,
        marginVertical : 5,
        backgroundColor: '#086999'

    },
    mainReportText : {
        fontSize : fontConstants.headingMedium,
        fontWeight : fontConstants.BigWeight,
        color : colorConstants.fontColor
    }
})