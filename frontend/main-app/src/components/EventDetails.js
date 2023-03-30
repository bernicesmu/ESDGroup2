import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { getAllEvents } from '../services/EventAPI'

export default function EventDetails(props) {
    const dateRef = { 
        '01': 'Jan', 
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    }
    function formatDate(date) { 
        let dateArray = date.split('-');
        let day = dateArray[2];
        if (dateArray[2][0] === '0') { 
            day = dateArray[2][1]; 
        }
        let newFormattedDate = day + " " + dateRef[dateArray[1]] + " " + dateArray[0]; 
        return newFormattedDate;
    }

    function formatTime(time) { 
        let timeArray = time.split(":"); 
        let hour; 
        let ampm;
        if (parseInt(timeArray[0]) > 12) { 
            hour = parseInt(timeArray[0]) - 12; 
            ampm = 'PM'; 
        } else { 
            hour = timeArray[0]
            ampm = 'AM'; 
        }
        let newFormattedTime = hour + ":" + timeArray[1] + " " + ampm; 
        return newFormattedTime
    }

    return (   
        <Box className="ms-5" sx={{marginBottom: 15}}> 
            <Typography variant='h5' marginBottom={2}>Details</Typography>
            <Grid item xs={12}>
                <Typography variant='p' fontWeight='bold'>Event Location:  </Typography>
                <Typography variant='p'>{props.event.eventLocation}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='p' fontWeight='bold'>Event Date:  </Typography>
                <Typography variant='p'>{formatDate(props.event.eventDate)}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='p' fontWeight='bold'>Event Time:  </Typography>
                <Typography variant='p'>{formatTime(props.event.eventFromTime)} to {formatTime(props.event.eventToTime)}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='p' fontWeight='bold'>Event Sign Up Form:  </Typography>
                <Typography variant='p'><Box component='a' href={props.event.eventSignUpForm}>link here</Box></Typography>
            </Grid>
        </Box>
    )
}