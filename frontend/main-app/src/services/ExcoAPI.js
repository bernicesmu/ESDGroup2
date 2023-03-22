import axios from 'axios';

// bernice need to check with bryan on the API URL
export async function getAttendanceById(data) {
    let api_url = 'http://localhost:8080/authentication';
    try {
        const response = await axios.post(api_url, data);
        console.log('response  ', response);
        return response.data;
    } catch(error) {
        return error; 
    }
}