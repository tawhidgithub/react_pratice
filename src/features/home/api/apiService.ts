import { AxiosError } from "axios";
import axiosClient from "../../../config/axios.config"

 const GetAPi = {

getUser: async()=>{

try {
    
const response = await axiosClient.get(`/users`);

return response.data;
} catch (error) {
    if(error instanceof AxiosError){
        console.error("API Error:", error.message);    }

    return[]
}

}


}

export default GetAPi