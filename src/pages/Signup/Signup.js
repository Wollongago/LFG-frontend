import { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import Navbar from '../../components/ui/Navbar';
import { useNavigate } from 'react-router-dom';

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
        // be sure to change the endpoint
        fetch('/signup' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Handle success scenario
            // Redirect to the login page
            navigate('/login');
        })
        .catch((error) => {
            console.error(error); // Handle error scenario
        });
    };

    const handleSteamLogin = () => {
        // Perform Steam login logic
        // Redirect the user to the Steam login page or show a pop-up window
        // Once the user logs in with Steam, handle the response and sign them up
    };

    return (
        <Box>
            <Box>   
                <Navbar />
            </Box>
            
            <Box marginTop="250px" marginLeft="20%" marginRight="20%">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                    <img
                        src="https://purepng.com/public/uploads/large/purepng.com-gamepadgamepadgame-controlhandheld-controllervideo-games-controller-1701528353490feyrv.png"
                        alt="Signup"
                        width="400px"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Typography variant="h5">Sign Up</Typography>
                    <Box mt={2}>
                        <form onSubmit={handleSignupSubmit}>
                        <TextField
                            name="username"
                            label="Username"
                            value={signupData.username}
                            onChange={handleSignupChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" fullWidth>
                            Sign Up
                        </Button>
                        <Button variant="contained" fullWidth onClick={handleSteamLogin}>
                            Sign Up with Steam
                        </Button>
                        </form>
                    </Box>
                    </Grid>
                </Grid>
            </Box>
            
        </Box>
    );
};

export default Signup