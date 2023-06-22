import React from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import FocusedButton from '../Buttons/FocusedButton';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const currentPlayers = [
    {
      roomId: 1,
      players: ['player1', 'player2'],
    },
    {
      roomId: 2,
      players: ['player1'],
    },
    {
      roomId: 3,
      players: ['player1', 'player 2'],
    },
  ];

  const roomsListArray = [
    {
      roomId: 1,
      game: 'Apex Legends',
      roomNo: 1,
      gameMode: 'Ranked',
      maxPlayers: 3,
      voice: true,
    },
    {
    roomId: 1,
      roomNo: 2,
      game: 'Apex Legends',
      gameMode: 'Unranked',
      maxPlayers: 2,
      voice: false,
    },
    {
      roomNo: 3,
      game: 'Apex Legends',
      gameMode: 'Unranked',
      maxPlayers: 2,
      voice: true,
    },
  ];
  const navigate = useNavigate();

  const handleJoin = (roomId) => {
    navigate(`/lobby/${roomId}`);
  };


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
        <h2>Lobby List</h2>
      {roomsListArray.map((room) => {
        const { roomId, game, roomNo, maxPlayers, gameMode } = room;
        const currentPlayersCount = currentPlayers.find(
          (player) => player.roomId === roomNo
        )?.players.length || 0;
        const isFull = currentPlayersCount === maxPlayers;

        return (
          <Stack
            key={roomNo}
            direction="row"
            alignItems="center"
            justifyContent="space-between" // Added to align the button to the right
            spacing={2}
            sx={{
              backgroundColor: '#0F0815',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '10px',
            }}
          >
            {/* Game Image */}
            <img
              src='https://www.citypng.com/public/uploads/preview/-516118340612lsu279ztk.png?v=2023060219'
              alt={`Game ${roomNo}`}
              style={{ width: '50px', height: '50px' }}
            />

            {/* Room Number */}
            <Typography variant="h5">{game} Room No. {roomNo} | {gameMode}</Typography>

            {/* Current Players */}
            <Typography variant="h5">Current Players: {currentPlayersCount}</Typography>

            {/* Max Players */}
            <Typography variant="h5">Max Players: {maxPlayers}</Typography>

            {/* Join Button */}
            <FocusedButton sx={{ fontSize: '20px', width:'90px'}} variant="contained" disabled={isFull}
            onClick={() => handleJoin(roomId)}>
              {isFull ? 'Full' : 'Join'}
            </FocusedButton>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Players;
