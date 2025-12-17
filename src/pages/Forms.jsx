import React from 'react'
import StepperForms from "../components/StepperForms"
import Preview from "../components/Preview"


function Forms() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
            <StepperForms/>
        </div>
        <div className="col-6">
          <Preview/>

        </div>
      </div>
    </div>
    </>
  )
}

export default Forms