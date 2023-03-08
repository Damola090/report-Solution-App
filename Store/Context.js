import { createContext, useReducer, useState } from "react";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

function AuthReducer(state, action) {

    switch(action.type) {

        case "LOGIN_REQUEST":
        case "CREATE_NEW_USER":
            return {
                loading : true,
                isAuthenticated : false
            }
        case "LOGIN_SUCCESSFUL":
        case "CREATE_NEW_USER_SUCCESS":
            return {
                ...state,
                loading : false,
                isAuthenticated : true,
                user : action.payload.user,
                invalid : false
            }
        case "LOGIN_FAILED":
        case "CREATE_NEW_USER_FAILED":
            return {
                ...state,
                loading : false,
                isAuthenticated : false,
                user : null,
                invalid : true
            }
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated : false,
                user : null
            }
        default :
            return state
    }
}

function AuthContextProvider ({children}){
   const [AuthState, dispatch] = useReducer(AuthReducer, {})

   //login
    async function loginExistingUser(email, password) {

        try {

            dispatch({
                type : "LOGIN_REQUEST"
            })

            config = {
                Headers: {
                    'Content-Type': 'application/json',
                }
            }
        
            const response = await axios.post('https://careful-leather-jacket-yak.cyclic.app/api/v1/login-user', { email, password }, config)
        
            if (response.status === 200) {
                token = response.data.data.toString();
                await AsyncStorage.setItem("jwt", token)

                dispatch({
                    type : "LOGIN_SUCCESSFUL",
                    payload : response.data,
                })

            } else {

                dispatch({
                    type : "LOGIN_FAILED",
                    payload : response.data
                })
            }

        } catch (err) {

            dispatch({
                type : "LOGIN_FAILED",
                payload : "Unable To Send Http Request"
            })

        }
    }

    //logout 
    async function logoutUser() {

        dispatch({
            type : "LOGOUT"
        })

        const result = await AsyncStorage.removeItem('jwt')

    }

    //Register New User 
    async function createNewUser(userDetails) {

        try {

            dispatch({
                type : "CREATE_NEW_USER"
            })

            config = {
                Headers: {
                    'Content-Type': 'application/json',
                }
            }

            const response = await axios.post('https://careful-leather-jacket-yak.cyclic.app/api/v1/register-user', userDetails, config)
            
            if (response.status === 201) {
                token = response.data.data.toString();
                await AsyncStorage.setItem("jwt", token)

                dispatch({
                    type : "CREATE_NEW_USER_SUCCESS",
                    payload : response.data,
                })

            } else {

                dispatch({
                    type : "CREATE_NEW_USER_FAILED",
                    payload : response.data
                })
            }

        } catch (err) {

            dispatch({
                type : "CREATE_NEW_USER_FAILED",
                payload : "Unable To Send Http Request"
            })

        }
    }




    const value = {
        Auth : AuthState,
        AuthenticateExistingUser : loginExistingUser,
        LogOutExistingUser : logoutUser,
        createNewUser : createNewUser
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;