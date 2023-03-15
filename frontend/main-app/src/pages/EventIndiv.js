import { Typography, Button, Box } from '@mui/material';
import { Form } from "react-router-dom";
import EventPhotos from "../components/EventPhotos";
import EventDetails from "../components/EventDetails";

export default function EventIndiv() {
    return ( 
        <div>
            <div className="mx-5 mb-5 justify-content-between d-flex my-5">
              <div className="my-auto">
                <Button variant='contained' component='a' href='/Events'>Go Back to Events</Button>
              </div>
              <div className="text-center">
                <Typography variant='h4'>Datathon 2023</Typography>
                <Typography variant='p'>Check out the details for this exciting event!</Typography>
              </div>
              <div className="my-auto">
                <Button variant='contained' component='a' href='/Attendance'>Check Sign Up Sheet</Button>
              </div>
            </div>
            <EventPhotos></EventPhotos>
            <EventDetails></EventDetails>
        </div>
    )
}