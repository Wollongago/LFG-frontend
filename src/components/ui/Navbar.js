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
  Stack,
  Avatar
} from '@mui/material';
import Searchbar from './Searchbar';
import OutlinedButton from '../Buttons/OutlinedButton';
import FocusedButton from '../Buttons/FocusedButton';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { logoContent } from '../../utils/content'; 
import { deleteCookie, getCookieValue } from '../../utils/cookieUtils';

const {
    Logo
} = logoContent;

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigate = useNavigate();
    const userIdCookie = getCookieValue('user_id');
    const isAuthenticated = !!userIdCookie;
    const steamAvatarCookie = getCookieValue('steam_avatar_url');
    const avatarUrl = isAuthenticated ? steamAvatarCookie : '';

    const handleOpenUserMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        const cookiesToDelete = ['user_id','steam_avatar_url', 'steam_profile_url', 'steam_username', 'steam_id'];

        cookiesToDelete.forEach(cookieName => {
            deleteCookie(cookieName);
        });

        navigate('/signup'); // Redirect to the login page or any other desired page
    };

    return (
        <AppBar elevation={0} sx={{ py: 2, height: '100px' }}>
        <Container>
            <Toolbar disableGutters>
            <Box
                    component="img"
                    sx={{
                    height: 30,
                    width: 25,
                    marginRight:'20px',
                    ":hover": {
                        cursor: "pointer",
                        }
                    }}
                    src={Logo}
                    onClick={() => navigate('/')}
                />

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
                    { isAuthenticated ? (
                    // Render icon button when user is authenticated
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Avatar alt="User Avatar" onClick={handleOpenUserMenu} src={avatarUrl} />
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
                            <MenuItem onClick={() => {navigate('/profile')}}>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    ) : (
                        <>
                        <FocusedButton variant="contained" onClick={() => {navigate('/signup')}}>SignUp</FocusedButton>
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
