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



//delecte