import { FlatList, StyleSheet, Text } from "react-native";

import { useNavigation } from '@react-navigation/native'

import { ReportList } from '../assets/Data/Data';

import LatestReport from "../Components/GeneralComponents/LatestReport";
import { spaceConstants } from '../Constants/StyleConstants';


function FlatContainer({ ListHeaderComponent }) {

    const navigation = useNavigation()

    const RenderReportList = (itemData) => {

        const NavigateToSingleReport = () => {
            navigation.navigate('Single-Report-stack')
        }

        return (
            <LatestReport {...itemData.item} onPress={NavigateToSingleReport}/>
        )
    }


    return (

        <FlatList
            data={ReportList}
            renderItem={RenderReportList}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={ListHeaderComponent}
            ListHeaderComponentStyle={styles.listHeaderStyle}
        />
    )
}
export default FlatContainer;

const styles = StyleSheet.create({
    listHeaderStyle : {
        // padding : spaceConstants.mediumSpacVertical
    }
})