import { View, Text, StyleSheet } from 'react-native';

import FlatContainer from '../../Containers/FlatContainer';


function Category({ categoryItems }) {

    return (
        <View style={styles.mainBox}>
            {categoryItems.length === 0
                ? (<>
                    <View style={styles.noReportsContainer}>
                        <Text style={styles.noReportsText}>No Reports For This Category</Text>
                    </View>
                </>)
                : (<FlatContainer categoryItems={categoryItems} />)
            }
        </View>
    )
}

export default Category;

const styles = StyleSheet.create({
    mainBox : {
        flex : 1,
        backgroundColor : 'black'

    },
    noReportsContainer : {
        height : '100%',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },
    noReportsText : {
        fontSize : 25,
        fontWeight : '400',
        color : 'white'
    }
})
