import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
    const [gender, setGender] = useState(''); 
    const [degree, setDegree] = useState(''); 

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleDegreeChange = (event) => { 
        setDegree(event.target.value);
    }

    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Basic Details
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="matricNum"
                    name="matricNum"
                    label="Matriculation Number"
                    fullWidth 
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="matricName"
                    name="matricName"
                    label="Name as per Matriculation"
                    fullWidth 
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="smuEmailNoFac"
                    name="smuEmailNoFac"
                    label="SMU Email (Without Faculty)"
                    fullWidth 
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="smuEmailWithFac"
                    name="smuEmailWithFac"
                    label="SMU Email (With Faculty)"
                    fullWidth 
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        labelId="gender"
                        id="gender"
                        value={gender}
                        label="Gender"
                        onChange={handleGenderChange}
                    >
                        <MenuItem value={'M'}>Male</MenuItem>
                        <MenuItem value={'F'}>Female</MenuItem>
                    </Select>
                    
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
                <FormControl fullWidth>
                    <InputLabel>Degree</InputLabel>
                    <Select
                        labelId="degree"
                        id="degree"
                        value={degree}
                        label="degree"
                        onChange={handleDegreeChange}
                    >
                        <MenuItem value={'is'}>Information Systems</MenuItem>
                        <MenuItem value={'cs'}>Computer Science</MenuItem>
                        <MenuItem value={'se'}>Software Engineering</MenuItem>
                        <MenuItem value={'cl'}>Computing and Law</MenuItem>
                        <MenuItem value={'econ'}>Economics</MenuItem>
                        <MenuItem value={'biz'}>Business</MenuItem>
                        <MenuItem value={'acc'}>Accountancy</MenuItem>
                        <MenuItem value={'socsci'}>Social Science</MenuItem>
                        <MenuItem value={'law'}>Law</MenuItem>
                        <MenuItem value={'cis'}>College of Integrative Studies</MenuItem>
                    </Select>
                    
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="telegram"
                    name="telegram"
                    label="Telegram Username"
                    fullWidth 
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={7}>
                <TextField
                    required
                    id="phoneNum"
                    name="phoneNum"
                    label="Contact Number"
                    fullWidth 
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={5}>
                <FormControlLabel
                    control={<Checkbox color="primary" name="saveAddress" value="yes" />}
                    label="Allow others to see"
                />
            </Grid>
            
            {/* <Grid item xs={12}>
            <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
            />
            </Grid> */}
        </Grid>
        </React.Fragment>
    );
}