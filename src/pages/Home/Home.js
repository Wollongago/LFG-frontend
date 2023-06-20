// setup the home page
import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box'; // Box version 1

import Navbar from '../../components/ui/Navbar';
import Quickmatch from '../../containers/Home/Quickmatch';
import Suggested from '../../containers/Home/Suggested';
import Slideshow from '../../containers/Home/Slideshow';
import Favorites from '../../containers/Home/Favorites';
import Rooms from '../../containers/Home/Rooms';
import History from '../../containers/Home/History';
import CardComponent from '../../components/CardComponent';
import RoomCardComponent from '../../components/RoomCardComponent';

// test component for slideshow
// import Slideshow from '../../components/__tests__/Slideshow';

// data for card component
import dataArray from '../../data/dataArray';
// data for rooms component
import roomsDataArray from '../../data/roomsDataArray';

function Home() {
    return (
        <div >
            {/* navbar */}
            <Navbar />
            <Box sx={{ width: '100%', position: "relative", marginTop: "100px" }}>
                
                <Grid container spacing={1} columns={16} >
                    {/* left column: Quickmatch & Suggested */}
                    <Grid item={true} xs={4}>
                        <Box boxShadow={5}  p={2}>
                            <Quickmatch />
                        </Box>
                        <Box 
                            
                            p={2} 
                            marginTop={ '2%'}
                        >
                            <Suggested />
                        </Box>
                        
                    </Grid>
                    {/* middle: Carousel & Favorites */}
                    <Grid item={true} xs={8}>
                        <Box p={2}>
                            <Slideshow />

                            {/* test component for slideshow */}
                            {/* <Slideshow />  */}
                        </Box>
                        <Box 
                        
                            p={2} 
                            alignItems="center"
                            marginTop={ '2px'}
                            
                        >
                            
                            <CardComponent dataArray={dataArray} />
                        </Box>
                    </Grid>
                    {/* right column: Rooms & History */}
                    <Grid item={true} xs={4}>
                        <Box p={2}>
                            {/* <Rooms /> */}
                            <RoomCardComponent roomsDataArray={roomsDataArray} />
                            
                             {/* {console.log(roomsDataArray.slice(0, 4))} */}
                        </Box>
                        
                    
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;