import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import { fontConstants, colorConstants, sizeConstants, spaceConstants } from '../../Constants/StyleConstants';

function LatestReport({ id, category, picture, topic, user, date, onPress}) {

    return (
        <Pressable onPress={onPress} style={styles.LatestReportContainer}>
            <Image
                style={styles.ImageStyle}
                source={require('../../assets/pexels-beth-easton-2433985.jpg')}
            />
            <View style={styles.LatestReportContent}>
                <Text style={styles.LatestReportContentTag}>{category}</Text>
                <Text style={styles.LatestReportContentHead}>{topic}</Text>
                <View style={styles.userDetails}>
                    <Text style={styles.userDetailsName}>{user}</Text>
                    <Text style={styles.userDetailsDate}>{date}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default LatestReport;

const styles = StyleSheet.create({
    LatestReportContainer : {
        padding : sizeConstants.paddingRegular,
        marginBottom : spaceConstants.LargeSpaceVertical,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'stretch',
        backgroundColor : 'red'
    },
    ImageStyle : {
        width : 140,
        height : 150,
        borderRadius : sizeConstants.borderRadius
    },
    LatestReportContent : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'space-between',
        backgroundColor : 'green',
        marginHorizontal : spaceConstants.mediumSpacHorizontal
    },
    LatestReportContentTag : {
        fontSize : fontConstants.textSmall,
        fontWeight : fontConstants.mediumWeight,
        color : colorConstants.fontColor,
    },
    LatestReportContentHead : {
        fontSize : fontConstants.headingMedium,
        fontWeight : fontConstants.BigWeight,
        color : colorConstants.fontColor
    },
    userDetails : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'flex-start'
    },
    userDetailsName : {
        fontSize : fontConstants.textSmall,
        fontWeight : fontConstants.mediumWeight,
        color : colorConstants.fontColor,
        marginRight : spaceConstants.mediumSpacHorizontal

    },
    userDetailsDate : {
        flex : 1,
        fontSize : fontConstants.textSmall,
        fontWeight : fontConstants.mediumWeight,
        color : colorConstants.fontColor,
    }
})