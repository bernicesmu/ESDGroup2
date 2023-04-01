import React, { useEffect, useState } from 'react';
import MembersTable from "../components/MembersTable";
import { Typography, Box, TextField, Select, MenuItem, Autocomplete, Checkbox, FormGroup, FormControlLabel, Grid } from '@mui/material';
import { Form } from "react-router-dom";
import EventCreateForm from "../components/EventCreateForm";
import { getClubNameById } from '../services/ClubAPI';

export default function EventCreate() {
    const [clubName, setClubName] = useState(''); 
    const [formElement, setFormElement] = useState(null); 

    useEffect(() => { 
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const clubIdFromURL = urlParams.get('clubId')
        getClubNameById(clubIdFromURL) 
            .then(response => {
                setClubName(response); 
                setFormElement(<EventCreateForm clubName={response}/>)
            })
            .catch(error => { 
                console.log(error.message)
            })
    }, [])
    return ( 
        <div>
            <div className="text-center my-5">
              <Typography variant='h4'>Create a New {clubName} Event</Typography>
              <Typography variant='p'>What new initiatives are you pushing out?</Typography>
            </div>
            <div className="w-75 mx-auto">
                {formElement}
            </div>
        </div>
    )
}