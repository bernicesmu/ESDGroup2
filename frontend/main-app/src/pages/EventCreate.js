import MembersTable from "../components/MembersTable";
import { Typography, Box, TextField, Select, MenuItem, Autocomplete, Checkbox, FormGroup, FormControlLabel, Grid } from '@mui/material';
import { Form } from "react-router-dom";
import EventCreateForm from "../components/EventCreateForm";

export default function EventCreate() {
    return ( 
        <div>
            <div className="text-center my-5">
              <Typography variant='h4'>Create a New SMUBIA Event</Typography>
              <Typography variant='p'>What new initiatives are you pushing out for SMUBIA?</Typography>
            </div>
            <div className="w-75 mx-auto">
                <EventCreateForm />
            </div>
        </div>
    )
}