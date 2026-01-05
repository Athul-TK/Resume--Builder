import { Divider } from '@mui/material'
import React from 'react'

import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Edit from './Edit'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




function Preview({ resumeData, IsResumeAdded, editId, setResumeData }) {
  console.log(resumeData);


  // donload resume pdf

  const resumeDownloadPDF = async () => {
    const input = document.getElementById('DWLResult') // to get id
    const canvas = await html2canvas(input, { scale: 2 }) // convert the selected html to canvas (screenshot)
    const imgData = canvas.toDataURL("img/png") // to convert into image url

    //image url to pdf
    const pdf = new jsPDF("p", "mm", "a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeigth = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeigth)
    pdf.save("Resume.pdf")



  }


  return (
    <>
      <div className='m-3 p-3'>
        <div className='d-flex justify-content-end gap-5 m-3'>

          {IsResumeAdded &&
            <>
              <Edit editId={editId} setResumeData={setResumeData} />
              <button onClick={resumeDownloadPDF} className='btn btn-primary'><FaFileDownload /></button>
            </>
          }

          <Link to={"/history"}><button className='btn btn-primary'><FaHistory /></button></Link>
          <Link to={"/"}><button className='btn btn-primary'>Back</button></Link>

        </div>
        <div id='DWLResult' className='p-3 text-center shadow'>
          <h2>{resumeData.professionalData.name}</h2>
          <h4 className='text-primary'>{resumeData.professionalData.jobTitle}</h4>
          <p>{resumeData.professionalData.location} | {resumeData.professionalData.email} | {resumeData.professionalData.phone}</p>
          <div>
            <Link to={resumeData?.professionalData.github   } target='_blank' >GitHub</Link> |
            <Link to={resumeData?.professionalData.linkedin } target='_blank' >LinkedIn</Link> |
            <Link to={resumeData?.professionalData.portfolio} target='_blank' >Portfolio</Link>
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
          <div className='d-flex flex-wrap justify-content-center mt-3 gap-3'>
            {resumeData.skills.map(iteam =>(<button className='btn btn-center btn-primary '>{iteam}</button>))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview