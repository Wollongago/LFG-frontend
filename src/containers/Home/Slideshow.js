import { Box } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    
    //   { src: '/path/to/image1.jpg', alt: 'Image 1' },
    //   { src: '/path/to/image2.jpg', alt: 'Image 2' },
    //   { src: '/path/to/image3.jpg', alt: 'Image 3' },
    { src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80', alt: 'Image 1' },
    { src: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', alt: 'Image 2' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dUXlU_JK7so20W03z8rEQOFfKQFOnITfKeaIa8W8&s', alt: 'Image 3' },
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