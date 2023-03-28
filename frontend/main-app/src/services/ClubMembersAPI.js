import axios from 'axios';

export async function getClubMemberDetails(clubId) {
    let api_url = 'http://localhost:5107/club_members/' + clubId;
    try {
        const response = await axios.get(api_url);
        console.log('response  ', response);
        return response.data;
    } catch(error) {
        return error; 
    }
}

