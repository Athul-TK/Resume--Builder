import commaonAPI from "./commanAPI"
import { serverURL } from "./serverURL"


//add resume - post- stepper form data
export const addResumeAPI=async(reqBody)=>{
    return await commaonAPI("POST",`${serverURL}/add-resume`,reqBody)
}



//get a particular resume - get by id
export const getAResumeAPI=async(id)=>{
    return await commaonAPI("GET",`${serverURL}/add-resume/${id}`)//path parameter
}

//update resume data
export const updateResumeAPI=async(id,reqBody)=>{
    return await commaonAPI("PUT",`${serverURL}/add-resume/${id}`,reqBody)
}



//get all  resume - in history
export const getAllResumeAPI=async()=>{
    return await commaonAPI("GET",`${serverURL}/add-resume`)
}



//delecte a resume data

export const deleteResumeAPI=async(id)=>{
    return await commaonAPI("DELETE",`${serverURL}/add-resume/${id}`)
}