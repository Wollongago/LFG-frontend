import { Box } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    
    //   { src: '/path/to/image1.jpg', alt: 'Image 1' },
    //   { src: '/path/to/image2.jpg', alt: 'Image 2' },
    //   { src: '/path/to/image3.jpg', alt: 'Image 3' },
    { src: 'https://www.techidate.com/wp-content/uploads/2021/09/Apex-Legends-Wallpaper.jpg', alt: 'Image 1' },
    { src: 'https://cutewallpaper.org/21/league-of-legends-wallpaper-hd/League-of-Legends-Wallpaper-Hd-Image-League-Legends-Of-.jpg', alt: 'Image 2' },
    { src: 'https://wallpapercave.com/wp/wp8492531.jpg', alt: 'Image 3' },
  ];

const Slideshow = () => {
    return (
        
        <Carousel 
            showThumbs={false} 
            autoPlay={true} 
            infiniteLoop={true} 
            showStatus={false}
            dynamicHeight={true}

        >
            {images.map((image, index) => (
                <div key={index}>
                <img src={image.src} alt={image.alt} height={430} style={{ borderRadius: '10px' }}/>
            </div>
            ))}
        </Carousel>
    )
}

export default Slideshow