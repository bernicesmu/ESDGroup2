import MembersTable from "../components/MembersTable";
import { Typography, Box, TextField, Select, MenuItem, Autocomplete, Checkbox, FormGroup, FormControlLabel, Grid } from '@mui/material';
import { Form } from "react-router-dom";
import MemberCreateForm from "../components/MemberCreateForm";
//Defunct for now
export default function MemberCreate() {
    return ( 
        <div>
            <div className="text-center my-5">
              <Typography variant='h4'>Create a new Member</Typography>
              <Typography variant='p'>Individual Sign Ups</Typography>
            </div>
            <div className="w-75 mx-auto">
                <MemberCreateForm />
            </div>
        </div>
    )
}