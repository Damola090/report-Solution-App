import AsyncStorage from '@react-native-async-storage/async-storage';



//Get ALl Reports 
export const GetAllCategory = async () => {

    var token = undefined;

    const extract = await AsyncStorage.getItem('jwt')

    if (extract === null) {
        token = undefined
    }

    token = extract

    try {

        const response = await fetch('https://careful-leather-jacket-yak.cyclic.app/api/v1/get-all-category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()

        return data

    } catch (err) {

        return null

    }

}


//Get ALl Reports 
export const GetFilteredReports = async (id) => {

    var token = undefined;

    const extract = await AsyncStorage.getItem('jwt')

    if (extract === null) {
        token = undefined
    }

    token = extract

    try {

        const response = await fetch(`https://careful-leather-jacket-yak.cyclic.app/api/v1/get-Reports-For-Category/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()

        return data

    } catch (err) {

        return null

    }
}



//Get ALl Reports 
export const GetAllReports = async () => {

    var token = undefined;

    const extract = await AsyncStorage.getItem('jwt')

    if (extract === null) {
        token = undefined
    }

    token = extract

    try {

        const response = await fetch('https://careful-leather-jacket-yak.cyclic.app/api/v1/fetch-all-reports', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()

        return data

    } catch (err) {

        return null

    }

}


//Get Single Report 
export const GetSingleReport = async (id) => {

    var token = undefined;

    const extract = await AsyncStorage.getItem('jwt')

    if (extract === null) {
        token = undefined
    }

    token = extract

    // console.log(token)

    const response = await fetch(`https://careful-leather-jacket-yak.cyclic.app/api/v1/fetch-single-report/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()

    if (data) {
        return data

    } else {
        return;
    }

}



export const UploadToCloudinary = async ( ImageObj ) => {

    var token = undefined;

    const extract = await AsyncStorage.getItem('jwt')

    if (extract === null) {
        token = undefined
    }

    token = extract

    const formData = new FormData();

    formData.append('image', {
        name: 'image',
        uri: ImageObj,
        type: 'image/jpg',
    })

    // console.log(formData)

    const response = await fetch(`https://careful-leather-jacket-yak.cyclic.app/api/v1/upload-to-cloudinary`, {
        method: 'POST',
        headers: {
            Accept: 'Application/json',
            'Content-Type': 'multiPart/form-data',
            'Authorization': `Bearer ${token}`
        },
        body: formData

    })

    const data = await response.json()

    // console.log(data)

    if (data) {
        return data

    } else {
        return;
    }

}



//Create A New  Report
export const CreateNewReport = async (reportObj) => {

    var token = undefined;

    const extract = await AsyncStorage.getItem('jwt')

    if (extract === null) {
        token = undefined
    }

    token = extract

    console.log(token)

    try {

        const response = await fetch('https://careful-leather-jacket-yak.cyclic.app/api/v1/create-report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body : JSON.stringify(reportObj)
        })

        const data = await response.json()

        console.log(data)

        return data

    } catch (err) {

        return null

    }

}




//Get ALl Reports 
export const GetMyReports = async () => {

    var token = undefined;

    const extract = await AsyncStorage.getItem('jwt')

    if (extract === null) {
        token = undefined
    }

    token = extract

    try {

        const response = await fetch('https://careful-leather-jacket-yak.cyclic.app/api/v1/fetch-my-report', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()

        return data

    } catch (err) {

        return null

    }

}
