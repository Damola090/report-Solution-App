import { ScrollView, StyleSheet } from 'react-native';
import { spaceConstants } from '../Constants/StyleConstants';


function ScrollContainer({ children, config }) {

    return (
        <ScrollView
            //General Style For all ScollViews
            {...config}
        >
            {children}
        </ScrollView>
    )
}

export default ScrollContainer;

const styles = StyleSheet.create({

})
