import axios from "axios";

const commaonAPI=async(httpRequest,url,reqBody)=>{
    const reqconfig={
        method:httpRequest,
        url,
        data:reqBody
    }
    return await axios(reqconfig).then(res =>{
        return res

    }).catch(err=>{
        return err
    })  
}
export default commaonAPI;