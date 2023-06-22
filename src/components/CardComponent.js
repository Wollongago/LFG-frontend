import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import FocusedButton from "./Buttons/FocusedButton";
import { useNavigate } from "react-router-dom";
const CardComponent = ({ dataArray }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navigate = useNavigate();
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 5, dataArray.length - 1));
  };

  const displayedCards = dataArray.slice(currentIndex, currentIndex + 5);

  return (
    <Box sx={{ width: 1,backgroundColor: 'primary.dark',
    border: 1,
    borderColor: '#242424',
    borderRadius: 5,
    paddingTop: -2,
    paddingLeft: 1.5,
    paddingBottom: 1.5,
    
      }} >
      <Box>
        {currentIndex > 0 && (
          <Button variant="contained" color="primary" onClick={handlePrevious}>Previous</Button>
        )}
        {currentIndex + 5 < dataArray.length && (
          <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
        )}
      </Box>
      <Box display="flex" >
        {displayedCards.map((cardData, index) => (
          <Card key={index} style={{ margin: '0 10px'}} sx={{ maxWidth: 140 }}>
            <CardMedia height="200" component="img" src={cardData.picture} alt="Card image" />
            <CardContent sx={{ height:'160px'}}>
              <Typography variant="h6">{cardData.title}</Typography>
              <Typography variant="body2">Players: {cardData.playerCount}</Typography>
              <FocusedButton  onClick={() => navigate(`/lobby/${cardData.lobby}`)}>View </FocusedButton>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CardComponent;
