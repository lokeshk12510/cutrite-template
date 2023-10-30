import axios from 'axios'
import constants from '../config/constants'
import { store } from '../app/store'

// Set config defaults when creating the instance
const axiosInstance = axios.create({
    baseURL: constants.API_URL,
    //withCredentials: true,
})

// Global config for every axios `requests`
axiosInstance.interceptors.request.use(
    (config) => {
        const { token } = store.getState().auth
        config.headers['Access-Control-Expose-Headers'] = 'Content-Disposition'
        config.headers['Authorization'] = `Bearer ${token}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Global config for every axios `response`
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status) {
            const resStatus = error.response.status

            if (resStatus === 401) {
                window.location.reload()
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
