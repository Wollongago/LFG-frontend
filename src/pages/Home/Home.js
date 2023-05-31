// setup the home page
import React from 'react';
import Navbar from '../../components/ui/Navbar';
import Quickmatch from '../../containers/Home/Quickmatch';
import Friends from '../../containers/Home/Friends';

function Home() {
    return (
        <div className="Home">
            {/* navbar */}
            <Navbar />

            {/* left column: Quickmatch & Friends */}
            <Quickmatch />
            <Friends />

            {/* middle: Carousel & Favorites */}

            {/* right column: Rooms & History */}
            
        </div>
    );
}

export default Home;