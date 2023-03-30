import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';
import UploadForm from './UploadForm';
import CampaignIcon from '@mui/icons-material/Campaign';
import AttendanceTable from '../components/AttendanceTable';
import { MuiFileInput } from 'mui-file-input'
import { uploadSignUps, getSignUpByEventId, broadcastMessage } from '../services/UploadSignUpAPI'; 

export default function Attendance() {
  const [messageTextArea, setMessageTextArea] = useState(null);
  const [attendanceData, setAttendanceData] = useState(['']);
  const [attendanceTable, setAttendanceTable] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(null);
  const [listOfStudentMatric, setListOfStudentMatric] = useState(Array(0));
  const [eventId, setEventId] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventIdFromURL = urlParams.get('eventId')
    setEventId(eventIdFromURL)
    getSignUpByEventId(eventIdFromURL)
      .then(response => { 
        setAttendanceData(response); 
        console.log(response)
        let student_details = response.data.student_result.details;
        setAttendanceTable(<AttendanceTable data={student_details}></AttendanceTable>)
        let newListofMatric = [] 
        for (let stuDet of student_details) { 
          newListofMatric.push(stuDet.matricNum); 
        }
        setListOfStudentMatric(newListofMatric);
      })
      .catch(error => {
        console.log(error.message);
      })
  }, [])

  function handleBroadcastClick() {
    setMessageTextArea(
      <Box component="form" onSubmit={handleBroadcastSubmit} className="w-100 d-flex">
        <TextField id="messageText" name="messageText" size="small" placeholder='Broadcast a message to all' fullWidth sx={{ marginX: 3 }}></TextField>
        <Button type="submit" variant="contained" color='secondary'>Send</Button>
      </Box>
    )
  }

  const handleBroadcastSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      messageText: data.get('messageText'),
      //matricNums: (['01234', '54672'])
      matricNums: listOfStudentMatric
    });
    let messageData = {
      messageText: data.get('messageText'),
      //matricNums: (['01234', '54672'])
      matricNums: listOfStudentMatric
    }; 
    
    broadcastMessage(messageData) 
      .then(response => { 
        console.log(response)
      })
      .catch(error => { 
        console.log(error.message)
      })

    // sending this data to backend upload_student.py

    // fetch('http://localhost:5110/broadcast', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         messageText:data.get('messageText'),
    //         //matricNums: (['01234', '123411']) 
    //         matricNums:listOfStudentMatric
    //     }),
    //     headers:{
    //         'Content-Type' : 'application/json'
    //     }
    // })

    // .then(response => {
    //     if (response.ok){
    //         console.log('Message sent successfully');
    //     } else {
    //         console.error('Error sending message')
    //     }
    // })

    // .catch(error => {
    //     console.error('Error sending message!', error);
    // });
  };

  const handleFileUpload = (file) => {
    const formData = new FormData();
    // let file = event.target.value
    formData.append('file', file);
    console.log(eventId)
    formData.append('eventId', eventId)
    console.log(formData)
    uploadSignUps(formData)
      .then(response => {
        console.log(response); 
        window.location.reload()
      })
      .catch(error => {
        console.log(error.message);
      })
    // axios.post('http://localhost:5105/upload', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // .then(res => {
    //   console.log(res.data);
    //   setAttendanceData(res.data.data);
    // })
    // .catch(err => console.error(err));
  }

  return (
    <div>
      <div className="mx-5 mb-5 justify-content-between d-flex my-5">
        <div className="my-auto">
          <Button variant='contained' component='a' href='/Event'>Go Back to Datathon 2023</Button>
          </div>
          <div className="text-center">
          <Typography variant='h4'>XXX</Typography>
          <Typography variant='p'>Look at who are excited for this event!</Typography>
        </div>
        <div className="my-auto w-25">
          <MuiFileInput onChange={handleFileUpload} placeholder="Upload Sign Up Sheet" value={fileUploaded} />
          {/* <Button variant='contained' onChange={handleFileUpload} component='label'>Upload File<input onChange={handleFileUpload} type='file' value={fileUploaded} hidden></input></Button> */}
          {/* <UploadForm handleFileUpload={handleFileUpload} /> */}
        </div>
      </div>
      <div className='mx-5 d-flex'>
        <Button variant='contained' color="secondary" onClick={() => handleBroadcastClick()}>
          <CampaignIcon />
        </Button>
        {messageTextArea}
      </div>
      <div className="m-5">
        {attendanceTable}
        {/* <AttendanceTable data={attendanceData}></AttendanceTable> */}
      </div>
    </div>
  );
}