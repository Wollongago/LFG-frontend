import React from 'react'
import { Box, Stack, Button } from '@mui/material'

const Ads = () => {
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
        <Stack sx={{height:200}} >
            <h1>Your Ad Here</h1>
            
        </Stack>
    </Box>
  )
}

export default Ads