import React from 'react'
import { AppBar, Button, Container, Stack } from '@mui/material'
import Searchbar from './Searchbar'
import OutlinedButton from '../Buttons/OutlinedButton'
import FocusedButton from '../Buttons/FocusedButton'

const Navbar = () => {
    return (
        <AppBar 
            elevation={0}
            sx={{
                py: 2,
                height: '100px'
            }}
        >
            <Container>
                <Stack 
                    direction="row"
                    alignItems="center"
                    justifycontent="space-evenly"
                    flexWrap="wrap"
                    spacing={3}
                >
                    <p>Logo</p>
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
                        sx={{ flex:1 }}    
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
                        {/* Sign up */}
                        <FocusedButton variant="contained">SignUp</FocusedButton>
                        {/* Log in */}
                        <OutlinedButton variant="contained">Log In</OutlinedButton>
                
                    </Stack>
                    

                </Stack>
            </Container>
        </AppBar>

    )
}

export default Navbar