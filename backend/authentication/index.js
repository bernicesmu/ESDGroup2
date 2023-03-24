
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where, onSnapshot } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
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

//queries
// const q = query(colRef, where())

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
    console.log(req.body);
    let loginusername = req.body.email;
    let loginpassword = req.body.password;

    signInWithEmailAndPassword(auth, loginusername, loginpassword)
        .then((cred) => {
            // console.log('user logged in:', cred.user)
            const q = query(colRef, where("email", "==", loginusername));
            
            onSnapshot(q, (snapshot) => {
                let users = []
                let clubadminList = [];
                let clubmemberList = [];
                snapshot.docs.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                })

                let user = users[0];
                let id = user.id;
                let admins = user.clubAdmin;
                let clubs = user.clubs;
                if (admins.includes(true)){
                    console.log('admin');
                    for (let i = 0; i < admins.length; i++) {
                        if (admins[i] == true){
                            clubadminList.push(clubs[i]);
                        }
                        else if (admins[i] == false) {
                            clubmemberList.push(clubs[i]);
                        }
                    }

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
                        "data" : {
                            clubadminList, 
                            clubmemberList,
                            token
                        },
                        "message" : "Admin login successful, jwt token created."
                    });
                }
                else {
                    console.log('member');
                    let clubmemberList = user.clubs;
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
                        "data" : {
                            clubadminList,
                            clubmemberList,
                            token
                        },
                        "message" : "Member login successful, jwt token created."
                    });
                }
            })
        })
        .catch((err) => {
            console.log(err.message)
            res.status(404).json({
                'code' : 404,
                'error': err.message
            })
    })
})

app.get('/authentication/logout', (req,res) => {
//     let uid = 'wCrqbbFoBfMlyzCPaaQ2tX4R3rN2';
//     getUser(uid)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });
    // let user = auth.currentUser;
    // console.log(user);
    signOut(auth)
        .then(() => {
            console.log('the user signed out');
            res.send('the user signed out');
        })
        .catch((err) =>{ 
            console.log(err.message);
            res.send(err.message);
        })
})

app.get('/authentication/:userid/clubs', (req,res) => {
    let id = req.params.userid;
    res.send(id);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})