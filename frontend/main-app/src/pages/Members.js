import MembersTable from "../components/MembersTable";
import { Typography, Button, Box } from '@mui/material';

export default function Members() {
    return ( 
        <div>
            <div className="text-center my-5">
              <Typography variant='h4'>SMUBIA's Members Database</Typography>
              <Typography variant='p'>View all the information about your club members</Typography>
            </div>
            <div className="mx-5 mb-5">
              <Button variant='contained' component='a' href='/MyClubs'>Go Back to My Clubs</Button>
            </div>
            {/* XY */}
            <div className="mx-5 mb-5">
              <Button variant='contained' component='a' href='/MemberEnroll'>Enroll New Member</Button>
            </div>
            <div className="mx-5">
              <MembersTable />
            </div>
        </div>
    )
}