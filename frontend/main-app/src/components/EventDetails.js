import { Typography, Box, Grid } from '@mui/material';

export default function EventDetails() {
    return ( 
        <div className="ms-5"> 
            <Typography variant='h5'>Details</Typography>
            <Typography variant='p'>Description:</Typography>
            <Typography variant='p'>Date / Time:</Typography>
            <Typography variant='p'>Location:</Typography>
        </div>
    )
}