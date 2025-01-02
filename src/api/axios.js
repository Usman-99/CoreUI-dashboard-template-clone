import { apiClient } from ".";


const getRequest=(url)=>{
    try {const response=apiClient.get(url)
    return response}
    catch(error){
        console.error(error)
    }
}

const postRequest=(url,data)=>{
    try {const response=apiClient.post(url,data)
    return response}
    catch(error){
        console.error(error)
    }
}

const deleteRequest=(url)=>{
    try {const response=apiClient.delete(url)
    return response}
    catch(error){
        console.error(error)
    }
}

const putRequest=(url,data)=>{
    try {const response=apiClient.put(url,data)
    return response}
    catch(error){
        console.error(error)
    }
}
export {getRequest,postRequest,deleteRequest,putRequest}