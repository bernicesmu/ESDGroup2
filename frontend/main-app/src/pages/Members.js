import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MembersTable from "../components/MembersTable";
import { Typography, Button, Box, Tab, Tabs } from '@mui/material';
import MembersMedicalTable from '../components/MembersMedicalTable';

export default function Members() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    function toDisplay() { 
      if (value === 0) { 
        return <MembersTable/>
      } else if (value === 1) { 
        return <MembersMedicalTable/>
      }
    }

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
                <Button variant='contained' component='a' href='/MemberEnroll'>Add New Member</Button>
              </div>
            </div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Particulars" {...a11yProps(0)} />
                <Tab label="Medical Records" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <div className="m-5">
              {toDisplay()}
            </div>
        </div>
    )
}