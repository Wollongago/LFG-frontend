import React from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Stack
} from '@mui/material';
import Searchbar from './Searchbar';
import OutlinedButton from '../Buttons/OutlinedButton';
import FocusedButton from '../Buttons/FocusedButton';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigate = useNavigate();
    const jwtToken = localStorage.getItem('jwtToken');

    const handleOpenUserMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/signup'); // Redirect to the login page or any other desired page
      };

    return (
        <AppBar elevation={0} sx={{ py: 2, height: '100px' }}>
        <Container>
            <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2 }}>
                Logo
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                {/* Rest of the code from your existing Navbar component */}
                <Stack
                direction="row"
                alignItems="center"
                justifycontent="space-evenly"
                flexWrap="wrap"
                spacing={3}
                >
                
                {/* Link */}
                <Stack
                    direction="row"
                    alignItems="center"
                    jusitycontent="center"
                    spacing={3}
                >
                    <p>LFG</p>

                    <p>About Us</p>
                </Stack>

                {/* Search bar */}
                <Stack
                    alignItems="center"
                    sx={{ flex: 1 }}
                    flex="wrap"
                >
                    <Searchbar />
                </Stack>

                <Stack
                    direction="row"
                    alignItems="center"
                    jusitycontent="center"
                    spacing={3}
                >
                    { jwtToken ? (
                    // Render icon button when JWT token is present
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* Menu items */}
                            <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Account</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Dashboard</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    ) : (
                        <>
                        <FocusedButton variant="contained" >SignUp</FocusedButton>
                        <OutlinedButton variant="contained">Log In</OutlinedButton>
                    </>
                    )}
                    
                </Stack>
                </Stack>

            </Box>

            
            </Toolbar>
        </Container>
        </AppBar>
    );
};

export default Navbar;