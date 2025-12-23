import { Divider } from '@mui/material'
import React from 'react'

import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Edit from './Edit'




function Preview({ resumeData, IsResumeAdded,editId }) {
  console.log(resumeData);


  return (
    <>
      <div className='m-3 p-3'>
        <div className='d-flex justify-content-end gap-5 m-3'>

          {IsResumeAdded &&
            <>
              <Edit editId={editId} />
              <button className='btn btn-primary'><FaFileDownload /></button>
            </>
          }

          <Link to={"/history"}><button className='btn btn-primary'><FaHistory /></button></Link>
          <Link to={"/"}><button className='btn btn-primary'>Back</button></Link>

        </div>
        <div className='p-3 text-center shadow'>
          <h2>{resumeData.professionalData.name}</h2>
          <h4 className='text-primary'>{resumeData.professionalData.jobTitle}</h4>
          <p>{resumeData.professionalData.location} | {resumeData.professionalData.email} | {resumeData.professionalData.phone}</p>
          <div>
            <Link>GitHub</Link> |
            <Link>LinkedIn</Link> |
            <Link>Portfolio</Link>
          </div>
          <Divider sx={{ fontSize: "20px", marginTop: "10px" }}>Summary</Divider>
          <p>{resumeData.summary}</p>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci exercitationem est atque delectus perferendis placeat ipsa quia, provident pariatur earum, sunt minus quisquam iusto porro similique qui, accusamus soluta.</p> */}
          <Divider sx={{ fontSize: "20px", marginTop: "10px" }}>Education</Divider>
          <h5>{resumeData.educationData.course}</h5>
          <p>{resumeData.educationData.collage} | {resumeData.educationData.university} | {resumeData.educationData.year}</p>
          <Divider sx={{ fontSize: "20px", marginTop: "10px" }}>JOB </Divider>
          <h5>{resumeData.experience.jobRole}</h5>
          <p>{resumeData.experience.company} | {resumeData.experience.joblocation} | {resumeData.experience.duration}</p>
          <Divider sx={{ fontSize: "20px", marginTop: "10px" }}>Skills</Divider>
          <div className='d-flex flex-wrap gap-3'>
            <button className='btn btn-primary'>HTML</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview