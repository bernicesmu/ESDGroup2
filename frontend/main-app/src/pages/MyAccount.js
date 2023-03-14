import MembersTable from "../components/MembersTable";
import { Typography, Box, TextField, Select, MenuItem, Autocomplete, Checkbox, FormGroup, FormControlLabel, Grid } from '@mui/material';
import { Form } from "react-router-dom";
import MemberCreateForm from "../components/MemberCreateForm";
export default function MemberCreate() {
    return ( 
        <div>
            <div className="text-center my-5">
              <Typography variant='h4'>My Account</Typography>
              <Typography variant='p'>Everything about you, and only you!</Typography>
            </div>
            <div className="mx-5">
            </div>
        </div>
    )
}