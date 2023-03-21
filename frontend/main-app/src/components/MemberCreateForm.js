import React, { useEffect, useState } from 'react';
import { Typography, TextField, Autocomplete, Select, MenuItem, InputLabel, Checkbox, FormGroup, FormControlLabel, Grid, Button } from '@mui/material';

//Now defunct, might be used as an "edit account info form in the future."

export default function MemberCreateForm(props) {
    const [memberDetails, setMemberDetails] = useState({
        clubName: "SMUBIA",
        matriculatedName: "",
        matricNum: "", 
        smuEmail: "",
        gender: "",
        degree: "",
        intakeYear: "", 
        telegramUser: "", 
        phoneNum: "",
        vaccinationStatus: "",
        medicalHistory: "",
        bloodType: "",
        nokName: "",
        nokRelationship: "",
        nokNumber: "",
    });
    const [userInput, setUserInput] = useState({ 
        eventType: "", 
        eventLocation: "", 
    })

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(memberDetails);
    };

    function handleChange(event) {
        setMemberDetails({ ...memberDetails, [event.target.name]: event.target.value });
    };

    // function handleAutoCompleteChange(event) { 
    //     console.log(event.target.inputValue)
    //     setUserInput({ ...userInput, [event.target.name]: event.target.inputValue }); 
    // }


    return (
        <form onSubmit={(event) => handleSubmit(event)}> 

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Administrative Details</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="clubName" label="Club Name" name="clubName" value={memberDetails.clubName} disabled fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TextField id="matriculatedName" label="Matriculated Name" name="matriculatedName" value={memberDetails.matriculatedName} fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        displayEmpty
                        labelId="gender"
                        id="gender"
                        name="gender"
                        value={memberDetails.gender}
                        label="Age"
                        onChange={(event) => handleChange(event)}
                    >
                        <MenuItem value={''}>Gender</MenuItem>
                        <MenuItem value={'m'}>M</MenuItem>
                        <MenuItem value={'f'}>F</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="matricNum" label="Matric Number" name="matricNum" value={memberDetails.matricNum} fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                {/* <Grid item xs={12} sm={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox value={eventDetails.eventConfirmed} />} label="Confirmed"  onChange={(event) => handleChange(event)}/>
                    </FormGroup>
                </Grid> */}
                {/* bernice: ensure that the user input is reflected in the Autocomplete component */}
                {/* <Grid item xs={12} sm={6}>
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
                </Grid> */}
                <Grid item xs={12} sm={2}>
                    <Select
                            displayEmpty
                            labelId="intakeYear"
                            id="intakeYear"
                            name="intakeYear"
                            value={memberDetails.intakeYear}
                            // label="First Degree"
                            onChange={(event) => handleChange(event)}
                        >
                        <MenuItem value={""}>Year</MenuItem>
                        <MenuItem value={'AY22/23'}>AY22/23</MenuItem>
                        <MenuItem value={'AY21/22'}>AY21/22</MenuItem>
                        <MenuItem value={'AY20/21'}>AY20/21</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                            displayEmpty
                            labelId="degree"
                            id="degree"
                            name="degree"
                            value={memberDetails.degree}
                            // label="First Degree"
                            onChange={(event) => handleChange(event)}
                        >
                        <MenuItem value={""}>First Degree</MenuItem>
                        <MenuItem value={'scis'}>Information Systems</MenuItem>
                        <MenuItem value={'soa'}>Accountancy</MenuItem>
                        <MenuItem value={'sol'}>Law</MenuItem>
                        <MenuItem value={'sob'}>Business</MenuItem>
                        <MenuItem value={'soss'}>Social Sciences</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Contact Details</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="smuEmail" label="SMU Email (Include in school)" name="smuEmail" value={memberDetails.smuEmail} type='text' fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="telegramUser" label="Telegram Handle (Include @)" name="telegramUser" value={memberDetails.telegramUser} type="text" fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="phoneNum" label="Phone No." name="phoneNum" value={memberDetails.phoneNum} type="text" fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Medical Details</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                        <Select
                            displayEmpty
                            labelId="bloodType"
                            id="bloodType"
                            name="bloodType"
                            value={memberDetails.bloodType}
                            // label="First Degree"
                            onChange={(event) => handleChange(event)}
                        >
                        <MenuItem value={""}>Blood Type</MenuItem>
                        <MenuItem value={'A+'}>A+</MenuItem>
                        <MenuItem value={'A-'}>A-</MenuItem>
                        <MenuItem value={'B+'}>B+</MenuItem>
                        <MenuItem value={'B-'}>B-</MenuItem>
                        <MenuItem value={'O+'}>O+</MenuItem>
                        <MenuItem value={'O-'}>O-</MenuItem>
                        <MenuItem value={'AB+'}>AB+</MenuItem>
                        <MenuItem value={'AB-'}>AB-</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                        <Select
                            displayEmpty
                            labelId="vaccinationStatus"
                            id="vaccinationStatus"
                            name="vaccinationStatus"
                            value={memberDetails.vaccinationStatus}
                            // label="First Degree"
                            onChange={(event) => handleChange(event)}
                        >
                        <MenuItem value={""}>Vaccination Status</MenuItem>
                        <MenuItem value={'fv'}>Fully Vaccinated</MenuItem>
                        <MenuItem value={'pv'}>Partially Vaccinated</MenuItem>
                        <MenuItem value={'nv'}>Not Vaccinated</MenuItem>
                    </Select>
                   
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="medicalHistory" label="Medical History" name="medicalHistory" value={memberDetails.medicalHistory} type='text' fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Next-of-Kin Details</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="nokName" label="NoK Name" name="nokName" value={memberDetails.nokName} type='text' fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="nokRelationship" label="NoK Relationship" name="nokRelationship" value={memberDetails.nokRelationship} type='text' fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="nokNumber" label="NoK No." name="nokNumber" value={memberDetails.nokNumber} type="text" fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>
            </Grid>

            <Button variant='contained' sx={{marginTop:3}} className="float-start" component="a" href="/Events">Go Back to Events</Button>
            <Button type="submit" variant='contained' sx={{marginTop:3}} className="float-end">Register Member</Button>
        </form>
  );
}