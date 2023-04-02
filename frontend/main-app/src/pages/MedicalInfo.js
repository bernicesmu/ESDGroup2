import MembersTable from "../components/MembersTable";
import { Typography, Box, TextField, Select, MenuItem, Autocomplete, Checkbox, FormGroup, FormControlLabel, Grid } from '@mui/material';
import { Form } from "react-router-dom";
import MemberEnrollForm from "../components/MemberEnrollForm";
export default function MemberEnroll() {
    return ( 
        <div>
            <div className="text-center my-5">
              <Typography variant='h4'>Create a new Member</Typography>
              <Typography variant='p'>Individual Sign Ups</Typography>
            </div>
            <div className="w-75 mx-auto">
                <MemberEnrollForm />
            </div>
        </div>
    )
}