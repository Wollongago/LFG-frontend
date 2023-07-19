import React from 'react'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'

const Suggested = () => {
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

      <Stack>
        <h1>Suggested Games</h1>
        {/* games */}
        
      </Stack>
    

    </Box>
  )
}

export default Suggested