import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser, getTransactionsApi, transactions } from '../api/restApi';

const AuthContext = createContext();

export const Authprovider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState('')
    const [userTransactions, setUserTransactions] = useState('')

    const login = async (token) => {
        setUser({token});
        await AsyncStorage.setItem('userToken', token)
    }

    const logout = async () => {
        setUser(null)
        await AsyncStorage.removeItem('userToken')
    }

    const refreshToken = async () => {
        console.log(isAxiosError, "ini context")
        api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    }
    const getUserData = async () =>{
        console.log('get user data authContext')
        const response = await getUser(user.token)
        console.log(response, "response")
        setUserData(response)
    }

    const transferTopUp = async (token, postData) =>{
        console.log('transfer di authContext')
        const response = await transactions(token, postData)
        console.log("aowkoakw", response)
    }

    const getTransactions = async () =>{
        try{
            console.log('getTransaction authContext')
            const response = await getTransactionsApi(user.token)
            console.log('koaskdpoaksd', response)

            let temp = response ? response : []

            setUserTransactions(temp.reverse())
        } catch (error){
            console.log('poipopipii',error)
        }
        
    }

    useEffect(() => {
        refreshToken();
        if (user) {
            getUserData()
        }
    },[user])
    return (
        <AuthContext.Provider value={{
            user, login, logout, userData, getUserData, transferTopUp, userTransactions, getTransactions}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);