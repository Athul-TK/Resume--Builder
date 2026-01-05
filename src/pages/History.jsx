import React, { useEffect, useState } from 'react'
import { deleteResumeAPI, getAllResumeAPI } from '../services/allApi';
import { MdDelete } from "react-icons/md";


function History() {

  const [AllResume, setAllResume] = useState([])

  // get all resume 
  const getallresumeAPI = async () => {
    try {
      const result = await getAllResumeAPI()
      console.log(result);
      if (result.status == 200) {
        setAllResume(result.data)
      }


    } catch (error) {
      console.log(error);


    }

  }


  console.log(AllResume);


  // delete a resume 
  const deleteResume=async(id)=>{
    try {
      const result=await deleteResumeAPI(id)
      console.log(result);
      getallresumeAPI()
      
      
    } catch (error) {
      console.log(error);
      
      
    }

  }


  useEffect(() => {
    getallresumeAPI()
  }, [])



  return (
    <>
      <div className="containet">
        <div className="row mt-5 justify-content-center">
          {
            AllResume?.length > 0 ?
              AllResume?.map((resume) => (
                <div className="col-4">
                  <div className="card p-2 m-3">
                    <div className="card-header bg-gray d-flex justify-content-between"><h3>{resume.professionalData.name}</h3> <span onClick={()=>deleteResume(resume?.id)} className='fs-5 text-danger btn d-flex justify-content-center align-items-center'><MdDelete /></span></div>
                    <div className="card-body">
                      <h5 className='card-tittle'>{resume.professionalData.jobTitle} </h5>
                      <p className='card-text'>{resume.summary}</p>
                    </div>

                  </div>
                </div>
              ))
              :
              <p>No Resume added</p>
          }

        </div>
      </div>
    </>
  )
}

export default History