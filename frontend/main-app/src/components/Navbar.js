import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ClumsyLogo from '../assets/ClumsyLogo.PNG';
import Atrayee from '../assets/Atrayee.png';
import { checkToken } from '../services/GenerateTokenAPI';


const pages = ['Home', 'Events', 'My Clubs'];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component='a' href="/">
            <Box component='img' src={ClumsyLogo} height={50} marginRight={3}></Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map((page) => (
              <Button
                href={checkToken() ? '/' + page.replace(/ /g, '').replace('Home', '') : "/Login"}
                key={page.replace(/ /g, '')}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', ":hover": {color: "secondary.main"} }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box component='a' href={checkToken() ? "/MyAccount" : "/Login"}>
            <Box component='img' src={Atrayee} height={43} borderRadius='50%' bgcolor='white' marginRight={0}></Box>
          </Box>
        </Toolbar>
      </Container>
      <Box bgcolor='secondary.main' height={10} display='block'></Box>
    </AppBar>
  );
}
export default Navbar;
