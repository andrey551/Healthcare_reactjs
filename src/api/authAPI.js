import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/be_war/api/account'
})

const authAPI = {
    async login(username, password) {
        return await axiosInstance.post('login', {username, password})
    },

    async register(account, user) {

        return await axiosInstance.post('register', {account: account, user: user})
    }
}

export default authAPI;