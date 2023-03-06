import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


import Navbar from '../Navbar';
import ReportCard from '../GeneralComponents/ReportCard';
import ScrollContainer from '../../Containers/ScrollContainer';
import LatestReport from '../GeneralComponents/LatestReport';
import FlatContainer from '../../Containers/FlatContainer';

import CategoryCard from '../GeneralComponents/CategoryCard';

import { fontConstants, spaceConstants } from '../../Constants/StyleConstants';

import { useNavigation } from '@react-navigation/native'

function Home({ latestReport, allCategories }) {

    const navigation = useNavigation()

    function CategoryHandler(id) {
        navigation.navigate('category-stack', {
            catId : id
        })
    }

    const Header = () => {

        return (
            <View style={styles.headerOuterContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.InnerHead}>
                        <Text style={styles.InnerHeadText}>Latest Report</Text>
                        <Ionicons name="chevron-forward-outline" size={24} color="black" />
                    </View>
                    <ScrollContainer
                        config={{
                            horizontal: true,
                            contentContainerStyle: styles.scrollContainerStyle
                        }}
                    >
                        {latestReport.map((singleReport) => (
                            <ReportCard
                                key={singleReport._id}
                                style={styles.reportCard}
                                url={singleReport.image.url}
                                topic={singleReport.reportContent.topic}
                                category={singleReport.category}
                                user={singleReport.user.name} />
                        ))}
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
                            contentContainerStyle: styles.scrollContainerStyle
                        }}
                    >{allCategories.map((category) => (
                        <Pressable
                            key={category._id}
                            onPress={() => {CategoryHandler(category._id)}}
                        >
                            <CategoryCard category={category} />
                        </Pressable>
                    ))}
                    </ScrollContainer>
                </View>
            </View >
        )
    }

    return (
        <View style={styles.background}>
            <FlatContainer reportItems={latestReport} ListHeaderComponent={() => <Header />} />
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
        padding: 5,
        borderRadius: 10,
        marginBottom : 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#086999'
    },
    InnerHeadText: {
        color: 'white',
        fontSize: fontConstants.headingMedium,
        fontWeight: fontConstants.BigWeight
    },
    reportCard: {
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10
    },
    scrollContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'green',
    }
})