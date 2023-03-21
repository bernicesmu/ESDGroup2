import React, { useEffect, useState } from 'react';
import { TextField, Autocomplete, Checkbox, FormGroup, FormControlLabel, Grid, Button } from '@mui/material';

// Generate Order Data

export default function EventCreateForm(props) {
    const [eventDetails, setEventDetails] = useState({
        clubName: "SMUBIA",
        eventName: "",
        eventConfirmed: true, 
        eventType: "",
        eventLocation: "",
        eventDate: "01-01-23",
        eventFromTime: "x", 
        eventToTime: "x", 
        eventSignUpForm: "",
    });
    const [userInput, setUserInput] = useState({ 
        eventType: "", 
        eventLocation: "", 
    })

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(eventDetails);
    };

    function handleChange(event) {
        console.log("oiewf")
        setEventDetails({ ...eventDetails, [event.target.name]: event.target.value });
    };

    function handleAutoCompleteChange(event) { 
        console.log(event.target.inputValue)
        setUserInput({ ...userInput, [event.target.name]: event.target.inputValue }); 
    }


    return (
        <form onSubmit={(event) => handleSubmit(event)}> 
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="clubName" label="Club Name" name="clubName" value={eventDetails.clubName} disabled fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField id="eventName" label="Event Name" name="eventName" value={eventDetails.eventName} fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox value={eventDetails.eventConfirmed} />} label="Confirmed"  onChange={(event) => handleChange(event)}/>
                    </FormGroup>
                </Grid>
                {/* bernice: ensure that the user input is reflected in the Autocomplete component */}
                <Grid item xs={12} sm={6}>
                    <Autocomplete   disablePortal
                                    fullWidth
                                    id="eventType"
                                    name="eventType"
                                    options={['Sports', 'Networking']}
                                    sx={{width:'100%'}}
                                    value={eventDetails.eventType}
                                    // inputValue={userInput.eventType}
                                    // onInputChange={(event) => handleAutoCompleteChange(event)}
                                    inputValue={userInput.eventType}
                                    onInputChange={(event, newInputValue) => {
                                        setUserInput({ ...userInput, eventType: newInputValue });
                                        handleChange(event);
                                    }}
                                    onChange={(event) => handleChange(event)}
                                    renderInput={(params) => <TextField {...params} label="Event Type" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete   disablePortal
                                    fullWidth
                                    id="eventLocation"
                                    name="eventLocation"
                                    value={eventDetails.eventLocation}
                                    options={['SCIS GSR 3-1', 'SOE SR 2-1']}
                                    sx={{ width: '100%' }}
                                    onChange={(event) => handleChange(event)}
                                    renderInput={(params) => <TextField {...params} label="Event Location" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="eventDate" label="Event Date" name="eventDate" value={eventDetails.eventDate} type='date' fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="eventFromTime" label="Event Time (From)" name="eventFromTime" value={eventDetails.eventFromTime} type="time" fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="eventToTime" label="Event Time (To)" name="eventToTime" value={eventDetails.eventToTime} type="time" fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="eventSignUpForm" label="Event Sign Up Form" name="eventSignUpForm" value={eventDetails.eventSignUpForm} type="url" fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
            </Grid>
            <Button variant='contained' sx={{marginTop:3}} className="float-start" component="a" href="/Events">Go Back to Events</Button>
            <Button type="submit" variant='contained' sx={{marginTop:3}} className="float-end">Submit</Button>
        </form>
  );
}