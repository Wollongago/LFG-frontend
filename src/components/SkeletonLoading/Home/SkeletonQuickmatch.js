import React from 'react'
import { Box, Stack, Skeleton } from '@mui/material'

const SkeletonQuickmatch = () => {
  return (
    <Box
        sx={{
            borderBox: 'box-sizing',
            padding: '30px',
            width: 1,
            height: 1,
            backgroundColor: 'primary.dark',
            border: 1,
            borderColor: '#242424',
            borderRadius: 5,
        }}
        >
        <Stack>
            <Skeleton sx={{ }} animation="wave" height={40} width={200} />
            <Skeleton sx={{ marginBottom: 1,
        marginTop: 3, }} animation="wave" height={40} width={320} />
            <Skeleton sx={{ marginBottom: 1,
        marginTop: 3, }} animation="wave" height={40} width={320} />
        </Stack>
    </Box>
  )
}

export default SkeletonQuickmatch