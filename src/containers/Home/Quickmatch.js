import React from 'react'
import { Box, Stack } from '@mui/system'
import Button from '@mui/material/Button'

const Quickmatch = () => {
    return (
        <Box  sx={{
            borderBox: 'box-sizing',
            padding: '30px',
            width: 1,
            height: 1,
            backgroundColor: 'primary.dark',
            border: 1,
            borderColor: '#242424',
            borderRadius: 5
        }}>
            <Stack >
                <h1>Quickmatch</h1>
                <Button 
                    variant="contained" 
                    sx={{marginBottom: 1, 
                        marginTop: 3,
                        background: '#6441a5'}}
                > Quick LFG</Button>
                <Button 
                    variant="contained" 
                    sx={{marginBottom: 1, 
                        marginTop: 3,
                        background: '#9641a5'}}
                > Manual LFG</Button>
            </Stack>
        </Box>
    
    )
}

export default Quickmatch