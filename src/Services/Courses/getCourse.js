import axios from "axios"
import { API_URL_COURSES } from "../API"

export const getCourse = (id) => {
    return axios.get(API_URL_COURSES+'/'+id+'?populate=*').then(res => res.data)
}