import axios from 'axios';
import jwt from 'jsonwebtoken'

export async function generateToken(data) {
    let api_url = 'http://localhost:5109/getToken';
    try {
        const response = await axios.post(api_url, data);
        console.log('response  ', response);
        return response.data;
    } catch(error) {
        return error; 
    }
}

export function decodeToken(token) {
    var base64Url = token.split('.')[1];
    var base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(base64);
}

export function setToken(adminclubs, memberclubs, token) {
    window.localStorage.setItem('authtoken', JSON.stringify({
        adminclubnames: adminclubs,
        memberclubnames: memberclubs,
        authtoken : token
    }))
}

export function checkToken() {
    const token = window.localStorage.getItem('authtoken');
    if (token) {
        const authtoken = token.authtoken
        try {
            const decoded = jwt.verify(jwt_token, 'userlogin');
            console.log('Token Verified')
        }
        catch (err) {
            console.log("Error: ")
            console.log(err)
        }
    }
}