import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import jwt from 'jsonwebtoken'


const app = express();
app.use(express.json());
const port = 3020;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false }))

app.get('/getToken', async (req,res) => {
    let logindata = req.body;
    try {
        //call exco microservice
        const excoResponse = await axios.post('http://localhost:5104/authentication',logindata);
        const allinfo = excoResponse["data"];
        if (allinfo.code != 200){
            res.status(404).json({
                "code": 404,
                "message":"Failed Authorisation"
            })
        }
        const alluserData = allinfo.data;
        let admin = alluserData.clubadminList;
        let member = alluserData.clubmemberList;
        let oldjwttoken = alluserData.token;
        
        res.send(allinfo.data);    

        //call club microservice
        //need to get all the clubnames corresponding to the admin and member list
        const clubResponse = await axios.get("http://localhost:5102/api/clubs");
        const clubResponseinfo = clubResponse.data;
        const allclubs = clubResponseinfo.clubs;

        //Need to send admin, member, jwt token
        const adminclubnames = []
        const memberclubnames = []
        //find clubname of admin
        if ( admin.length != 0 ) {
            for ( clubid of admin ){
                for ( club of allclubs ){
                    if ( club.id == clubid ){
                        adminclubnames.push(club.clubName);
                        break;
                    }
                }
            }
        }
        //find clubname of member
        if ( member.length != 0 ) {
            for ( clubid of member ) {
                for ( club of allclubs ) {
                    if  ( club.id == clubid ) {
                        memberclubnames.push(club.clubName);
                        break;
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
                    token
                },
                "message" : "Authentication successful, member token generated."
            });
        }
    }
    catch(error) {
        res.status(500).json({
            code: 500,
            message: 'Connection Error'
        })
    }
})

app.listen(port, () => {
    console.log(`generateToken listening on port ${port}`)
})