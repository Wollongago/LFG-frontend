// setup the home page
import React from 'react';
import { Skeleton, Box, Grid, Stack } from '@mui/material';
import { useState, useEffect } from 'react';

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
import SkeletonQuickmatch from '../../components/SkeletonLoading/Home/SkeletonQuickmatch';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
        
    return (
        <div>
        <Navbar />
        <Box sx={{ width: '100%', position: 'relative', marginTop: '100px' }}>
            <Grid container spacing={1} columns={16}>
            <Grid item xs={4}>
                <Box boxShadow={5} p={2}>
                {  
                    loading ? ( <SkeletonQuickmatch />) : (<Quickmatch />)
                }      
                </Box>
                <Box p={2} marginTop={'2%'}>
                <Suggested />
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box p={2}>
                <Slideshow />
                </Box>
                <Box p={2} marginTop={'2px'}>
                <CardComponent dataArray={dataArray} />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box p={2}>
                <RoomCardComponent roomsDataArray={roomsDataArray} />
                </Box>
            </Grid>
            </Grid>
        </Box>
        </div>
    );
    }

export default Home;