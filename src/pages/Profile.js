import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from '../components/ui/Navbar'


const Profile = () => {
  // Simulated user data
  const userData = {
    avatar: 'https://example.com/avatar.png',
    username: 'JohnDoe',
    achievements: {
      "Counter-Strike: Global Offensive": 30,
      "Dota 2": 15,
      "Apex Legends": 10,
      "PlayerUnknown's Battlegrounds (PUBG)": 5,
      "Grand Theft Auto V": 20,
      "Team Fortress 2": 25,
      "Unturned": 8,
      "Rust": 12,
      "Call of Duty: Modern Warfare 2: Warzone": 3,
      "War Thunder": 7
    }
  }

  return (
    <Box>
      <Navbar />
      <Box mt={15}>
        <img src={userData.avatar} alt="Avatar" />
        <Typography variant="h4">Username: {userData.username}</Typography>
        <Typography variant="h5">Achievements:</Typography>
        <ul>
          {Object.entries(userData.achievements).map(([game, count]) => (
            <li key={game}>
              {game} - {count}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default Profile
