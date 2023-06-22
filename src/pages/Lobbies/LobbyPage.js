import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Paper } from '@mui/material';
import Navbar from '../../components/ui/Navbar';

const LobbyPage = () => {
  const { game, roomId } = useParams();

  // Use game and roomId in your component logic

  // Simulated array of players joined in the room
  const players = ['Player 1', 'Player 2', 'Player 3'];

  return (
    <Box>
        <Navbar />
        <Box mt={14}>
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
                RoomId: {roomId}
              </Typography>
            </Box>
          </Paper>
        </Grid>

            {/* Chatbox */}
            <Grid item xs={12} md={6}>
            <Paper elevation={3}>
                <Box p={2}>
                {/* Chatbox component */}
                {/* Replace with your own chatbox component */}
                <Typography variant="h6">Chatbox</Typography>
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
