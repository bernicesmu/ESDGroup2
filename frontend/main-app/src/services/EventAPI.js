import axios from 'axios';

export async function createEvent(event) { 
    let api_url = 'http://localhost:5101/eventList';
    try { 
        const response = await axios.post(api_url, event); 
        console.log('response ', response); 
        return response.data;
    } catch(error) { 
        return error; 
    }
}

export async function getAllEvents() { 
    let api_url = 'http://localhost:5101/allEvents';
    try { 
        const response = await axios.get(api_url); 
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}

export async function getEventById(eventId) { 
    let api_url = 'http://localhost:5101/event/' + eventId; 
    try { 
        const response = await axios.get(api_url); 
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}