import MembersTable from "../components/MembersTable";
import { Typography, Button, Box } from '@mui/material';

export default function Members() {
    return ( 
        <div>
            <div className="mx-5 mb-5 justify-content-between d-flex my-5">
              <div className="my-auto">
                <Button variant='contained' component='a' href='/MyClubs'>Go Back to My Clubs</Button>
              </div>
              <div className="text-center">
                <Typography variant='h4'>SMUBIA's Members Database</Typography>
                <Typography variant='p'>View all the information about your club members</Typography>
              </div>
              <div className="my-auto">
                <Button variant='contained' component='a' href='/MemberCreate'>Add New Member</Button>
              </div>
            </div>
            <div className="mx-5">
              <MembersTable />
            </div>
        </div>
    )
}