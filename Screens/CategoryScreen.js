import { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Category from '../Components/CategoryComponents/Category';


import { GetFilteredReports } from '../Store/Actions';

function CategoryScreen({ route}) {

    const [categoryItems, setCategoryItems] = useState([])

    const id = route.params?.catId

    console.log(id)

    useFocusEffect(
        useCallback(

            () => {

                GetFilteredReports(id).then(res => {
                    setCategoryItems(res.Reports)
                    console.log(res.Reports)
                }).catch(err => {
                    setCategoryItems(err)
                })

                return () => {
                    setCategoryItems([])
                }

            }, []
        )
    )

    return (
        <View style={styles.categoryBox}>
            <Category categoryItems={categoryItems} />
        </View>
    )
}

export default CategoryScreen;

const styles = StyleSheet.create({
    categoryBox: {
        flex: 1,
    }
})