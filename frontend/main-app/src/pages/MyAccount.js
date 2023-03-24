import MembersTable from "../components/MembersTable";
import {Typography,Box,TextField,Select,MenuItem,Autocomplete,Checkbox, FormGroup,FormControlLabel,Grid,Avatar,autocompleteClasses,Button} from '@mui/material';
import { Form } from "react-router-dom";
import MemberCreateForm from "../components/MemberCreateForm";
import UserProfileImg from "../assets/Atrayee.png";
import { minWidth, width } from "@mui/system";
// import EditButton from './EditButton';

export default function MemberCreate() {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

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
            <div style={{ marginBottom: '1rem' }}>First Name:</div>
            <div style={{ marginBottom: '1rem' }}>Last Name:</div>
            <div style={{ marginBottom: '1rem' }}>Gender:</div>
            <div style={{ marginBottom: '1rem' }}>SMU Email:</div>
            <div style={{ marginBottom: '1rem' }}>Matriculation ID:</div>
            <div>Faculty:</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1rem' }}>John</div>
            <div style={{ marginBottom: '1rem' }}>Doe</div>
            <div style={{ marginBottom: '1rem' }}>Male</div>
            <div style={{ marginBottom: '1rem' }}>john.doe.2021@scis.smu.edu.sg</div>
            <div style={{ marginBottom: '1rem' }}>12345678</div>
            <div>SCIS</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}