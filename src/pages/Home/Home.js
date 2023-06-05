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

// test component for slideshow
// import Slideshow from '../../components/__tests__/Slideshow';

// data for card component
import dataArray from '../../data/dataArray';

function Home() {
    return (
        <div >
            {/* navbar */}
            <Navbar />
            <Box sx={{ width: '100%', position: "relative", marginTop: "100px" }}>
                
                <Grid container spacing={3} columns={16} >
                    {/* left column: Quickmatch & Suggested */}
                    <Grid item={true} xs={4}>
                        <Box bgcolor="primary.light" p={2}>
                            <Quickmatch />
                        </Box>
                        <Box 
                            bgcolor="primary.light" 
                            p={2} 
                            marginTop={ '2%'}
                        >
                            <Suggested />
                        </Box>
                        
                    </Grid>
                    {/* middle: Carousel & Favorites */}
                    <Grid item={true} xs={8}>
                        <Box bgcolor="primary.light" p={2}>
                            <Slideshow />

                            {/* test component for slideshow */}
                            {/* <Slideshow />  */}
                        </Box>
                        <Box 
                            bgcolor="primary.light" 
                            p={5} 
                            alignItems="center"
                            marginTop={ '2%'}
                            
                        >
                            <CardComponent dataArray={dataArray} />
                            <Favorites />
                        </Box>
                    </Grid>
                    {/* right column: Rooms & History */}
                    <Grid item={true} xs={4}>
                        <Rooms />
                        <History />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;