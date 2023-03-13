import React, { useEffect, useState } from 'react';
import { Typography, Button, Grid, TextField } from '@mui/material';
import EventCard from '../components/EventCard'
import SearchIcon from '@mui/icons-material/Search';

export default function Events() {
    const [searchValue, setSearchValue] = useState("");

    const events = [
      {id:1, name:'Datathon 2023', desc:'Join us in our Fireside Chat, Workshops, and Data Challenges now!'},
      {id:2, name:'Inter-Faculty Games 2023', desc:'Compete against other faculties on various sports!'},
      {id:3, name:'ACF Showcase 2023', desc:'Watch as our talented ACF members put on a show ranging from singing to dancing!'}
    ]

    function handleSearchChange(event) { 
      setSearchValue(event.target.value.toLowerCase()); 
    }

    function updateEvents(event) { 
      let eventNameSmall = event.name.toLowerCase(); 
      if (eventNameSmall.includes(searchValue)) { 
        return (
        <Grid item key={event.id} xs={4}>
          <EventCard name={event.name} desc={event.desc} link="/Event"></EventCard>
        </Grid>
        );
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
            <div className="d-flex mx-auto mb-5">
              <TextField id="eventSearchBar" placeholder="Search Events" variant="outlined" sx={{width: '70%', marginX: 'auto'}} onChange={(event) => handleSearchChange(event)}/>
            </div>
            <div className="mx-5">
              <Grid container className="mx-auto">
                {events.map((event)=>(
                  updateEvents(event)
                ))}
              </Grid>
            </div>
        </div>
    )
}