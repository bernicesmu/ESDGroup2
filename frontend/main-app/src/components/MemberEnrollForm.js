import React, { useEffect, useState } from 'react';
import { Typography, TextField, Autocomplete, Select, MenuItem, InputLabel, Checkbox, FormGroup, FormControlLabel, Grid, Button } from '@mui/material';

//This is the file used to invite a member by a club exco
export default function MemberEnrollForm(props) {
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

    //Ajax code 
    const [showInfo, setShowInfo] = useState(false);
    const [showError, setError] = useState(false);
    const [data, setData] = useState([]);
    const getMemberInfo = () => {
      fetch('http://localhost:8080/student/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({matricNum: memberDetails.matricNum})
      })
      .then(response => response.json())
      .then(data => {
        setData(data);
        // console.log(data);
        if (data.hasOwnProperty("error")){
            // console.log("Error");
            setError(true)
            setShowInfo(false);
        } else {
            setShowInfo(true);
            setError(false);
        }
      })
      .catch(error => console.error(error));
    }

    const enrollMember = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log("Enrolled " + data.matricNum + "!");
    };


    // const handleSubmit = (event) => {
    //     // prevents the submit button from refreshing the page
    //     event.preventDefault();
    //     console.log(memberDetails);
    // };

    function handleChange(event) {
        setMemberDetails({ ...memberDetails, [event.target.name]: event.target.value });
    };

    // function handleAutoCompleteChange(event) { 
    //     console.log(event.target.inputValue)
    //     setUserInput({ ...userInput, [event.target.name]: event.target.inputValue }); 
    // }


    return (
        <form> 
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Administrative Details</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="clubName" label="Club Name" name="clubName" value={memberDetails.clubName} disabled fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="matricNum" label="Matric Number" name="matricNum" value={memberDetails.matricNum} fullWidth onChange={(event) => handleChange(event)}></TextField>
                </Grid>

                {showError && (
                    <React.Fragment>
                        <Grid item xs={12}>{/* Force next row */}</Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant='h5'>No user exists with that matric number! Did you key in the right number?</Typography>
                        </Grid>
                    </React.Fragment>
                )}

                {showInfo && (
                <React.Fragment>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Review Member Details</Typography>
                </Grid>
                <Grid item xs={12}>{/* Force next row */}</Grid>
                
                <Grid item xs={12} sm={4}>
                    <TextField disabled={true} id="matriculatedName" label="Matriculated Name" name="matriculatedName" value={data.matriculatedName} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField disabled={true} id="gender"  label="Gender" name="gender" value={data.gender} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField disabled={true} id="intakeYear" label="Intake Year" name="intakeYear" value={data.intakeYear} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField disabled={true} id="degree" label="Degree" name="degree" value={data.degree} fullWidth/>
                </Grid>

                <Grid item xs={12}>{/* Force next row */}</Grid>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Contact Details</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField disabled={true} id="smuEmail"  label="SMU Email" name="smuEmail" value={data.smuEmail} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField disabled={true} id="telegramUser" label="Telegram Handle" name="telegramUser" value={data.telegramUser} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField disabled={true} id="phoneNum"  label="Phone Number" name="phoneNum" value={data.phoneNum} fullWidth/>
                </Grid>

                <Grid item xs={12}>{/* Force next row */}</Grid>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Medical Details</Typography>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField disabled={true} id="bloodType" label="Blood Type" name="bloodType" value={data.bloodType} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField disabled={true} id="vaccinationStatus" label="Vaccination Status" name="vaccinationStatus" value={data.vaccinationStatus} fullWidth/>
                </Grid>
               
                <Grid item xs={12} sm={6}>
                    <TextField disabled={true} id="medicalHistory"  label="Medical History" name="medicalHistory" value={data.medicalHistory} fullWidth/>
                </Grid>

                <Grid item xs={12}>{/* Force next row */}</Grid>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5'>Next-of-Kin Details</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField disabled={true} id="nokName" label="NoK Name" name="nokName" value={data.nokName} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField disabled={true} id="nokRelationship" label="NoK Relationship" name="nokRelationship" value={data.nokRelationship} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField disabled={true} id="nokNumber" label="NoK Number"name=" nokNumber" value={data.nokNumber} fullWidth/>
                </Grid>
                </React.Fragment>
                ) }
               
            </Grid>
            <Grid>
                <Button variant='contained' sx={{marginTop:3}} className="float-start" component="a" href="/Events">Go Back to Events</Button>
                {!showInfo && (<Button onClick={getMemberInfo} variant='contained' sx={{marginTop:3, marginLeft:3}}  alignItems="flex-start">View Member Info</Button>)}
                {showInfo && (<Button onClick={enrollMember} variant='contained' sx={{marginTop:3, marginLeft:3}} alignItems="flex-start" >Enroll Member</Button>)}
            </Grid>
        </form>
  );
}