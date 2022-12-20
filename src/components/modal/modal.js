import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled'
import { TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Div = styled.div`
height: 100%;
width: 100%;
`

export default function BasicModal({setFilledArr}) {
  const [open, setOpen] = React.useState(false);
  const [vks, setVks] = useState({
    startTime:'',
    endTime:'',
    name:'',
    discription:'',
    organizator: ''
  })
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
        setFilledArr(vks)
        setOpen(false)
       
    };


  return (
    <div style={{width:'100%', height:'100%'}}>
      {/* <Button onClick={handleOpen}></Button> */}
      <Div onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField id="outlined-basic-startTime" label="startTime" variant="outlined" fullWidth
        onChange={(e)=>{setVks({...vks, startTime:e.target.value})}}
        />
        <TextField id="outlined-basic-endTime" label="endTime" variant="outlined" fullWidth
        onChange={(e)=>{setVks({...vks, endTime:e.target.value})}}
        />
        <TextField id="outlined-basic-name" label="name" variant="outlined" fullWidth
        onChange={(e)=>{setVks({...vks, name:e.target.value})}}
        />
        <TextField id="outlined-basic-discription" label="discription" variant="outlined" fullWidth
        onChange={(e)=>{setVks({...vks, discription:e.target.value})}}
        />
        <TextField id="outlined-basic-organizator" label="organizator" variant="outlined" fullWidth
        onChange={(e)=>{setVks({...vks, organizator:e.target.value})}}
        />
        <Button onClick={handleClose}>Готово</Button>
        </Box>
      </Modal>
    </div>
  );
}