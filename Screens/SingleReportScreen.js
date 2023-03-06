import { useCallback, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { colorConstants } from '../Constants/StyleConstants'

import SingleReport from '../Components/HomeComponents/SingleReport';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { GetSingleReport } from '../Store/Actions'
import LoadingOverlay from '../Components/LoadingOverlay';

function SingleReportScreen({ route }) {

    const ReportId = route.params.reportId

    const [singleReportFetched, setSingleReportFetched] = useState()

    useFocusEffect(
        useCallback(

            () => {

                GetSingleReport(ReportId)
                    .then((res) => {
                        setSingleReportFetched(res.singleReport)
                    })
                    .catch((err) => {
                        setSingleReportFetched(null)
                    })

                console.log("single report is in focus")

                return () => {

                    console.log("single Report is out of focus")
                }

            }, []
        )
    )


    return (
        <View style={styles.container}>
            {singleReportFetched === undefined
                ? <LoadingOverlay />
                : <SingleReport singleReportFetched={singleReportFetched} />
            }
        </View>
    )
}

export default SingleReportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstants.background
    }
})



