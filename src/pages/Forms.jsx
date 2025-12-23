import React, { useState } from 'react'
import StepperForms from "../components/StepperForms"
import Preview from "../components/Preview"


function Forms() {

  const [resumeData, setResumeData] = useState({
    professionalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: ""
    },
    educationData: {
      course: "",
      collage: "",
      university: "",
      year: ""
    },
    experience: {
      jobRole: "",
      company: "",
      joblocation: "",
      duration: ""
    },
    skills: [],
    summary: ""
  });
  const [IsResumeAdded, setISResumeAdded] = useState(false);
  console.log(IsResumeAdded);
  const [editId,seteditId]=useState("")


  return (
    <>
      {IsResumeAdded ? <div className="container-fluid">
        <div className="row">
          <div className="col-2">

          </div>
          <div className="col-8">
            <Preview editId={editId} resumeData={resumeData} IsResumeAdded={IsResumeAdded}/>

          </div>
          <div className="col-2">


          </div>
        </div>
      </div>

        :
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <StepperForms setResumeData={setResumeData} resumeData={resumeData} setISResumeAdded={setISResumeAdded} seteditId={seteditId} />
            </div>
            <div className="col-6">
              <Preview resumeData={resumeData} />

            </div>
          </div>
        </div>}
    </>
  )
}

export default Forms