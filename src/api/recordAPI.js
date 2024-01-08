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
const recordAPI = {
    async getRecords(token) {
        return axiosInstance.get('/getRecord', {})
    },

    async addRecord(token, RawRecord) {
        return axiosInstance.post('/addRecord', RawRecord, {})
    },

    async deleteRecord(token, time) {
        return axiosInstance.post('/deleteRecord', time, {})
    }
}

export default recordAPI;