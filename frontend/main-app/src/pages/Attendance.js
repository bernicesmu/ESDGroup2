import React, { useState } from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';
import UploadForm from './UploadForm';
import CampaignIcon from '@mui/icons-material/Campaign';
import AttendanceTable from '../components/AttendanceTable';
import axios from 'axios';

export default function Attendance() {
  const [messageTextArea, setMessageTextArea] = useState(null);
  const [attendanceData, setAttendanceData] = useState(['']);

  function handleBroadcastClick() {
    setMessageTextArea(
      <Box component="form" onSubmit={handleSubmit} className="w-100 d-flex">
        <TextField id="messageText" name="messageText" size="small" placeholder='Broadcast a message to all' fullWidth sx={{ marginX: 3 }}></TextField>
        <Button type="submit" variant="contained" color='secondary'>Send</Button>
      </Box>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      messageText: data.get('messageText'),
    });
  };

  const handleFileUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:5105/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
      setAttendanceData(res.data.data);
    })
    .catch(err => console.error(err));
  }

  return (
    <div>
      <div className="mx-5 mb-5 justify-content-between d-flex my-5">
        <div className="my-auto">
          <Button variant='contained' component='a' href='/Event'>Go Back to Datathon 2023</Button>
          </div>
          <div className="text-center">
          <Typography variant='h4'>Datathon 2023 Sign Ups</Typography>
          <Typography variant='p'>Look at who are excited for this event!</Typography>
        </div>
        <div className="my-auto">
          <UploadForm handleFileUpload={handleFileUpload} />
        </div>
      </div>
      <div className='mx-5 d-flex'>
        <Button variant='contained' color="secondary" onClick={() => handleBroadcastClick()}>
          <CampaignIcon />
        </Button>
        {messageTextArea}
      </div>
      <div className="m-5">
        <AttendanceTable data={attendanceData}></AttendanceTable>
      </div>
    </div>
  );
}