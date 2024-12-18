import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.254.164.127/api/v1',
    header: {
        "Content-type": "application/json",
    }
})

export const fetchPosts = async (postData) => {
    try{
        const response = await api.post('/auth/register', postData);
        console.log(response)
        return response.data;
    } catch (error){
        throw new Error('Failed to register users: '+ error.response.data.message);
    }
}

export const fetchLogin = async (postData) => {
    try{
        const response = await api.post('/auth/login', postData);
        return response.data;
    } catch (error){
        throw new Error('Failed to login users: '+ error.message);
    }
}
export const getUser = async (token) => {
    try{
        console.log('restAPI')
        const response = await api.get('/users/me', {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        });
        console.log('CONSOLEEEE')
        console.log('nyimenegegg',response)
        return response.data.data;
    } catch (error){
        throw new Error('Failed to get user: '+ error.response.data);
    }
}

export const transactions = async (token, postData) => {
    try{
        console.log('restAPI')
        const response = await api.post('/transactions', postData, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        });
        console.log('CONSOLEEEE')
        console.log('nyimenegeggTransferTopUp',response.data)
        return response.data.data;
    } catch (error){
        throw new Error('Failed to get user: '+ error.response.data);
    }
}

export const getTransactionsApi = async (token) => {
    try{
        console.log('restAPI trans', token)
        const response = await api.get('/transactions',{
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        });
        console.log('CONSOLEEEE')
        console.log('nyimenegeggTransferTopUp',response.data)
        return response.data.data;
    } catch (error){
        throw new Error('Failed to get user: '+ error.response.data.message);
    }
}

export default api;