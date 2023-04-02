import axios from 'axios';
// import jwt from 'jsonwebtoken'
// const jwt = require('jsonwebtoken')
// const crypto = require('crypto-browserify')

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

export function setToken(token) {
    // jwt.crypto = crypto;
    window.localStorage.setItem('authtoken', JSON.stringify({
        authtoken : token
    }))
}

export function checkToken() {
    const token = window.localStorage.getItem('authtoken');
    if (token) {
        var base64Url = token.split('.')[1];
        var base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const info = JSON.parse(base64)

        // const info = decodeToken(token);
        // expiry date of token
        const expiry = info.exp;
        const expiryinfo = expiry*1000
        const expirySeconds = new Date(expiryinfo).getTime();

        // current time
        const currentTime = new Date().getTime();
        if (currentTime >= expirySeconds) {
            console.log('Token expired');
            return "Token expired";
        }
        else if ( currentTime < expirySeconds ) {
            console.log('Token valid');
            return "Token valid";
        }
        // return expiry;

        // const authtoken = token.authtoken
        // try {
        //     const decoded = jwt.verify(authtoken, 'userlogin');
        //     // const decoded = jwt.verify(token, 'userlogin');
        //     console.log(decoded);
        //     console.log('Token Verified');
        // }
        // catch (err) {
        //     console.log("Error: ");
        //     console.log(err);
        // }
    }
}

// var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbnMiOltdLCJhZG1pblJpZ2h0cyI6ZmFsc2UsImlhdCI6MTY4MDQ0NTgxNCwiZXhwIjoxNjgwNDQ5NDE0fQ.o_Ys5Yhcy-LyWQjP9Ad9ZI1ENHqTKk0vJifBBao20mc";
// var expiry = checkToken(token);
// console.log(expiry);
// var exp = expiry*1000;
// console.log(new Date(exp).getTime());
// var date = new Date().getTime();
// console.log(date);