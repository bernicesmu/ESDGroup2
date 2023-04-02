import React, { useEffect, useState } from 'react';
import MembersTable from "../components/MembersTable";
import {Typography,Box,TextField,Select,MenuItem,Autocomplete,Checkbox, FormGroup,FormControlLabel,Grid,Avatar,autocompleteClasses,Button} from '@mui/material';
import { Form } from "react-router-dom";
import MemberCreateForm from "../components/MemberCreateForm";
import UserProfileImg from "../assets/Atrayee.png";
import { minWidth, width } from "@mui/system";
// import EditButton from './EditButton';
import { getStudentByMatric } from '../services/StudentAPI';
import { checkToken } from '../services/GenerateTokenAPI';

export default function MemberCreate() {
  const [matricNum, setMatricNum] = useState('1420382'); 
  const [studentDetails, setStudentDetails] = useState({ 
    matriculatedName: '',
    smuEmail: '',
    matricNum: '', 
    telegramUser: '',
    phoneNum: '',
  })

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => { 
    checkToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbnMiOltdLCJhZG1pblJpZ2h0cyI6ZmFsc2UsImlhdCI6MTY4MDQ0NTgxNCwiZXhwIjoxNjgwNDQ5NDE0fQ.o_Ys5Yhcy-LyWQjP9Ad9ZI1ENHqTKk0vJifBBao20mc") 
      // .then(response => { 
      //   console.log(response)
      // })
      // .catch(error => { 
      //   console.log(error.message)
      // })
    getStudentByMatric(matricNum) 
      .then(response => { 
        console.log(response);
        setStudentDetails(response)
      })
      .catch(error => { 
        console.log(error.message); 
      })
  }, [])

  return (
    <div style={{justifyContent:'center'}}>
      {/* <div style={{ display: "flex" }} className="my-3 mx-3">
        <Button variant='contained' color="primary" style={{ marginLeft: "auto" }}>
          Edit Profile
        </Button>
      </div>

      <div className="text-center my-5">
        <Typography variant='h4'>My Account</Typography>
        <Typography variant='p'>Everything about you, and only you!</Typography>
      </div> */}

      <div className="mx-5 mb-5 justify-content-between d-flex my-5 text-center">
        <div className="d-block" style={{width:132, height:3}}></div>
        <div className="mx-auto">
          <Typography variant='h4'>My Account</Typography>
          <Typography variant='p'>Everything about you, and only you!</Typography>
        </div>
        <div className="my-auto float-right">
          <Button variant='contained' color="primary" style={{ marginLeft: "auto", float: 'right'}}>
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="mx-5 mb-5">
        <div style={centerStyle}>
          <Avatar
            alt="User Profile Picture"
            src={UserProfileImg}
            sx={{ border: theme => `6px solid ${theme.palette.primary.main}`, width: 200, height: 200 }}/>
        </div>
      </div>

          <div style={{ display: 'flex',justifyContent: 'space-between' }}>
      <div style={{
          centerStyle,
          width: '75%',
          lineHeight: '2',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 'auto',
          fontSize: '1.2rem'
      }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            margin: 'auto',
            fontSize: '1.2rem'
        }}>
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '2rem',
              fontWeight: 'bold'
          }}>
            <div style={{ marginBottom: '1rem' }}>Name:</div>
            <div style={{ marginBottom: '1rem' }}>Matriculation ID:</div>
            <div style={{ marginBottom: '1rem' }}>SMU Email:</div>
            <div style={{ marginBottom: '1rem' }}>Phone Number:</div>
            <div style={{ marginBottom: '1rem' }}>Telegram:</div>
            {/* <div>Faculty:</div> */}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1rem' }}>{studentDetails.matriculatedName}</div>
            <div style={{ marginBottom: '1rem' }}>{matricNum}</div>
            <div style={{ marginBottom: '1rem' }}>{studentDetails.smuEmail}</div>
            <div style={{ marginBottom: '1rem' }}>{studentDetails.phoneNum}</div>
            <div style={{ marginBottom: '1rem' }}>{studentDetails.telegramUser}</div>
            {/* <div>SCIS</div> */}
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}