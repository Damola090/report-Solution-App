import { useCallback, useState, useContext } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';

import { useFocusEffect } from '@react-navigation/native'

import Home from '../Components/HomeComponents/Home';

import { colorConstants } from '../Constants/StyleConstants';

import { GetAllReports, GetAllCategory } from '../Store/Actions';

import { AuthContext } from '../Store/Context';

import LoadingOverlay from '../Components/LoadingOverlay';

function HomeScreen() {

    const { Auth } = useContext(AuthContext)
    const AuthState = Object.keys(Auth).length

    const [fetchRecords, setFetchRecords] = useState(false)
    const [allReports, setAllReports] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [latestReport, setLatestReport] = useState([])


    useFocusEffect(
        useCallback(

            () => {

                GetAllReports().then((res) => {
                    setAllReports(res.allreports)
                    setLatestReport(res.allreports)
                })
                    .catch(err => {
                        setAllReports([])
                        setLatestReport([])
                    })

                GetAllCategory().then(res => {
                    setAllCategories(res.Allcategory)
                })
                    .catch(err => {
                        setAllCategories([])
                    })

                console.log("home screen is in focus")


                return () => {
                    setFetchRecords(false)
                    setAllReports([])
                    setAllCategories([])
                    setLatestReport([])
                    console.log("home screen is out of focus")
                }

            }, []
        )
    )

    return (
        <View style={styles.container}>
            {AuthState === 0 ? (
                <LoadingOverlay error={true} />
            ) : (
                <SafeAreaView style={styles.container}>
                    {latestReport.length === 0 || allCategories.length === 0
                        ? <LoadingOverlay />
                        : <Home allCategories={allCategories} latestReport={latestReport} />
                    }
                </SafeAreaView>
            )}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    }
})



