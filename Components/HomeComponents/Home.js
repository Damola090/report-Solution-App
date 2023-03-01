import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



import Navbar from '../Navbar';
import ReportCard from '../GeneralComponents/ReportCard';
import ScrollContainer from '../../Containers/ScrollContainer';
import LatestReport from '../GeneralComponents/LatestReport';
import FlatContainer from '../../Containers/FlatContainer';

import CategoryCard from '../GeneralComponents/CategoryCard';

import { fontConstants, spaceConstants } from '../../Constants/StyleConstants'

function Home() {

    const Header = () => {

        return (
            <View style={styles.headerOuterContainer}>
                <Navbar />
                <View style={styles.headerContainer}>
                    <View style={styles.InnerHead}>
                        <Text style={styles.InnerHeadText}>Latest Report</Text>
                        <Ionicons name="chevron-forward-outline" size={24} color="black" />
                    </View>
                    <ScrollContainer
                        config={{
                            horizontal: true,
                            contentContainerStyle : styles.scrollContainerStyle
                        }}
                    >
                        <ReportCard />
                        <ReportCard />
                        <ReportCard />
                    </ScrollContainer>
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.InnerHead}>
                        <Text style={styles.InnerHeadText}>Category</Text>
                        <Ionicons name="chevron-forward-outline" size={24} color="black" />
                    </View>
                    <ScrollContainer
                        config={{
                            horizontal: true,
                            contentContainerStyle : styles.scrollContainerStyle
                        }}
                    >
                    <CategoryCard CategoryText="Riot" />
                    <CategoryCard CategoryText="Fighting" />
                    <CategoryCard CategoryText="Fraud" />

                </ScrollContainer>
            </View>
            </View >
        )
}

return (
    <View style={styles.background}>
        <FlatContainer ListHeaderComponent={() => <Header />} />
    </View>
)
}

export default Home;

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    headerOuterContainer: {

    },
    headerContainer: {
        marginVertical: spaceConstants.LargeSpaceVertical

    },
    InnerHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    InnerHeadText: {
        fontSize: fontConstants.headingMedium,
        fontWeight: fontConstants.BigWeight
    },
    scrollContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'green',
    }
})