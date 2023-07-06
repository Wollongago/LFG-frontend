import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from '../components/ui/Navbar'
import './Profile.css'

const Profile = () => {
  // Simulated user data
  const userData = {
    avatar: 'https://example.com/avatar.png',
    username: 'Phil\'s Nuts',
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
    },
    gamesPlayed: [
      "Counter-Strike: Global Offensive",
      "Dota 2",
      "Apex Legends",
      "PlayerUnknown's Battlegrounds (PUBG)",
      "Grand Theft Auto V",
      "Team Fortress 2",
      "Unturned",
      "Rust",
      "Call of Duty: Modern Warfare 2: Warzone",
      "War Thunder",
    ]
  }

  return (
    <Box>
      <Navbar />
      <Box mt={15} className="profile">
        <img src={userData.avatar} alt="Avatar" />
        <Typography variant="h4" className="username">Username: {userData.username}</Typography>
        <Typography variant="h5" className="achievements">Achievements:</Typography>
        <ul className="achievements-list">
          {Object.entries(userData.achievements).map(([game, count]) => (
            <li key={game}>
              <span className="game">{game}</span> - <span className="count">{count}</span>
            </li>
          ))}
        </ul>
        <Typography variant="h5" className="games-played">Games Played:</Typography>
        <ul className="games-played-list">
          {userData.gamesPlayed.map(game => (
            <li key={game}>{game}</li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default Profile