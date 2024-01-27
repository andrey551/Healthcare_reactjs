import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/be_war/api/profile',
    headers: {
        "content-type": "application/json",
    }
})

axiosInstance.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("tad"))
    if(token) {
        config.headers.Authorization = `${token}`
    }

    return config
})

const profileAPI = {
    async updateUser(token, req) {
        return axiosInstance.post('/updateUser', {...req.newUser}, {})
    },
    async updatePassword(token, req) {
        return axiosInstance.post('/updatePassword', {...req.newPassword}, {})
    }, 
    async updateWallet(token, req) {
        return axiosInstance.post('/updateWallet', {...req}, {})
    },

    async getWallet(token) {
        return axiosInstance.get('/getWallet', {})
    }
}

export default profileAPI;