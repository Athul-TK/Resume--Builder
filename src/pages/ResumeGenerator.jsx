import React from 'react'
import { MdEditDocument } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <>
    <div className="container mt-5">
      <h1 className='text text-center'>Create A Job Winning Resume In Minutees</h1>
     <div className='row mt-5'>
        <div className="col-1"></div>
        <div className="col-4">
          <div className="shadow rounded p-5 text-center">
            <MdEditDocument />

            <h4>Add your information</h4>
            <p>add pre-written exanples to each section</p>
            <h4>step 1</h4>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4"> <div className="shadow rounded p-5 text-center">
          <FaCloudDownloadAlt />
            <h4>Download  your Resume</h4>
            <p>Download and start applying for job</p>
            <h4>step 2</h4>
          </div></div>
        <div className="col-1"></div>
     </div>
    <div className='text-center mt-5'>
       <Link to={"/forms"}><button className='btn btn-success'>Let's START</button></Link>
      </div>
    </div>
    </>
  )
}

export default ResumeGenerator