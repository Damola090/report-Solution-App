import { ImageBackground, View, Text, Image, StyleSheet } from "react-native";

import { spaceConstants } from '../../Constants/StyleConstants'

function CategoryCard({ category }) {

    return (
        <View style={styles.CategoryBox}>
            <Image
                style={styles.ImageStyle}
                source={{ uri : category.categoryBigImage}}
            />
            <View style={styles.categoryInnerContainer}>
                <Text style={styles.categoryText}>{category.categoryName}</Text>
            </View>
        </View>
    )
}

export default CategoryCard;

const styles = StyleSheet.create({
    CategoryBox : {
        width: 240,
        height: 150,  
        marginHorizontal : spaceConstants.LargeSpaceHorizontal
    },
    ImageStyle: {
        position : 'absolute',
        borderRadius : 15,
        width: 240,
        height: 150,
        zIndex : -300
    },
    categoryText: {
        fontSize : 20,
        fontWeight : '400',
        padding : 2,
        borderRadius : 7,
        position : 'relative',
        top : 100,
        left : 20,
        width: 80,
        backgroundColor: 'white',
        zIndex : 300
    }
})