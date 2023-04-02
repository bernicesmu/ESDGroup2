import axios from 'axios';

export async function getStudentByMatric(matric) { 
    let api_url = 'http://localhost:5103/student/' + matric+ '/contact';
    console.log(api_url);
    try {
        const response = await axios.get(api_url);
        console.log('response ', response);
        return response.data;
    } catch(error) { 
        return error; 
    }
}