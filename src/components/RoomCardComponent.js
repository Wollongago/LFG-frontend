import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material'
import FocusedButton from './Buttons/FocusedButton';

const RoomCardComponent = ( { roomsDataArray }) => {


    const displayedCards = roomsDataArray.slice(0, 4);

  return (
    <Box 
    sx={{ 
      width: '100%',
      backgroundColor: 'primary.dark',
      border: 1,
      borderColor: '#242424',
      borderRadius: 5,
      paddingTop: -2,
      paddingLeft: 5,
      paddingBottom: 1.5  }}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '100%',
            marginTop: '10px'
            
        }}>
            <h1>Rooms</h1>
        </Box>
         {displayedCards.map((cardData, index) => (
          <Card key={index} style={{ margin: '15px 10px'}} sx={{ maxWidth: 400 }}>
            <CardMedia height="90" component="img" src={cardData.picture} alt="Card image" />
            
            <CardContent sx={{ maxHeight: 80}}>
            <Typography variant="h6">{cardData.title}</Typography>
            <Box display="flex" alignItems="center" flexDirection="row"
            margin="auto">
              <Typography variant="body2" style={{ marginRight: 10 }}>
                Players:
              </Typography>
              <Typography variant="body2">{cardData.currentCapacity}</Typography>
              <Typography variant="body2" style={{ marginLeft: 10, marginRight: 10 }}>
                Open slots:
              </Typography>
              <Typography variant="body2">{cardData.availableSlots}</Typography>
              <FocusedButton sx={{width:'20px',height:'30px', marginLeft:'75px'}}>Join</FocusedButton>
            </Box>
            
          </CardContent>
            
          </Card>
        ))}
    </Box>
  )
}

export default RoomCardComponent