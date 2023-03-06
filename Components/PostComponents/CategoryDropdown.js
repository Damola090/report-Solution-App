import { View, Text, StyleSheet } from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import { fontConstants, sizeConstants, spaceConstants, colorConstants } from '../../Constants/StyleConstants'

function CategoryDropdown({ categoryList, setCategory }) {

    return (
        <View style={styles.DropdownContainer}>
            <SelectDropdown
                data={categoryList}
                defaultButtonText="Select A Category"
                onSelect={(selectedItem, index) => {
                    setCategory(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
                dropdownStyle={{ 
                    backgroundColor: colorConstants.background,
                }}
                buttonStyle={{
                    flex : 1,
                    borderRadius: 6,
                    backgroundColor: colorConstants.background,
                }}
                buttonTextStyle={{
                    color: "white"
                }}
                rowTextStyle={{
                    color : 'white'
                }}
            // selectedRowStyle={}
            />
        </View>
    )
}


export default CategoryDropdown;

const styles = StyleSheet.create({
    DropdownContainer: {
        flex: 1,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'stretch'
    }
})