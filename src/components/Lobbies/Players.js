import React from 'react'
import { Box, Stack } from '@mui/material'

const Players = () => {
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
        <Stack sx={{height:500}} >
            <h1>Online Players</h1>
            
        </Stack>
    </Box>
  )
}

export default Players