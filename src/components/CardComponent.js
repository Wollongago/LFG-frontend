import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

const CardComponent = ({ dataArray }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 5, dataArray.length - 1));
  };

  const displayedCards = dataArray.slice(currentIndex, currentIndex + 5);

  return (
    <Box sx={{ width: 1 }} >
      <Box>
        {currentIndex > 0 && (
          <Button onClick={handlePrevious}>Previous</Button>
        )}
        {currentIndex + 5 < dataArray.length && (
          <Button onClick={handleNext}>Next</Button>
        )}
      </Box>
      <Box display="flex" >
        {displayedCards.map((cardData, index) => (
          <Card key={index} style={{ margin: '0 10px'}}>
            <CardMedia height="200" component="img" src={cardData.picture} alt="Card image" />
            <CardContent>
              <Typography variant="h6">{cardData.title}</Typography>
              <Typography variant="body2">Players: {cardData.playerCount}</Typography>
              <Button variant="contained" color="primary">Button</Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CardComponent;
