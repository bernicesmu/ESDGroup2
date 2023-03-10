import MembersTable from "../components/MembersTable";
import { Typography, Button } from '@mui/material';

export default function Events() {
    return ( 
        <div>
            <div className="text-center my-5">
              <Typography variant='h4'>SMUBIA's Events</Typography>
              <Typography variant='p'>View all the exciting events that your club has done or planned</Typography>
            </div>
            <div className="mx-5 mb-5 justify-content-between d-flex">
              <Button variant='contained' component='a' href='/MyClubs'>Go Back to My Clubs</Button>
              <Button variant='contained' component='a' href='/EventCreate'>Create Event</Button>
            </div>
            <div className="mx-5">
              
            </div>
        </div>
    )
}