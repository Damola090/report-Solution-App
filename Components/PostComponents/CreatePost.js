import { useEffect, useState } from 'react'

import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import SelectDropdown from 'react-native-select-dropdown';

import { UploadToCloudinary, CreateNewReport } from '../../Store/Actions'


import { fontConstants, sizeConstants, spaceConstants, colorConstants } from '../../Constants/StyleConstants'
import ScrollContainer from '../../Containers/ScrollContainer';
import UserInput from '../UserInput';
import UserButton from '../UserButton';
import CategoryDropdown from './CategoryDropdown';
import LoadingOverlay from '../LoadingOverlay';


function CreatePost() {

    const [picture, setPicture] = useState()
    const [cloudinaryData, setCloudinaryData] = useState()
    const [topic, setTopic] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState()
    const [newReport, setNewReport] = useState()
    const [loading, setLoading] = useState(false)

    const categoryDropDown = [
        'Fighting',
        'Fraud',
        'Accident',
        'Disaster',
        'Armed Robbery',
        'Theft',
        "Bribery",
        'Riot'
    ]

    //Request Permission to use Image library
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    //Function to Request for permission
    async function VerifyPermission() {

        const permissionResponse = await ImagePicker.getMediaLibraryPermissionsAsync();

        if (permissionResponse.status === "undetermined") {

            const permission = await requestPermission();


            return permission.granted;

        }

        if (permissionResponse.status === "denied") {

            Alert.alert(
                'Insufficient Permission',
                'You need to grand Photo library permission to Add A New Report'
            )

            return false;

        }

        return true;

    }

    //function to launch Image library 
    async function LaunchImageLibrary() {

        const weHavePermission = await VerifyPermission();

        if (!weHavePermission) {
            return;
        }

        const response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true
        })

        if (!response.canceled) {

            setPicture(response.assets[0].uri)
        }
    }

    useEffect(() => {

        if (picture !== undefined) {
            setLoading(true)
            UploadToCloudinary(picture)
                .then((res) => {
                    setCloudinaryData(res.cloudinaryObj)
                    setLoading(false)
                    Alert.alert("Image Uploaded Successfully")
                })
                .catch((err) => {
                    setCloudinaryData(null)
                    setLoading(false)
                    Alert.alert("Failed To Upload Image")
                })
        }

    }, [picture, UploadToCloudinary])

    useEffect(() => {

        if (newReport === null) {
            Alert.alert("Your Report Failed To be created, please try again")
        }

        if (newReport === undefined) {
            return;
        }

        Alert.alert("Report Successfully Created")
        setCloudinaryData()
        setTopic()
        setPicture()
        setDescription()
        setNewReport()
        setCategory()
    }, [newReport])

    const SubmitHandler = () => {

        if (cloudinaryData && topic && description && category) {
            const report = {
                reportContent: {
                    topic: topic,
                    body: description
                },
                category: category,
                image: cloudinaryData
            }

            CreateNewReport(report).then(res => {
                setNewReport(res)
            }).catch(err => {
                setNewReport(Null)
            })
        }
    }

    return (
        <View style={styles.createPostBox}>
            {loading === true
                ? <LoadingOverlay />
                : (
                    <ScrollContainer
                        config={{
                            contentContainerStyle: styles.scrollContainerStyle
                        }}
                    >
                        <Pressable onPress={LaunchImageLibrary} style={styles.AddPhotoBox}>
                            {picture !== undefined ? <Image style={{ width: '100%', height: '100%' }} source={{ uri: picture }} /> : (
                                <>
                                    <Ionicons name='md-camera' size={48} color='black' />
                                    <Text style={styles.AddPhotoText}>Add Photo</Text>
                                </>
                            )}
                        </Pressable>
                        <View style={styles.inputContainer}>
                            <UserInput
                                label="Add Topic"
                                textInputConfig={{
                                    onChangeText: (titleParams) => {
                                        setTopic(titleParams)
                                    },
                                    value: topic
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <UserInput
                                label="Add Description"
                                textInputConfig={{
                                    multiline: true,
                                    onChangeText: (DescriptionParams) => {
                                        setDescription(DescriptionParams)
                                    },
                                    value: description
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <CategoryDropdown categoryList={categoryDropDown} setCategory={setCategory} />
                        </View>
                    </ScrollContainer>

                )}
            <View style={styles.ButtonContainer}>
                <UserButton onPress={SubmitHandler}>Create Post</UserButton>
            </View>
        </View>
    )
}

export default CreatePost;

const styles = StyleSheet.create({
    createPostBox: {
        flex: 1,
        padding: 10
    },
    AddPhotoBox: {
        height: 250,
        marginBottom: 20,
        borderRadius: 6,
        flexDirection: 'column',
        backgroundColor: colorConstants.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AddPhotoText: {
        fontSize: fontConstants.sizeTextMedium,
        fontWeight: fontConstants.weightBold
    },
    inputContainer: {
        marginBottom: 10
    },
    scrollContainerStyle: {
        // flex : 0.5
    },
    ButtonContainer: {
        // flex : 0.5
    }
})