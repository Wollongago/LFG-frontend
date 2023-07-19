import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from '../components/ui/Navbar'
import './Profile.css'
import { getCookieValue } from '../utils/cookieUtils'

const Profile = () => {
  // Simulated user data
  const steam_name = getCookieValue('steam_username');
  const steam_profile_url = getCookieValue('steam_profile_url')
  const avatar_url = getCookieValue('steam_avatar_url')
  const userData = {
    avatar: avatar_url,
    username: steam_name,
    steam_profile_url: steam_profile_url,
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
        <Typography variant="h4" className="username">{userData.username}</Typography>
        <a href={userData.steam_profile_url} target="_blank"> <img width={'60px'} src="https://static.vecteezy.com/system/resources/previews/020/975/558/original/steam-logo-steam-icon-transparent-free-png.png" alt="Steam" /> </a>
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