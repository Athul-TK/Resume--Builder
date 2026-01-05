import React, { use, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { Height, Maximize } from '@mui/icons-material';
import { getAResumeAPI, updateResumeAPI } from '../services/allApi';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
  maxHeight: '90vh'

};

function Edit({ editId,setResumeData }) {
  //
  const [inputSkill, setInputSkill] = useState("");
  const skillSuggestion = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js",]
  //to save getEditResumeData result
  const [editDta, seteditData] = useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
    getEditResumeData();
  };
  const handleClose = () => setOpen(false);
  console.log(editId);

  //get data from json server using editId


  const getEditResumeData = async () => {
    try {
      const result = await getAResumeAPI(editId);
      console.log(result);
      seteditData(result.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  console.log(editDta);


  //add skil
  const addskill = (inputSkill) => {
    console.log(inputSkill);
    if (!inputSkill) {
      alert("Please Add a skill")
    }
    else {
      if (editDta.skills.includes(inputSkill)) {
        alert("Skill already added")
      }
      else {
        seteditData({ ...editDta, skills: [...editDta.skills, inputSkill] })
      }
    }

  }

  //delect

  const handelselSkill = (delSkill) => {
    console.log(delSkill);
    seteditData({ ...editDta, skills: editDta.skills.filter((iteam) => iteam != delSkill) })

  }

  //update resume
  const updateResume = async () => {
    try {
      const result = await updateResumeAPI(editId, editDta)
      console.log(result);

      if(result.status==200){
        setResumeData(result.data)
        handleClose()
      }
      else{
        alert("Something Went Worng")
      }

    } catch {
      console.log(error);

    }
  }

  return (
    <>
      <button onClick={handleOpen} className='btn btn-primary'><FaRegEdit /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Resume
          </Typography>
          <div>
            <div>
              <h1>Person Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta?.professionalData?.name} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, name: e.target.value } })} id="outlined-basic" label="Full Name" variant="outlined" />
                <TextField value={editDta?.professionalData?.jobTitle} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, jobTitle: e.target.value } })} id="outlined-basic" label="Job Tittle" variant="outlined" />
                <TextField value={editDta?.professionalData?.location} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, location: e.target.value } })} id="outlined-basic" label="Location" variant="outlined" />
              </div>

            </div>
            <div>

              <h1>Contact Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta?.professionalData?.email} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, email: e.target.value } })} id="outlined-basic" label="Email" variant="outlined" />
                <TextField value={editDta?.professionalData?.phone} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, phone: e.target.value } })} id="outlined-basic" label="Phone Numner" variant="outlined" />
                <TextField value={editDta?.professionalData?.github} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, github: e.target.value } })} id="outlined-basic" label="Git Hub Profile Link" variant="outlined" />
                <TextField value={editDta?.professionalData?.linkedin} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, linkedin: e.target.value } })} id="outlined-basic" label="Linkedin Profile Link" variant="outlined" />
                <TextField value={editDta?.professionalData?.portfolio} onChange={(e) => seteditData({ ...editDta, professionalData: { ...editDta.professionalData, portfolio: e.target.value } })} id="outlined-basic" label="Portfolio Profile Link" variant="outlined" />
              </div>
            </div>
            <div>
              <h1>Education Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta?.educationData?.course} onChange={(e) => seteditData({ ...editDta, educationData: { ...editDta.educationData, course: e.target.value } })} id="outlined-basic" label="Coourse Name" variant="outlined" />
                <TextField value={editDta?.educationData?.collage} onChange={(e) => seteditData({ ...editDta, educationData: { ...editDta.educationData, collage: e.target.value } })} id="outlined-basic" label="Collage Name" variant="outlined" />
                <TextField value={editDta?.educationData?.university} onChange={(e) => seteditData({ ...editDta, educationData: { ...editDta.educationData, university: e.target.value } })} id="outlined-basic" label="University Name" variant="outlined" />
                <TextField value={editDta?.educationData?.year} onChange={(e) => seteditData({ ...editDta, educationData: { ...editDta.educationData, year: e.target.value } })} id="outlined-basic" label="Year of Pass Out" variant="outlined" />
              </div>
            </div>
            <div>
              <h1>Proffesional Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta?.experience?.jobRole} onChange={(e) => seteditData({ ...editDta, experience: { ...editDta.experience, jobRole: e.target.value } })} id="outlined-basic" label="Job Or Internship" variant="outlined" />
                <TextField value={editDta?.experience?.company} onChange={(e) => seteditData({ ...editDta, experience: { ...editDta.experience, company: e.target.value } })} id="outlined-basic" label="commpany Name" variant="outlined" />
                <TextField value={editDta?.experience?.joblocation} onChange={(e) => seteditData({ ...editDta, experience: { ...editDta.experience, joblocation: e.target.value } })} id="outlined-basic" label="Location" variant="outlined" />
                <TextField value={editDta?.experience?.duration} onChange={(e) => seteditData({ ...editDta, experience: { ...editDta.experience, duration: e.target.value } })} id="outlined-basic" label="Duration" variant="outlined" />
              </div>
            </div>
            <div>
              <h1>Skills</h1>
              <div className='d-flex align-iteams-cener justfy-content-between p-3 gap-3'>
                <TextField value={inputSkill} onChange={(e) => setInputSkill(e.target.value)} sx={{ width: "600px" }} id="outlined-basic" label="Enter Skills" variant="outlined" />
                <Button onClick={() => addskill(inputSkill)} variant='outlined'>ADD</Button>
              </div>
              <div>
                <h3>Suggestions :</h3>
                <div className='d-flex gap-4 mt-3 flex-wrap'>

                  {skillSuggestion.map(iteam => (<Button onClick={() => addskill(iteam)} variant='outlined'>{iteam}</Button>))}
                </div>
              </div>
              <div>
                <h3>Added Skills</h3>
                <div className='d-flex flex-wrap gap-4 mt-3'>
                  {editDta?.skills?.map(iteam => (<span className='btn btn-primary me-3 mb-2'>{iteam} <button onClick={() => handelselSkill(iteam)} className='btn text-light'>X</button>
                  </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h1>Proffesional Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField onChange={(e) => seteditData({ ...editDta, summary: e.target.value })} value={editDta.summary} multiline rows={5} id="outlined-basic" label="Wirte a short summary of your self" variant="outlined" />

              </div>
            </div>
            <div className='d-flex justify-content-end mt-2 gap-3'>
              <button className='btn btn-primary'>Rest</button>
              <button onClick={updateResume} type='button' className='btn btn-primary'>Update</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Edit