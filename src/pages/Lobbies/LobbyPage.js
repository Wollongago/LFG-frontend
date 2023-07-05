import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../../components/ui/Navbar';

const LobbyPage = () => {
  const { game, roomId } = useParams();

  // Use game and roomId in your component logic

  // Simulated array of players joined in the room
  const players = ['Player 1', 'Player 2', 'Player 3'];

  // simulated json response from API
  // get info about game
  const getGameName = {
    app_id: 1172470,
    name: "Apex Legends"
  };

  // API parameters for Steam News
  const steamAppId = getGameName.app_id; // Replace with your game's AppID
  const newsCount = 3;
  const newsMaxLength = 300;

  const steamNewsUrl = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${steamAppId}&count=${newsCount}&maxlength=${newsMaxLength}&format=json`;

  const [newsItems, setNewsItems] = useState([]);

  // Fetch Steam news from the API
  useEffect(() => {
    const fetchSteamNews = async () => {
      try {
        const response = await fetch(steamNewsUrl);
        const data = await response.json();

        // Extract the news items from the API response
        const newsItems = data.appnews.newsitems;

        console.log(newsItems);

        // Set the extracted news items in state
        setNewsItems(newsItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSteamNews();
  }, [steamAppId, steamNewsUrl]);

  return (
    <Box>   

    <Navbar />
    <Box mt={13}>
      <Grid container spacing={3}>
        {/* Banner */}
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h4" align="center">
                Lobby
              </Typography>
              <Typography variant="h6" align="center">
                Game: {game}
              </Typography>
              <Typography variant="h6" align="center">
                Room: {roomId}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Steam News */}
        <Grid item xs={12} md={6}>
        <Paper elevation={3}>
            <Box p={2}>
            <Typography variant="h6">Steam News</Typography>
            {/* Fetch and display Steam news */}
            <ul>
                {newsItems.map((news, index) => (
                <li key={index}>
                    <Typography variant="h6" component="h2" gutterBottom>
                    {news.title}
                    </Typography>
                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: news.contents }} />
                    <Typography variant="caption">Author: {news.author}</Typography>
                </li>
                ))}
            </ul>
            </Box>
        </Paper>
        </Grid>


        {/* Player Information */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Player Information</Typography>
              <ul>
                {players.map((player, index) => (
                  <li key={index}>{player}</li>
                ))}
              </ul>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default LobbyPage;
