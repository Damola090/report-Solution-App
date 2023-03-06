import { useEffect, useState, useContext } from 'react';

import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import Profile from '../Components/ProfileComponents/Profile';

import { fontConstants, colorConstants, sizeConstants, spaceConstants } from '../Constants/StyleConstants'

import { AuthContext } from '../Store/Context'
import { GetMyReports } from '../Store/Actions'

function ProfileScreen() {

    const { Auth } = useContext(AuthContext);

    const [myReports, setMyReports] = useState()

    useEffect(() => {
        if (myReports === undefined) {
            GetMyReports()
                .then((res) => {
                    setMyReports(res)
                })
                .catch((err) => {
                    setMyReports(null)
                })
        }
    }, [Auth, setMyReports, myReports, GetMyReports])

    return (
        <View style={styles.container}>
            {myReports === undefined 
                ? <ActivityIndicator /> 
                : <Profile myReports={myReports} />
            }
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstants.backgroundLight
    }
})



