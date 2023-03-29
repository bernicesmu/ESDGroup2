import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Grid, TextField, Box, Tab, Tabs } from '@mui/material';
import CustomCard from '../components/CustomCard'
import SearchIcon from '@mui/icons-material/Search';
import { getAllEvents } from '../services/EventAPI'

export default function Events() {
    const [searchValue, setSearchValue] = useState("");
    const [viewValue, setViewValue] = useState(0);

    const events = [
      {id:1, name:'Datathon 2023', desc:'Join us in our Fireside Chat, Workshops, and Data Challenges now!'},
      {id:2, name:'Inter-Faculty Games 2023', desc:'Compete against other faculties on various sports!'},
      {id:3, name:'ACF Showcase 2023', desc:'Watch as our talented ACF members put on a show ranging from singing to dancing!'}
    ]

    useEffect(() => { 
      getAllEvents() 
        .then(response => { 
          console.log(response)
        })
        .catch(error => { 
          console.log(error.message);
        })
    }) 

    function handleSearchChange(event) { 
      setSearchValue(event.target.value.toLowerCase()); 
    }

    function updateEvents(event) { 
      let eventNameSmall = event.name.toLowerCase(); 
      if (eventNameSmall.includes(searchValue)) { 
        return (
          <CustomCard type="event" name={event.name} desc={event.desc}></CustomCard>
        );
      }
    }

    const handleViewChange = (event, newValue) => {
      setViewValue(newValue);
    };

    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    function toDisplay() { 
      if (viewValue === 0) { 
        return (
          <div>
            <div className="d-flex mx-auto mb-5">
              <TextField id="eventSearchBar" placeholder="Search Events" variant="outlined" sx={{width: '70%', marginX: 'auto'}} onChange={(event) => handleSearchChange(event)}/>
            </div>
            <Grid container spacing={4}>
              {events.map((event)=>(
                updateEvents(event)
              ))}
            </Grid>
          </div>)
      } else if (viewValue === 1) { 
        // regine add your calendar component here 
      }
    }

    return ( 
        <div>
            <div className="mx-5 mb-5 justify-content-between d-flex my-5">
              <div className="my-auto">
                <Button variant='contained' component='a' href='/MyClubs'>Go Back to My Clubs</Button>
              </div>
              <div className="text-center">
                <Typography variant='h4'>SMUBIA's Events</Typography>
                <Typography variant='p'>View all the exciting events that your club has done or planned</Typography>
              </div>
              <div className="my-auto">
                <Button variant='contained' component='a' href='/EventCreate'>Create Event</Button>
              </div>
            </div>
            
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={viewValue} onChange={handleViewChange} aria-label="basic tabs example">
                <Tab label="Card" {...a11yProps(0)} />
                <Tab label="Calendar" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <div className="m-5">
              {toDisplay()}
            </div>
        </div>
    )
}