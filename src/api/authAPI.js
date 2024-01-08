import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/be_war/api/account'
})

const authAPI = {
    async login(username, password) {
        return await axiosInstance.post('login', {username, password})
    },

    async register(username, password) {
        return await axiosInstance.post('register', {username, password})
    }
}

export default authAPI;