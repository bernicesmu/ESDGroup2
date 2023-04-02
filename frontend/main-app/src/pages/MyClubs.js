import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomCard from '../components/CustomCard';
import ClubNotFound from '../assets/ClubNotFound.png';
import { getAllClubs } from '../services/ClubAPI'; 
import { checkToken, decodeToken } from '../services/GenerateTokenAPI';

const cards = ['SMUBIA', 'Volleyball', 'Samba Masala', '.Hack'];
const clubs = [
  {id:1, clubName:'SMUBIA', clubCategory:'Tech'},
  {id:2, clubName:'Volleyball', clubCategory:'Sports'},
  {id:3, clubName:'Ellipsis', clubCategory:'Student Body'},
  {id:4, clubName:'Samba Masala', clubCategory:'Arts'},
  {id:5, clubName:'.Hack', clubCategory:'Tech'},
]

const theme = createTheme();

export default function MyClubs() {
  const [searchValue, setSearchValue] = useState("");
  const [allClubs, setAllClubs] = useState(Array(0));
  const [tokenInfo, setTokenInfo] = useState({}); 

  function handleSearchChange(event) { 
    setSearchValue(event.target.value.toLowerCase()); 
  }

  function updateClubs(club) { 
    let cardNameSmall = club.clubName.toLowerCase(); 
    if (cardNameSmall.includes(searchValue)) { 
      return (
        <CustomCard type='club' key={club.id} club={club} name={club.clubName} desc={club.clubCategory}></CustomCard>
      );
    }
  }

  useEffect(() => { 
    let tokenInfo = decodeToken(window.localStorage.getItem('authtoken'))
    console.log(tokenInfo)
    setTokenInfo(tokenInfo)
    let adminClubId = []; 
    for (let clubPair of tokenInfo.adminclubnames) { 
      adminClubId.push(clubPair[0])
    }
    getAllClubs()
      .then(response => {
        let myClubs = []
        for (let club of response.clubs) { 
          if (adminClubId.includes(club.id)) { 
            myClubs.push(club)
          }
        }
        setAllClubs(myClubs); 
      })
      .catch(error => { 
        console.log(error.message);
        setAllClubs(clubs); 
      })
  }, [])

  return (
      <main>
        {/* Hero unit */}
        <div className="text-center my-5">
          <Typography variant='h4'>My Clubs</Typography>
          <Typography variant='p'>View all the student clubs that you are managing.</Typography>
        </div>
        <div className="d-flex mx-auto mb-5">
          <TextField id="eventSearchBar" placeholder="Search My Clubs" variant="outlined" sx={{width: '70%', marginX: 'auto'}} onChange={(event) => handleSearchChange(event)}/>
        </div>
        <div className="m-5">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {allClubs.map((club) => (
              updateClubs(club)
            ))}
          </Grid>
        </div>
      </main>
  )
}