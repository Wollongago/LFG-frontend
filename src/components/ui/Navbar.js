import React from 'react'
import { AppBar, Button, Container, Stack } from '@mui/material'
import Searchbar from './Searchbar'

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
                    justifyContent="space-evenly"
                    flexWrap="wrap"
                    spacing={3}
                >
                    <p>Logo</p>
                    {/* Link */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        jusityContent="center"
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
                        jusityContent="center"
                        spacing={3}
                    >
                        {/* Sign up */}
                        <p>Sign Up</p>
                        {/* Log in */}
                        <p>Log in</p>
                    </Stack>
                    

                </Stack>
            </Container>
        </AppBar>

    )
}

export default Navbar