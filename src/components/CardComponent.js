import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import FocusedButton from "./Buttons/FocusedButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    margin: 'auto',
    padding: 2,
    // paddingLeft: 1.5,
    // paddingBottom: 1.5,
    
      }} >
        {currentIndex > 0 && (
          <Button sx={{ padding: 0}}
          variant="contained" color="primary" onClick={handlePrevious}>
            <ArrowBackIcon /> 
          </Button>
        )}
        
      
      <Box display="flex" >
        {displayedCards.map((cardData, index) => (
          <Card key={index} style={{ margin: '0 10px'}} sx={{ maxWidth: 180 }}>
            <CardMedia height="200" component="img" src={cardData.picture} alt="Card image" />
            <CardContent sx={{ height:'160px'}}>
              <Typography variant="h6">{cardData.title}</Typography>
              <Typography variant="body2">Players: {cardData.playerCount}</Typography>
              <FocusedButton  onClick={() => navigate(`/lobby/${cardData.lobby}`)}>View </FocusedButton>
            </CardContent>
          </Card>
        ))}
      </Box>
      {currentIndex + 5 < dataArray.length && (
          <Button sx={{ padding: 0}} variant="contained" color="primary" onClick={handleNext}><ArrowForwardIcon /></Button>
        )}
    </Box>
  );
}

export default CardComponent;
