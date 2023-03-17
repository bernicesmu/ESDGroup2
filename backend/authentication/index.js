
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import jwt from 'jsonwebtoken'

const firebaseConfig = {
    apiKey: "AIzaSyAJNi0yxtFnxFbv3FtYA6fJjdyNtlAsWn0",
    authDomain: "esd-user-authentication.firebaseapp.com",
    projectId: "esd-user-authentication",
    storageBucket: "esd-user-authentication.appspot.com",
    messagingSenderId: "553300590290",
    appId: "1:553300590290:web:54bfabc038806ebc09370b",
    measurementId: "G-SM1T14WNV0"
  }

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

const colRef = collection(db, 'allusers')

import express from 'express';
import bodyParser from 'body-parser'
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }))


app.get('/', (req, res) => {
    // res.send('Get todos!');
    res.sendFile(__dirname + '/index.html')
    
});

// app.get('/authentication', (req,res) => {
//     let details = req.params.id;
//     res.send(details);
// })

app.post('/authentication', (req, res) => {
    let loginusername = req.body.username;
    let loginpassword = req.body.password;

    signInWithEmailAndPassword(auth, loginusername, loginpassword)
        .then((cred) => {
            // console.log('user logged in:', cred.user)
            getDocs(colRef)
            .then((snapshot) => {
                let users = []
                let clubadminList = [];
                let loginsuccessful = false;
                snapshot.docs.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                })
                for (let user of users){
                    if (user.email == loginusername && user.password == loginpassword) {
                        // res.json(user)
                        // console.log('found user')
                        // res.status(200).json(user);
                        loginsuccessful = true;
                        let id = user.id;
                        let admins = user.clubAdmin;
                        let clubs = user.clubs;
                        if (admins.includes(true)){
                            console.log('admin');
                            for (let i = 0; i < admins.length; i++) {
                                if (admins[i] == true){
                                    clubadminList.push(clubs[i])
                                }
                            }
                            // const expirationseconds = 20 * 60;
                            // const cookieexpiration = Date.now() + expirationseconds * 1000

                            let token = jwt.sign(
                                {
                                    clubadminList,
                                    "adminRights" : true
                                },
                                'userlogin',
                                {
                                    expiresIn: "1200000",
                                }
                            );

                            res.status(200).json({
                                "code" : 200,
                                clubadminList, 
                                token
                            });
                        }
                        else {
                            console.log('member');
                            let clubs = user.clubs;
                            let clubadminList = [];
                            let token = jwt.sign(
                                {
                                    clubadminList,
                                    "adminRights" : false
                                },
                                'userlogin',
                                {
                                    expiresIn: "1200000",
                                }
                            );
                            res.status(200).json({
                                "code": 200,
                                clubadminList,
                                token
                            });
                        }
                    }
                }
                if (!loginsuccessful){
                    res.status(404).json({
                        "code" : 404,
                        "error" : 'login failed'
                    });
                }
                // res.json(users)
                // console.log(users)
            })
            .catch(err => {
                console.log(err.message)
            })
            // res.json( {"admin" : false } )
        })
        .catch((err) => {
            console.log(err.message)
            res.status(404).json({
                'code' : 404,
                'error': err.message
            })
        })

    
})

app.get('/authentication/:userid/clubs', (req,res) => {
    let id = req.params.userid;
    res.send(id);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})