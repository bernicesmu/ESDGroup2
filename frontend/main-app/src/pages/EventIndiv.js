import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, Grid} from '@mui/material';
import { Form } from "react-router-dom";
import EventPhotos from "../components/EventPhotos";
import EventDetails from "../components/EventDetails";
import { getAllEvents, getEventById } from '../services/EventAPI'

export default function EventIndiv() {
  const [eventDetails, setEventDetails] = useState({
      eventName: "",
      eventLocation: "",
      eventDate: "2023-01-01",
      eventFromTime: "00:00:00", 
      eventToTime: "00:00:00", 
      eventSignUpForm: "",
  });
  const [eventDetailsElement, setEventDetailsElement] = useState(null); 
  const [eventName, setEventName] = useState(null); 
  const [eventId, setEventId] = useState(0); 

  useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const eventIdFromURL = urlParams.get('eventId')
      setEventId(eventIdFromURL);
      getEventById(eventIdFromURL) 
        .then(response => { 
          let newEventDetails = {}
          newEventDetails.eventName = response[0].eventName; 
          newEventDetails.eventLocation = response[0].eventLocation; 
          newEventDetails.eventDate = response[0].eventDate; 
          newEventDetails.eventFromTime = response[0].eventFromTime; 
          newEventDetails.eventToTime = response[0].eventToTime; 
          newEventDetails.eventSignUpForm = response[0].eventSignUpForm; 
          setEventDetails(newEventDetails)
          setEventDetailsElement(<EventDetails event={response[0]}></EventDetails>)
          setEventName(<Typography variant='h4'>{response[0].eventName}</Typography>)
        })
        .catch(error => { 
          console.log(error.message)
        })
      // getAllEvents()
      //     .then(response => { 
      //         for (let r of response) { 
      //             if (r.id === parseInt(eventIdFromURL)) { 
      //                 let newEventDetails = {}
      //                 newEventDetails.eventName = r.eventName; 
      //                 newEventDetails.eventLocation = r.eventLocation; 
      //                 newEventDetails.eventDate = r.eventDate; 
      //                 newEventDetails.eventFromTime = r.eventFromTime; 
      //                 newEventDetails.eventToTime = r.eventToTime; 
      //                 newEventDetails.eventSignUpForm = r.eventSignUpForm; 
      //                 setEventDetails(newEventDetails)
      //                 setEventDetailsElement(<EventDetails event={r}></EventDetails>)
      //                 setEventName(<Typography variant='h4'>{r.eventName}</Typography>)
      //                 break
      //             }
      //         }
      //     })
      //     .catch(error => { 
      //         console.log(error.message)
      //     })
  }, [])


    return ( 
        <div>
            <div className="mx-5 mb-5 justify-content-between d-flex my-5">
              <div className="my-auto">
                <Button variant='contained' component='a' href='/Events'>Go Back to Events</Button>
              </div>
              <div className="text-center">
                {eventName}
                <Typography variant='p'>Check out the details for this exciting event!</Typography>
              </div>
              <div className="my-auto">
                <Button variant='contained' component='a' href={'/Attendance?eventId=' + eventId}>Check Sign Up Sheet</Button>
              </div>
            </div>
            <EventPhotos></EventPhotos>
            {eventDetailsElement}
        </div>
    )
}