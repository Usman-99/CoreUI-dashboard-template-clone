import axios from "axios";
export const apiClient=axios.create({
    baseURL:"https://localhost",
    timeout:3000
})

apiClient.interceptors.request.use((response)=>{
    return response
},(error)=>{
   return Promise.reject(error)
})

apiClient.interceptors.response.use((response)=>{
    return response
},(error)=>{
   return Promise.reject(error)
})
