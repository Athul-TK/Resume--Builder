import React, { use, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { resume } from 'react-dom/server';
import { addResumeAPI } from '../services/allApi';
import Swal from 'sweetalert2'
const steps = ['Basic Information', 'Contact Details', 'Education Details', 'work Experience', 'Skills and certification', 'Review and Submit'];

function StepperForms({ resumeData, setResumeData, setISResumeAdded, seteditId }) {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [inputSkill, setInputSkill] = useState("");
  const skillSuggestion = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js",]






  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //add skill function
  const addskill = (inputSkill) => {
    console.log(inputSkill);
    if (!inputSkill) {
      alert("Please Add a skill")
      
    }
    else {
      if (resumeData.skills.includes(inputSkill)) {
        alert("Skill already added")
      }
      else {
        setResumeData({ ...resumeData, skills: [...resumeData.skills, inputSkill] })
      }
    }

  }


  //handle delete skill
  const handelselSkill = (delSkill) => {
    console.log(delSkill);
    setResumeData({ ...resumeData, skills: resumeData.skills.filter((iteam) => iteam != delSkill) })

  }
  //handle submit
  const handleSubmit = async () => {
    const { name, jobTitle, location } = resumeData.professionalData
    if (!name || !jobTitle || !location) {
      alert("Please fill all the required fields")
    } else {
      try {
        const result = await addResumeAPI(resumeData)
        console.log(result);
        if (result.status == 201) {
          seteditId(result.data.id)
          setISResumeAdded(true)
          // alert("Resume added successfully")
          Swal.fire({
            title: "Resume added successfully",
            icon: "success",

          });
        } else {
          // alert("Failed to add resume")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add resume!"
          });
        }
      } catch (err) {
        console.log(err);


      }
    }
  }

  // 'Basic Information', 'Contact Details', 'Education Details','work Experience','Skills and certification','Review and Submit'

  const renderStepArrayContent = (activeStep) => {

    switch (activeStep) {
      case 0:
        return (
          <div>
            <h1>Person Details</h1>
            <div className='d-flex row p-3 gap-2'>
              <TextField id="outlined-basic" value={resumeData.professionalData.name} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, name: e.target.value } }))} label="Full Name" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.professionalData.jobTitle} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, jobTitle: e.target.value } }))} label="Job Tittle" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.professionalData.location} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, location: e.target.value } }))} label="Location" variant="outlined" />
            </div>

          </div>
        )
      case 1:
        return (
          <div>

            <h1>Contact Details</h1>
            <div className='d-flex row p-3 gap-2'>
              <TextField id="outlined-basic" value={resumeData.professionalData.email} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, email: e.target.value } }))} label="Email" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.professionalData.phone} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, phone: e.target.value } }))} label="Phone Numner" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.professionalData.github} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, github: e.target.value } }))} label="Git Hub Profile Link" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.professionalData.linkedin} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, linkedin: e.target.value } }))} label="Linkedin Profile Link" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.professionalData.portfolio} onChange={(e) => (setResumeData({ ...resumeData, professionalData: { ...resumeData.professionalData, portfolio: e.target.value } }))} label="Portfolio Profile Link" variant="outlined" />
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <h1>Education Details</h1>
            <div className='d-flex row p-3 gap-2'>
              <TextField id="outlined-basic" value={resumeData.educationData.course} onChange={(e) => (setResumeData({ ...resumeData, educationData: { ...resumeData.educationData, course: e.target.value } }))} label="Coourse Name" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.educationData.collage} onChange={(e) => (setResumeData({ ...resumeData, educationData: { ...resumeData.educationData, collage: e.target.value } }))} label="Collage Name" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.educationData.university} onChange={(e) => (setResumeData({ ...resumeData, educationData: { ...resumeData.educationData, university: e.target.value } }))} label="University Name" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.educationData.year} onChange={(e) => (setResumeData({ ...resumeData, educationData: { ...resumeData.educationData, year: e.target.value } }))} label="Year of Pass Out" variant="outlined" />
            </div>
          </div>
        )
      case 3:
        return (
          <div>
            <h1>Proffesional Details</h1>
            <div className='d-flex row p-3 gap-2'>
              <TextField id="outlined-basic" value={resumeData.experience.jobRole} onChange={(e) => (setResumeData({ ...resumeData, experience: { ...resumeData.experience, jobRole: e.target.value } }))} label="Job Or Internship" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.experience.company} onChange={(e) => (setResumeData({ ...resumeData, experience: { ...resumeData.experience, company: e.target.value } }))} label="commpany Name" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.experience.joblocation} onChange={(e) => (setResumeData({ ...resumeData, experience: { ...resumeData.experience, joblocation: e.target.value } }))} label="Location" variant="outlined" />
              <TextField id="outlined-basic" value={resumeData.experience.duration} onChange={(e) => (setResumeData({ ...resumeData, experience: { ...resumeData.experience, duration: e.target.value } }))} label="Duration" variant="outlined" />
            </div>
          </div>
        )
      case 4:
        return (
          <div>
            <h1>Skills</h1>
            <div className='d-flex align-iteams-cener justfy-content-between p-3 gap-3'>
              <TextField value={inputSkill} onChange={(e) => setInputSkill(e.target.value)} sx={{ width: "600px" }} id="outlined-basic" label="Enter Skills" variant="outlined" />
              <Button onClick={() => addskill(inputSkill)} variant='outlined'>ADD</Button>
            </div>
            <div>
              <h3>Suggestions :</h3>
              <div className='d-flex gap-4 mt-3 flex-wrap'>
                {skillSuggestion.map((skill) => <Button onClick={() => addskill(skill)} variant='outlined'>{skill}</Button>)}

              </div>
            </div>
            <div>
              <h3 className='mt-3'>Added Skills</h3>
              <div className='d-flex flex-wrap gap-4 mt-3'>
                {resumeData.skills.map((iteam) => (
                  <span className='btn btn-primary me-3 mb-2'>{iteam} <button onClick={() => handelselSkill(iteam)} className='btn text-light'>X</button></span>
                ))}



              </div>
            </div>
          </div>
        )
      case 5:
        return (
          <div>
            <h1>Summary</h1>
            <div className='d-flex row p-3 gap-2'>
              <TextField value={resumeData.summary.summary} multiline rows={5} id="outlined-basic" onChange={(e) => (setResumeData({ ...resumeData, summary: e.target.value }))} label="Wirte a short summary of your self" variant="outlined" />

            </div>
          </div>
        )
    }

  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {renderStepArrayContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default StepperForms