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

  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
  });

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Make API request to the sign-up endpoint
    // ***ENDPOINT NOT UPDATED YET***
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle success scenario

        const { token } = data;
        // Store the JWT token securely (e.g., in local storage)
        // should store:
        localStorage.setItem('jwtToken', token);

        // Redirect to the login page
        navigate('/');
      })
      .catch((error) => {
        console.error(error); // Handle error scenario
      });
  };

  const handleSteamLogin = () => {
    
    // Perform Steam login logic
    // Redirect the user to the Steam login page or show a pop-up window
    // Once the user logs in with Steam, handle the response and sign them up
    localStorage.setItem('jwtToken', '1'); // Temporary solution
    navigate('/');
  };

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
              <form onSubmit={handleSignupSubmit}>
              
                <Box mt={2} display="flex" justifyContent="center">
                  <img
                    src={steamImage}
                    alt="Sign Up with Steam"
                    onClick={handleSteamLogin}
                    style={{ cursor: 'pointer', width: '180px', height: 'auto' }}
                  />
                </Box>
              </form>
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
