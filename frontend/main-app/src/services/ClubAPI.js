import axios from 'axios';

export async function getAllClubs() { 
    let api_url = 'http://localhost:5102/api/clubs'; 
    try { 
        const response = await axios.get(api_url); 
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}

export async function createClub(club) { 
    let api_url = 'http://localhost:5102/api/clubs'; 
    try { 
        const response = await axios.post(api_url, club);
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}

export async function getClubNameById(clubId) { 
    let api_url = 'http://localhost:5102/api/clubs/' + clubId;
    try { 
        const response = await axios.get(api_url);
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}