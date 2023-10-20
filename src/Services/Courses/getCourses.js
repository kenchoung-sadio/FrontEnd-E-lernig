import axios from "axios"
import { API_URL_COURSES } from "../API"

export const getCourses = () => {
    return axios.get(API_URL_COURSES).then(res => res.data)
}