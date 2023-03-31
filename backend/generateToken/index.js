import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import jwt from 'jsonwebtoken'


const app = express();
app.use(express.json());
const port = 3020;
// const exco_host = process.env.EXCO_HOST;
// const club_host = process.env.CLUB_HOST;
const exco_url = process.env.EXCO_URL;
const club_url = process.env.CLUB_URL;
// const exco_url = 'http://exco:3010/';
// const club_url = 'http://club_database:80/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false }))

app.post('/getToken', async (req,res) => {
    let logindata = req.body;
    console.log(exco_url);
    console.log(club_url);
    try {
        //call exco microservice
        const exco_URL = exco_url + 'authentication';
        console.log(exco_URL);
        const excoResponse = await axios.post(exco_URL,logindata);
        // const excoResponse = await axios.post(`http://localhost:5104/authentication`,logindata);
        const allinfo = excoResponse["data"];
        if (allinfo.code != 200){
            res.status(404).json({
                "code": 404,
                "message":"Failed Authorisation"
            })
        }
        const alluserData = allinfo.data;
        const admin = alluserData.clubadminList;
        const member = alluserData.clubmemberList;
        const matricNum = alluserData.matricNum;
        // let oldjwttoken = alluserData.token;
        
        // res.send(allinfo.data);    
        //call club microservice
        //need to get all the clubnames corresponding to the admin and member list
        const club_URL = club_url + "api/clubs";
        console.log(club_URL);
        const clubResponse = await axios.get(club_URL);
        // const clubResponse = await axios.get(`http://localhost:5102/api/clubs`);
        const clubResponseinfo = clubResponse.data;
        const allclubs = clubResponseinfo.clubs;

        //Need to send admin, member, jwt token
        const adminclubnames = []
        const memberclubnames = []
        // res.send(allclubs);
        //find clubname of admin
        if ( admin.length != 0 ) {
            for ( let i = 0; i<admin.length; i++ ) {
                for ( let j = 0; j < allclubs.length; j++ ) {
                    let club = allclubs[j];
                    if ( club.id == admin[i] ) {
                        adminclubnames.push(club.clubName);
                    }
                }
            }
        }

        //find clubname of member
        if ( member.length != 0 ) {
            for ( let i = 0; i<member.length; i++) {
                for ( let j=0; j < allclubs.length; j++ ) {
                    let club = allclubs[j];
                    if ( club.id == member[i] ) {
                        memberclubnames.push(club.clubName);
                    }
                }
            }
        }        

        //compile everything into jwt token
        if ( adminclubnames.length != 0 ) {
            let token = jwt.sign(
                {
                    adminclubnames,
                    memberclubnames,
                    matricNum,
                    "adminRights" : true
                },
                'userlogin',
                {
                    expiresIn: "3600000"
                }   
            );
            res.status(200).json({
                "code": 200,
                "data": {
                    adminclubnames,
                    memberclubnames,
                    matricNum,
                    token
                },
                "message" : "Authentication successful, admin token generated."
            });
        }
        else if ( adminclubnames.length == 0 ) {
            let token = jwt.sign(
                {
                    adminclubnames,
                    memberclubnames,
                    matricNum,
                    "adminRights" : false
                },
                'userlogin',
                {
                    expiresIn: "3600000"
                }
            );
            res.status(200).json({
                "code": 200,
                "data": {
                    adminclubnames,
                    memberclubnames,
                    matricNum,
                    token
                },
                "message" : "Authentication successful, member token generated."
            });
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: error
        })
    }
})

app.listen(port, () => {
    console.log(`generateToken listening on port ${port}`)
})