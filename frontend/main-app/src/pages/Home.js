import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Button, Link, Typography, Box } from '@mui/material';
import Slip from '../assets/Slip.png';
import Clumsy from '../assets/ClumsyLogo.PNG';

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Home() {
  return (
      <Box height='90.5vh' width='100vw' display={'flex'} justifyContent='center'> 
        <Box paddingTop='18vh' width={'40%'} bgcolor={'secondary.light'}> 
          <Box component='img' src={Slip} width='90%' height='auto'></Box>
        </Box>
        <Box bgcolor={'primary.light'} borderRadius={[10,10,0,0]} textAlign={'center'} width='60%'>
          <Typography variant='h5' marginTop='25%' fontWeight={'bold'} color='primary.main'>Welcome to</Typography>
          <Box component={'img'} src={Clumsy} height={'30%'}></Box>
          <Typography variant='h5' fontWeight={'bold'} color='primary.main'>
            The one-stop&nbsp;
            <Box component={'span'} color='secondary.main'>CLU</Box>b&nbsp;
            <Box component={'span'} color='secondary.main'>M</Box>anagement&nbsp;
            <Box component={'span'} color='secondary.main'>SY</Box>stem 
            for SMU Clubs
          </Typography>
        </Box>
      </Box>
  );
}