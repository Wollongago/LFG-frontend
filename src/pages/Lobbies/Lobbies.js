import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import Navbar from '../../components/ui/Navbar'
import Ads from '../../components/Lobbies/Ads'
import Players from '../../components/Lobbies/Players'
import Rooms from '../../components/Lobbies/Rooms'
import { lobbyContent } from '../../utils/content'


const {
    ApexLegends
} = lobbyContent
const Lobbies = () => {

    const { id } = useParams();
    return (
        <Box>   
            <Navbar />
            <div>{id}</div>
            <Box sx={{ width: '100%', position: "relative", marginTop: "100px" }}
            >

            <Grid container spacing={1} columns={16}>
                <Grid item={true} xs={4}>
                    <Box boxShadow={5}  p={2}>
                        {/* ADS component */}
                        <Ads />
                    </Box>

                    <Box 
                        p={2} 
                        marginTop={ '2%'}
                    >
                        <Players />
                            
                    </Box>
                </Grid>
                <Grid item={true} xs={12}>

                <Box
                    component="img"
                    sx={{
                    marginTop: '2%',
                    marginRight: '2%',
                    height: 250,
                    width: 1,
                    borderRadius :2,
                    objectFit : 'cover'   
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={ApexLegends}
                />

                    <Box 
                    boxShadow={5} 
                    p={2}
                    marginTop={ '2%'}
                    >
                        <Rooms />
                        {/* <Box
                    component="img"
                    sx={{
                    marginTop: '2%',
                    marginRight: '2%',
                    height: 450,
                    width: 1,
                    borderRadius :2,
                    objectFit : 'cover'   
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={RoomPic}
                /> */}
                    </Box>

                </Grid>

            </Grid>
            </Box>
        </Box>
        
    )
}

export default Lobbies