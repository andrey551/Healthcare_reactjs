import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/be_war/api/home',
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
const userAPI = {
    async getUser(token) {
        return axiosInstance.get('/getUser', {})
    },

    async updateUser(token, name, age, height,address) {
        return axiosInstance.post('/updateuser', { name, age, height,address}, {})
    }
}

export default userAPI;