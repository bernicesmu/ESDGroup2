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

export async function getSignUpByEventId(eventId) { 
    let api_url = 'http://localhost:5108/getSignUpDetails/' + eventId; 
    try { 
        const response = await axios.get(api_url); 
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}

export async function broadcastMessage(data) { 
    let api_url = 'http://localhost:5108/broadcast' 
    try { 
        const response = await axios.post(api_url, data); 
        console.log('response ', response); 
        return response.data; 
    } catch(error) { 
        return error; 
    }
}