import React, { useEffect, useState } from 'react';
import { Typography, Button, IconButton, TextField, Box } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Form } from "react-router-dom";
import AttendanceTable from "../components/AttendanceTable";

export default function Attendance() {
    const [messageTextArea, setMessageTextArea] = useState(null); 

    function handleBroadcastClick() { 
        setMessageTextArea(<Box component="form" onSubmit={handleSubmit} className="w-100 d-flex">
            <TextField id="messageText" name="messageText" size="small" placeholder='Broadcast a message to all' fullWidth sx={{ marginX: 3 }}></TextField>
            <Button type="submit" variant="contained" color='secondary'>Send</Button>
        </Box>)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            messageText: data.get('messageText'),
        });
    };

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
                <Button variant='contained' component='label'>
                    Import Sign Up Sheet
                    <input type="file" hidden/>
                </Button>
              </div>
            </div>
            <div className='mx-5 d-flex'>
                <Button variant='contained' color="secondary" onClick={() => handleBroadcastClick()}>
                    <CampaignIcon />
                </Button>
                {messageTextArea}
            </div>
            <div className="m-5"> 
                <AttendanceTable></AttendanceTable>
            </div>
        </div>
    )
}