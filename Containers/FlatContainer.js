import { useEffect } from 'react';
import { FlatList, StyleSheet, Text } from "react-native";

import { useNavigation } from '@react-navigation/native'

import { ReportList } from '../assets/Data/Data';

import LatestReport from "../Components/GeneralComponents/LatestReport";
import { spaceConstants } from '../Constants/StyleConstants';



function FlatContainer({ categoryItems, reportItems, ListHeaderComponent }) {

    const navigation = useNavigation()

    if (reportItems && ListHeaderComponent) {
        const RenderReportList = (itemData) => {

            const NavigateToSingleReport = () => {
                navigation.navigate('Single-Report-stack', {
                    reportId: itemData.item._id
                })
            }

            return (
                <LatestReport
                    id={itemData.item._id}
                    category={itemData.item.category}
                    picture={itemData.item.image.url}
                    topic={itemData.item.reportContent.topic}
                    user={itemData.item.user.name}
                    onPress={NavigateToSingleReport}
                />
            )
        }

        return (

            <FlatList
                data={reportItems}
                renderItem={RenderReportList}
                keyExtractor={(item) => item._id}
                ListHeaderComponent={ListHeaderComponent}
                ListHeaderComponentStyle={styles.listHeaderStyle}
            />
        )

    } else if (categoryItems) {
        const RenderReportList = (itemData) => {

            const NavigateToSingleReport = () => {
                navigation.navigate('Single-Report-stack', {
                    reportId: itemData.item._id
                })
            }

            return (
                <LatestReport
                    id={itemData.item._id}
                    category={itemData.item.category}
                    picture={itemData.item.image.url}
                    topic={itemData.item.reportContent.topic}
                    user={itemData.item.user.name}
                    onPress={NavigateToSingleReport}
                />
            )
        }

        return (

            <FlatList
                data={categoryItems}
                renderItem={RenderReportList}
                keyExtractor={(item) => item._id}
            />
        )
    }
}
export default FlatContainer;

const styles = StyleSheet.create({
    listHeaderStyle: {
        // padding : spaceConstants.mediumSpacVertical
    }
})