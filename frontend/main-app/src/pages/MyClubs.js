import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomCard from '../components/CustomCard';
import ClubNotFound from '../assets/ClubNotFound.png';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = ['SMUBIA', 'Volleyball', 'Samba Masala', '.Hack'];

const theme = createTheme();

export default function MyClubs() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchChange(event) { 
    setSearchValue(event.target.value.toLowerCase()); 
  }

  function updateClubs(card) { 
    let cardNameSmall = card.toLowerCase(); 
    if (cardNameSmall.includes(searchValue)) { 
      return (
        // <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
        //   <Card
        //     sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        //   >
        //     <CardMedia
        //       component="img"
        //       sx={{
        //         // 16:9
        //         width: '60%', 
        //         height: 'auto',
        //       }}
        //       image={ClubNotFound}
        //       alt="random"
        //     />
        //     <CardContent sx={{ flexGrow: 1 }}>
        //       <Typography gutterBottom variant="h5" component="h2" textAlign={'center'}>
        //         {card}
        //       </Typography>
        //       <Typography textAlign={'center'}>
        //         This is a club description that each student club will have.
        //       </Typography>
        //     </CardContent>
        //     <CardActions>
        //       {/* remember to add the GET params in the href below so as to retrieve the club name */}
        //       <Button size="small" href={"/Members"}>View members</Button> 
        //       <Button size="small" href={"/Events"}>View events</Button>
        //     </CardActions>
        //   </Card>
        // </Grid>
        <CustomCard type='club' name={card} desc="This is a club description that each student club will have."></CustomCard>
      );
    }
  }

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
            {cards.map((card) => (
              updateClubs(card)
            ))}
          </Grid>
        </div>
      </main>
  )
}