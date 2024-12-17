import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.254.164.127/api/v1'
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
        console.log(response)
        return response.data;
    } catch (error){
        throw new Error('Failed to login users: '+ error.message);
    }
}

export default api;