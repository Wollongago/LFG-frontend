// setup the home page
import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1

import Navbar from '../../components/ui/Navbar';
import Quickmatch from '../../containers/Home/Quickmatch';
import Friends from '../../containers/Home/Friends';
import Carousel from '../../containers/Home/Carousel';
import Favorites from '../../containers/Home/Favorites';
import Rooms from '../../containers/Home/Rooms';
import History from '../../containers/Home/History';


function Home() {
    return (
        <div className="Home">
            {/* navbar */}
            <Navbar />

            <Grid container spacing={3}>
                {/* left column: Quickmatch & Friends */}
                <Grid item={true} xs>
                    <Quickmatch />
                    <Friends />
                </Grid>
                {/* middle: Carousel & Favorites */}
                <Grid item={true} xs={6}>
                    <Carousel />
                    <Favorites />
                </Grid>
                {/* right column: Rooms & History */}
                <Grid item={true} xs>
                    <Rooms />
                    <History />
                </Grid>
            </Grid>

        </div>
    );
}

export default Home;