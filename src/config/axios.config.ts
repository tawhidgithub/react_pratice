import axios from "axios";
import { BaseUrl } from "../constant/apiUrl";

const axiosClient = axios.create({
baseURL:BaseUrl,
headers:{
    'Content-Type':'application/json'
},
withCredentials:true

})


export default axiosClient