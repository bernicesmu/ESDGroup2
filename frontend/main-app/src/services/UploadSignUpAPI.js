import axios from 'axios'; 

export async function uploadSignUps(signUpFile) { 
    let api_url = 'http://localhost:5108/uploadSignUp'; 
    var config = {
        headers: {
            'Content-Type' :'multipart/form-data'
        }
    }
    try { 
        const response = await axios.post(api_url, signUpFile, config); 
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}