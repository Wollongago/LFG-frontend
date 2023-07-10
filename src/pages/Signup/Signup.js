import { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
// import Navbar from '../../components/ui/Navbar';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import CSS file for custom styles
import { signUpContent } from '../../utils/content';
import { Margin } from '@mui/icons-material';

const {
    ControllerImage,
    MainBG,
    steamImage,
    Rect1,
    Rect2,
    Rect3,
    Rect4,
    title
} = signUpContent;

const Signup = () => {
  const navigate = useNavigate();

  const handleSteamLogin = () => {
    
    // Perform Steam login logic
    // Redirect the user to the Steam login page or show a pop-up window
    // Once the user logs in with Steam, handle the response and sign them up
    window.location.href = 'http://localhost:8000/auth/steam';
  };

    // Check if the user is already logged in
  const userIdCookie = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (userIdCookie) {
    // User is logged in, perform the necessary actions
    // For example, redirect to a specific page
    navigate('/');
  } else {
    // User is not logged in, show the login options
    // For example, show the Steam login button
    // ...
  }

  return (
    <Box className="signup-container">
      
      {/* Main Background */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img src={MainBG} style={{ width: "100%"}} />
      </Box>

      <Box className="content-container">
        <Grid container columns={2} spacing={10}>
          <Grid item xs={1} p={0} >
            <Box display="flex" justifyContent="center" >
              <img id="controller-image"
                src={ControllerImage}
                alt="Signup"
                width="400px"
              />
            </Box>
          </Grid>
          <Grid item xs={1} p={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding:'0'}}>
            <Typography variant="h5">Sign In  </Typography>
            <Box mt={2}>
             
              
                <Box mt={2} display="flex" justifyContent="center">
                  <img
                    src={steamImage}
                    alt="Sign Up with Steam"
                    onClick={handleSteamLogin}
                    style={{ cursor: 'pointer', width: '180px', height: 'auto' }}
                  />
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="rect1">
        <img src={Rect1} />
      </Box>
      <Box className="rect2">
        <img src={Rect2} style={{ width: "50px"}}  />
      </Box>
      <Box className="rect3">
        <img src={Rect3} />
      </Box>
    </Box>
  );
};

export default Signup;
