import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/be_war/api/location',
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

const locationAPI = {
    async getLocations(token, req) {
        let type = (req.type == "Hospital" ? "hospital" : "store")
        let target = (req.target == 'Near By' ? "nearby" : "visited")
        return axiosInstance.post('/filter', {type, target}, {})
    },
    async loadComment(token,  coors) {
        return axiosInstance.post('/getComment', coors, {})
    },
    async addComment(token, coor, comment) {
        return axiosInstance.post('/addComment', {coor, comment}, {})
    },
    async loadDepartment(token, coors) {
        return axiosInstance.post('/getDepartment', coors, {});
    },
    async addSchedule(token, time, department_id, hospital_id) {
        return axiosInstance.post('/addScheduler', {hospital_id, department_id, time}, {})
    }
}

export default locationAPI;