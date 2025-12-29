import React, { use, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { Height, Maximize } from '@mui/icons-material';
import { getAResumeAPI } from '../services/allApi';


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

function Edit({ editId }) {
  //to save getEditResumeData result
  const [editDta, seteditData]=useState({});

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

  // console.log(seteditData);
  

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
                <TextField value={editDta?.professionalData?.name} id="outlined-basic" label="Full Name" variant="outlined" />
                <TextField value={editDta?.professionalData?.jobTitle}id="outlined-basic" label="Job Tittle" variant="outlined" />
                <TextField value={editDta?.professionalData?.location}id="outlined-basic" label="Location" variant="outlined" />
              </div>

            </div>
            <div>

              <h1>Contact Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta?.professionalData?.email} id="outlined-basic" label="Email" variant="outlined" />
                <TextField value={editDta?.professionalData?.phone}id="outlined-basic" label="Phone Numner" variant="outlined" />
                <TextField value={editDta?.professionalData?.github}id="outlined-basic" label="Git Hub Profile Link" variant="outlined" />
                <TextField value={editDta?.professionalData?.linkedin}id="outlined-basic" label="Linkedin Profile Link" variant="outlined" />
                <TextField value={editDta?.professionalData?.portfolio}id="outlined-basic" label="Portfolio Profile Link" variant="outlined" />
              </div>
            </div>
            <div>
              <h1>Education Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta?.educationData?.course}  id="outlined-basic" label="Coourse Name" variant="outlined" />
                <TextField value={editDta?.educationData?.collage}id="outlined-basic" label="Collage Name" variant="outlined" />
                <TextField value={editDta?.educationData?.university}id="outlined-basic" label="University Name" variant="outlined" />
                <TextField value={editDta?.educationData?.year}id="outlined-basic" label="Year of Pass Out" variant="outlined" />
              </div>
            </div>
            <div>
              <h1>Proffesional Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta?.experience?.jobRole} id="outlined-basic" label="Job Or Internship" variant="outlined" />
                <TextField value={editDta?.experience?.company}id="outlined-basic" label="commpany Name" variant="outlined" />
                <TextField value={editDta?.experience?.joblocation}id="outlined-basic" label="Location" variant="outlined" />
                <TextField value={editDta?.experience?.duration}id="outlined-basic" label="Duration" variant="outlined" />
              </div>
            </div>
            <div>
              <h1>Skills</h1>
              <div className='d-flex align-iteams-cener justfy-content-between p-3 gap-3'>
                <TextField sx={{ width: "600px" }} id="outlined-basic" label="Enter Skills" variant="outlined" />
                <Button variant='outlined'>ADD</Button>
              </div>
              <div>
                <h3>Suggestions :</h3>
                <div className='d-flex gap-4 mt-3 flex-wrap'>
                  <Button variant='outlined'>HTML</Button>
                </div>
              </div>
              <div>
                <h3>Added Skills</h3>
                <div className='d-flex flex-wrap gap-4 mt-3'>
                  <span className='btn btn-primary me-3 mb-2'>HTML <button className='btn text-light'>X</button>
                  </span>

                </div>
              </div>
            </div>
            <div>
              <h1>Proffesional Details</h1>
              <div className='d-flex row p-3 gap-2'>
                <TextField value={editDta.summary} multiline rows={5} id="outlined-basic" label="Wirte a short summary of your self" variant="outlined" />

              </div>
            </div>
            <div className='d-flex justify-content-end mt-2 gap-3'>
              <button className='btn btn-primary'>Rest</button>
              <button className='btn btn-primary'>Update</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Edit